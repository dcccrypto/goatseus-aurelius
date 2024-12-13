import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const from = searchParams.get('from')
  const to = searchParams.get('to')

  const timeseriesUrl = `https://vercel.com/api/web-analytics/timeseries?environment=production&filter={}&from=${from}T00:00:00.000Z&projectId=${process.env.VERCEL_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}&to=${to}T23:59:59.999Z&tz=UTC`
  const referrersUrl = `https://vercel.com/api/web-analytics/referrers?environment=production&filter={}&from=${from}T00:00:00.000Z&projectId=${process.env.VERCEL_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}&to=${to}T23:59:59.999Z&tz=UTC`
  const countriesUrl = `https://vercel.com/api/web-analytics/countries?environment=production&filter={}&from=${from}T00:00:00.000Z&projectId=${process.env.VERCEL_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}&to=${to}T23:59:59.999Z&tz=UTC`

  try {
    const [timeseriesResponse, referrersResponse, countriesResponse] = await Promise.all([
      fetch(timeseriesUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.VERCEL_API_TOKEN}`
        }
      }),
      fetch(referrersUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.VERCEL_API_TOKEN}`
        }
      }),
      fetch(countriesUrl, {
        headers: {
          'Authorization': `Bearer ${process.env.VERCEL_API_TOKEN}`
        }
      })
    ])

    if (!timeseriesResponse.ok || !referrersResponse.ok || !countriesResponse.ok) {
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