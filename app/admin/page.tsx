"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface AnalyticsData {
  key: string
  total: number
  devices: number
}

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([])
  const [loading, setLoading] = useState(false)
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days ago
    to: new Date().toISOString().split('T')[0]
  })

  // This should be moved to .env.local in production
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "your_secure_password_here"

  const fetchAnalytics = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/analytics?from=${dateRange.from}&to=${dateRange.to}`)
      const data = await response.json()
      setAnalyticsData(data.data)
    } catch (err) {
      console.error('Error fetching analytics:', err)
      setError('Failed to fetch analytics data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalytics()
    }
  }, [isAuthenticated, dateRange])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid password")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#2D1B4E] p-4">
        <Card className="w-full max-w-md bg-purple-800/20 border-purple-700">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Access</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-purple-900/50 border-purple-600 text-white placeholder:text-purple-300"
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <Button 
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-purple-900"
              >
                Access Analytics
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#2D1B4E] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">GOTA Analytics Dashboard</h1>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <Input
                type="date"
                value={dateRange.from}
                onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
                className="bg-purple-900/50 border-purple-600 text-white"
              />
              <Input
                type="date"
                value={dateRange.to}
                onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
                className="bg-purple-900/50 border-purple-600 text-white"
              />
            </div>
            <Button
              onClick={() => setIsAuthenticated(false)}
              variant="outline"
              className="bg-purple-800/20 text-white border-purple-700 hover:bg-purple-700/30"
            >
              Logout
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6">
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-purple-800/20 border-purple-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Total Visits</h3>
                <p className="text-3xl font-bold text-yellow-500">
                  {analyticsData.reduce((sum, day) => sum + day.total, 0)}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple-800/20 border-purple-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Unique Devices</h3>
                <p className="text-3xl font-bold text-yellow-500">
                  {analyticsData.reduce((sum, day) => sum + day.devices, 0)}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-purple-800/20 border-purple-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Average Daily Visits</h3>
                <p className="text-3xl font-bold text-yellow-500">
                  {analyticsData.length ? Math.round(analyticsData.reduce((sum, day) => sum + day.total, 0) / analyticsData.length) : 0}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Chart */}
          <Card className="bg-purple-800/20 border-purple-700">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Traffic Overview</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B2D82" />
                    <XAxis 
                      dataKey="key" 
                      stroke="#E9D5FF"
                      tickFormatter={(value) => new Date(value).toLocaleDateString()}
                    />
                    <YAxis stroke="#E9D5FF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#4B2D82', 
                        border: '1px solid #6D28D9',
                        borderRadius: '8px'
                      }}
                      labelStyle={{ color: '#E9D5FF' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="total" 
                      stroke="#F7B928" 
                      name="Total Visits"
                      strokeWidth={2}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="devices" 
                      stroke="#10B981" 
                      name="Unique Devices"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 