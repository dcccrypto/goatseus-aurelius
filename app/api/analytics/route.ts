import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const from = searchParams.get('from')
  const to = searchParams.get('to')

  const analyticsUrl = `https://vercel.com/api/web-analytics/timeseries?environment=production&filter={}&from=${from}T00:00:00.000Z&projectId=${process.env.VERCEL_PROJECT_ID}&teamId=${process.env.VERCEL_TEAM_ID}&to=${to}T23:59:59.999Z&tz=UTC`

  try {
    const response = await fetch(analyticsUrl, {
      headers: {
        'Authorization': `Bearer ${process.env.VERCEL_API_TOKEN}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch analytics data')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 })
  }
} 