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

  // Create URLs using the insights endpoint format
  const timeseriesUrl = `https://vercel.com/api/web/insights/stats/path?${new URLSearchParams(baseParams)}`
  const referrersUrl = `https://vercel.com/api/web/insights/stats/referrer?${new URLSearchParams(baseParams)}`
  const countriesUrl = `https://vercel.com/api/web/insights/stats/country?${new URLSearchParams(baseParams)}`

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

    // Format the response data based on the actual response structure
    const responseData = {
      timeseries: {
        data: timeseriesData.data
          .map((entry: any) => {
            const date = new Date(entry.date || entry.timestamp || entry.key);
            // Skip invalid dates
            if (isNaN(date.getTime())) {
              return null;
            }
            return {
              key: date.toISOString(), // Always use ISO string format
              total: entry.pageViews || entry.total || 0,
              devices: entry.uniqueVisitors || entry.devices || 0
            };
          })
          .filter((entry: any) => entry !== null) // Remove invalid entries
          .sort((a: any, b: any) => new Date(a.key).getTime() - new Date(b.key).getTime())
      },
      referrers: {
        data: referrersData.data.map((entry: any) => ({
          referrer: entry.referrer || entry.key || 'Direct',
          total: entry.pageViews || entry.total || 0,
          devices: entry.uniqueVisitors || entry.devices || 0
        }))
      },
      countries: {
        data: countriesData.data.map((entry: any) => ({
          country: entry.country || entry.key || 'Unknown',
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