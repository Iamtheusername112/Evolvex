"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown } from "lucide-react"
import { toast } from "sonner"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const chartData = Array.from({ length: 30 }, (_, i) => ({
  time: `${i + 1}`,
  price: 45000 + Math.random() * 5000 - 2500,
}))

export default function TradingPage() {
  const [selectedPair, setSelectedPair] = useState("BTC/USD")
  const [orderType, setOrderType] = useState("market")
  const [side, setSide] = useState("buy")
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState("")

  const tradingPairs = [
    { symbol: "BTC/USD", price: "45,230.50", change: "+2.5%" },
    { symbol: "ETH/USD", price: "2,890.25", change: "+1.8%" },
    { symbol: "EUR/USD", price: "1.0825", change: "-0.2%" },
    { symbol: "GBP/USD", price: "1.2650", change: "+0.5%" },
  ]

  const handleTrade = () => {
    if (!amount) {
      toast.error("Please enter an amount")
      return
    }
    if (orderType === "limit" && !price) {
      toast.error("Please enter a price for limit orders")
      return
    }
    toast.success(`${side === "buy" ? "Buy" : "Sell"} order placed: ${amount} ${selectedPair}`)
    setAmount("")
    setPrice("")
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Trading</h1>
        <p className="text-sm md:text-base text-[var(--color-muted-foreground)]">Trade Forex and Crypto assets</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-lg md:text-xl">{selectedPair}</CardTitle>
                  <CardDescription className="text-xl md:text-2xl font-bold text-green-600">
                    {tradingPairs.find(p => p.symbol === selectedPair)?.price}
                  </CardDescription>
                </div>
                <Select value={selectedPair} onValueChange={setSelectedPair}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {tradingPairs.map((pair) => (
                      <SelectItem key={pair.symbol} value={pair.symbol}>
                        {pair.symbol}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Book</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-red-600 space-y-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{(45000 - (i + 1) * 10).toFixed(2)}</span>
                      <span>0.{i + 1}</span>
                    </div>
                  )).reverse()}
                </div>
                <div className="text-center py-2 font-bold">45,230.50</div>
                <div className="text-sm text-green-600 space-y-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{(45000 + (i + 1) * 10).toFixed(2)}</span>
                      <span>0.{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="sticky top-20 md:top-4">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Place Order</CardTitle>
            <CardDescription className="text-xs md:text-sm">Create a new trading order</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs value={side} onValueChange={setSide}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="buy" className="data-[state=active]:bg-green-600">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Buy
                </TabsTrigger>
                <TabsTrigger value="sell" className="data-[state=active]:bg-red-600">
                  <TrendingDown className="mr-2 h-4 w-4" />
                  Sell
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-2">
              <Label>Order Type</Label>
              <Select value={orderType} onValueChange={setOrderType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="market">Market</SelectItem>
                  <SelectItem value="limit">Limit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {orderType === "limit" && (
              <div className="space-y-2">
                <Label>Price</Label>
                <Input
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label>Amount</Label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <Button 
              className={`w-full ${side === "buy" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
              onClick={handleTrade}
            >
              {side === "buy" ? "Buy" : "Sell"} {selectedPair}
            </Button>

            <div className="pt-4 border-t space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Cost</span>
                <span className="font-medium">${amount ? (parseFloat(amount) * 45230).toFixed(2) : "0.00"}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

