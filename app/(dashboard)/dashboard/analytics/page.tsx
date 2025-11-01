"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const performanceData = [
  { month: "Jan", profit: 2000, trades: 45 },
  { month: "Feb", profit: 3500, trades: 52 },
  { month: "Mar", profit: 2800, trades: 48 },
  { month: "Apr", profit: 4200, trades: 61 },
  { month: "May", profit: 5100, trades: 67 },
  { month: "Jun", profit: 4800, trades: 59 },
]

const strategyData = [
  { strategy: "Scalping", trades: 120, winRate: 68, profit: 8500 },
  { strategy: "Day Trading", trades: 85, winRate: 72, profit: 12000 },
  { strategy: "Swing Trading", trades: 45, winRate: 65, profit: 9500 },
]

export default function AnalyticsPage() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">Track your trading performance and insights</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
            <CardDescription>Profit and trade count over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="profit" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trading Activity</CardTitle>
            <CardDescription>Number of trades per month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="trades" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Strategy Performance</CardTitle>
          <CardDescription>Breakdown by trading strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {strategyData.map((strategy, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">{strategy.strategy}</div>
                  <div className="text-green-600 font-medium">${strategy.profit.toLocaleString()}</div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{strategy.trades} trades</span>
                  <span>Win Rate: {strategy.winRate}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Total Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">250</div>
            <p className="text-sm text-muted-foreground mt-2">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">68.5%</div>
            <p className="text-sm text-muted-foreground mt-2">+2.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Avg. Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$120</div>
            <p className="text-sm text-muted-foreground mt-2">Per trade</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

