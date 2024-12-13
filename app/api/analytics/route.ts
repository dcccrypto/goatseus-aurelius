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

  // Updated API endpoints with proper encoding
  const baseParams = new URLSearchParams({
    environment: 'production',
    filter: '{}',
    from: `${from}T00:00:00.000Z`,
    to: `${to}T23:59:59.999Z`,
    projectId: process.env.VERCEL_PROJECT_ID,
    teamId: process.env.VERCEL_TEAM_ID,
    tz: 'UTC'
  }).toString()

  const timeseriesUrl = `https://api.vercel.com/v1/web-analytics/stats/timeseries?${baseParams}`
  const referrersUrl = `https://api.vercel.com/v1/web-analytics/stats/referrers?${baseParams}`
  const countriesUrl = `https://api.vercel.com/v1/web-analytics/stats/countries?${baseParams}`

  try {
    const headers = {
      'Authorization': `Bearer ${process.env.VERCEL_API_TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'GOTA-Analytics/1.0'
    }

    const [timeseriesResponse, referrersResponse, countriesResponse] = await Promise.all([
      fetch(timeseriesUrl, { headers }),
      fetch(referrersUrl, { headers }),
      fetch(countriesUrl, { headers })
    ])

    // Check for specific error status codes
    if (!timeseriesResponse.ok || !referrersResponse.ok || !countriesResponse.ok) {
      const responses = {
        timeseries: { status: timeseriesResponse.status, statusText: timeseriesResponse.statusText },
        referrers: { status: referrersResponse.status, statusText: referrersResponse.statusText },
        countries: { status: countriesResponse.status, statusText: countriesResponse.statusText }
      }

      // Handle specific status codes
      if (responses.timeseries.status === 508 || responses.referrers.status === 508 || responses.countries.status === 508) {
        console.error('Infinite loop detected in Vercel Analytics API:', responses)
        return NextResponse.json({ error: 'Analytics service temporarily unavailable' }, { status: 503 })
      }

      if (responses.timeseries.status === 401 || responses.referrers.status === 401 || responses.countries.status === 401) {
        console.error('Authentication failed with Vercel Analytics API:', responses)
        return NextResponse.json({ error: 'Analytics authentication failed' }, { status: 401 })
      }

      console.error('API Response errors:', responses)
      return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 })
    }

    const [timeseries, referrers, countries] = await Promise.all([
      timeseriesResponse.json(),
      referrersResponse.json(),
      countriesResponse.json()
    ])

    const responseData = {
      timeseries,
      referrers,
      countries
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