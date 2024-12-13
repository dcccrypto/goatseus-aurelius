import { NextResponse } from 'next/server'

// Simple in-memory cache with expiration
const cache = new Map<string, { data: any, timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const from = searchParams.get('from')
  const to = searchParams.get('to')

  // Generate cache key based on date range
  const cacheKey = `analytics-${from}-${to}`
  
  // Check cache first
  const cachedData = cache.get(cacheKey)
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_TTL) {
    return NextResponse.json(cachedData.data)
  }

  if (!process.env.VERCEL_PROJECT_ID || !process.env.VERCEL_TEAM_ID || !process.env.VERCEL_API_TOKEN) {
    console.error('Missing required environment variables:', {
      hasProjectId: !!process.env.VERCEL_PROJECT_ID,
      hasTeamId: !!process.env.VERCEL_TEAM_ID,
      hasApiToken: !!process.env.VERCEL_API_TOKEN
    })
    return NextResponse.json({ error: 'Missing required environment variables' }, { status: 500 })
  }

  // Base parameters for all requests
  const baseParams = {
    environment: 'production',
    filter: '{}',
    from: `${from}T00:00:00.000Z`,
    to: `${to}T23:59:59.999Z`,
    limit: '250',
    projectId: process.env.VERCEL_PROJECT_ID,
    teamId: process.env.VERCEL_TEAM_ID
  }

  // Create URLs using the insights endpoint
  const timeseriesUrl = `https://vercel.com/api/web/insights/stats/pageviews?${new URLSearchParams(baseParams)}`
  const referrersUrl = `https://vercel.com/api/web/insights/stats/referrer?${new URLSearchParams(baseParams)}`
  const countriesUrl = `https://vercel.com/api/web/insights/stats/country?${new URLSearchParams(baseParams)}`

  console.log('Fetching analytics with URLs:', {
    timeseriesUrl: timeseriesUrl.replace(process.env.VERCEL_API_TOKEN!, 'REDACTED'),
    from,
    to
  })

  try {
    const headers = {
      'Authorization': `Bearer ${process.env.VERCEL_API_TOKEN}`,
      'Content-Type': 'application/json'
    }

    const [timeseriesResponse, referrersResponse, countriesResponse] = await Promise.all([
      fetch(timeseriesUrl, { headers }),
      fetch(referrersUrl, { headers }),
      fetch(countriesUrl, { headers })
    ])

    // Enhanced error handling with response body logging
    if (!timeseriesResponse.ok || !referrersResponse.ok || !countriesResponse.ok) {
      const responses = {
        timeseries: { 
          status: timeseriesResponse.status, 
          statusText: timeseriesResponse.statusText,
          body: await timeseriesResponse.text()
        },
        referrers: { 
          status: referrersResponse.status, 
          statusText: referrersResponse.statusText,
          body: await referrersResponse.text()
        },
        countries: { 
          status: countriesResponse.status, 
          statusText: countriesResponse.statusText,
          body: await countriesResponse.text()
        }
      }

      console.error('API Response errors:', responses)

      // Handle rate limiting
      if (responses.timeseries.status === 429 || responses.referrers.status === 429 || responses.countries.status === 429) {
        return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
      }

      // Handle authentication errors
      if (responses.timeseries.status === 401 || responses.referrers.status === 401 || responses.countries.status === 401) {
        return NextResponse.json({ error: 'Authentication failed' }, { status: 401 })
      }

      return NextResponse.json({ 
        error: 'Failed to fetch analytics data',
        details: responses
      }, { status: 500 })
    }

    // Transform the data to match our expected format
    const [timeseriesData, referrersData, countriesData] = await Promise.all([
      timeseriesResponse.json(),
      referrersResponse.json(),
      countriesResponse.json()
    ])

    // Format the response data
    const responseData = {
      timeseries: {
        data: timeseriesData.map((entry: any) => ({
          key: entry.date || entry.timestamp,
          total: entry.pageViews || entry.total || 0,
          devices: entry.uniqueVisitors || entry.devices || 0
        }))
      },
      referrers: {
        data: referrersData.map((entry: any) => ({
          referrer: entry.referrer || 'Direct',
          total: entry.pageViews || entry.total || 0,
          devices: entry.uniqueVisitors || entry.devices || 0
        }))
      },
      countries: {
        data: countriesData.map((entry: any) => ({
          country: entry.country,
          total: entry.pageViews || entry.total || 0,
          devices: entry.uniqueVisitors || entry.devices || 0
        }))
      }
    }

    // Cache the successful response
    cache.set(cacheKey, {
      data: responseData,
      timestamp: Date.now()
    })

    return NextResponse.json(responseData)
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch analytics data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 