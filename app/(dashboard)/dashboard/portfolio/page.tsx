"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const holdings = [
  { asset: "Bitcoin", symbol: "BTC", amount: "2.5", value: "$112,576.25", change: "+5.2%" },
  { asset: "Ethereum", symbol: "ETH", amount: "15.0", value: "$43,353.75", change: "+3.8%" },
  { asset: "EUR", symbol: "EUR", amount: "10,000", value: "$10,825.00", change: "-0.1%" },
  { asset: "GBP", symbol: "GBP", amount: "5,000", value: "$6,325.00", change: "+0.3%" },
]

const pieData = [
  { name: "BTC", value: 112576, color: "#f59e0b" },
  { name: "ETH", value: 43354, color: "#627eea" },
  { name: "EUR", value: 10825, color: "#3b82f6" },
  { name: "GBP", value: 6325, color: "#8b5cf6" },
]

export default function PortfolioPage() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="text-muted-foreground">Manage your holdings and assets</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Holdings</CardTitle>
              <CardDescription>Your current asset positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {holdings.map((holding, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-semibold">{holding.asset}</div>
                      <div className="text-sm text-muted-foreground">{holding.amount} {holding.symbol}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{holding.value}</div>
                      <div className={`text-sm ${holding.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                        {holding.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Asset Distribution</CardTitle>
            <CardDescription>Portfolio allocation</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="buy">Buys</TabsTrigger>
              <TabsTrigger value="sell">Sells</TabsTrigger>
              <TabsTrigger value="deposit">Deposits</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-2 mt-4">
              {[
                { type: "Buy", asset: "BTC", amount: "0.5 BTC", price: "$22,615", date: "2024-01-15 10:30", status: "Completed" },
                { type: "Sell", asset: "ETH", amount: "5 ETH", price: "$14,451", date: "2024-01-14 15:20", status: "Completed" },
                { type: "Deposit", asset: "USD", amount: "$10,000", price: "$10,000", date: "2024-01-13 09:00", status: "Completed" },
                { type: "Buy", asset: "EUR", amount: "5,000 EUR", price: "$5,412", date: "2024-01-12 14:15", status: "Completed" },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{tx.type} {tx.asset}</div>
                    <div className="text-sm text-muted-foreground">{tx.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{tx.amount}</div>
                    <div className="text-sm text-muted-foreground">{tx.status}</div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

