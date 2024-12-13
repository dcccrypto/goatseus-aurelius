import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const from = searchParams.get('from')
  const to = searchParams.get('to')

  if (!process.env.VERCEL_PROJECT_ID || !process.env.VERCEL_TEAM_ID || !process.env.VERCEL_API_TOKEN) {
    console.error('Missing required environment variables:', {
      hasProjectId: !!process.env.VERCEL_PROJECT_ID,
      hasTeamId: !!process.env.VERCEL_TEAM_ID,
      hasApiToken: !!process.env.VERCEL_API_TOKEN
    })
    return NextResponse.json({ error: 'Missing required environment variables' }, { status: 500 })
  }

  const timeseriesUrl = `https://api.vercel.com/v1/web-analytics/stats/timeseries?environment=production&filter={}&from=${from}T00:00:00.000Z&projectId=${process.env.VERCEL_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}&to=${to}T23:59:59.999Z&tz=UTC`
  const referrersUrl = `https://api.vercel.com/v1/web-analytics/stats/referrers?environment=production&filter={}&from=${from}T00:00:00.000Z&projectId=${process.env.VERCEL_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}&to=${to}T23:59:59.999Z&tz=UTC`
  const countriesUrl = `https://api.vercel.com/v1/web-analytics/stats/countries?environment=production&filter={}&from=${from}T00:00:00.000Z&projectId=${process.env.VERCEL_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}&to=${to}T23:59:59.999Z&tz=UTC`

  console.log('Fetching analytics with URLs:', {
    timeseriesUrl: timeseriesUrl.replace(process.env.VERCEL_API_TOKEN!, 'REDACTED'),
    from,
    to
  })

  try {
    const [timeseriesResponse, referrersResponse, countriesResponse] = await Promise.all([
      fetch(timeseriesUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.VERCEL_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }),
      fetch(referrersUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.VERCEL_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }),
      fetch(countriesUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.VERCEL_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      })
    ])

    if (!timeseriesResponse.ok || !referrersResponse.ok || !countriesResponse.ok) {
      console.error('API Response errors:', {
        timeseries: {
          status: timeseriesResponse.status,
          statusText: timeseriesResponse.statusText
        },
        referrers: {
          status: referrersResponse.status,
          statusText: referrersResponse.statusText
        },
        countries: {
          status: countriesResponse.status,
          statusText: countriesResponse.statusText
        }
      })
      
      const errorBodies = await Promise.all([
        timeseriesResponse.text(),
        referrersResponse.text(),
        countriesResponse.text()
      ])
      console.error('Error response bodies:', errorBodies)
      
      throw new Error('Failed to fetch analytics data')
    }

    const [timeseries, referrers, countries] = await Promise.all([
      timeseriesResponse.json(),
      referrersResponse.json(),
      countriesResponse.json()
    ])

    return NextResponse.json({
      timeseries,
      referrers,
      countries
    })
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 })
  }
} 