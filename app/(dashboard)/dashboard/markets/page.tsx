"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TrendingUp, TrendingDown } from "lucide-react"

const marketData = [
  { symbol: "BTC/USD", price: "45,230.50", change: "+2.5%", volume: "$2.4B", high: "46,200", low: "44,100" },
  { symbol: "ETH/USD", price: "2,890.25", change: "+1.8%", volume: "$1.2B", high: "2,950", low: "2,800" },
  { symbol: "EUR/USD", price: "1.0825", change: "-0.2%", volume: "$800M", high: "1.0850", low: "1.0800" },
  { symbol: "GBP/USD", price: "1.2650", change: "+0.5%", volume: "$600M", high: "1.2680", low: "1.2620" },
  { symbol: "USD/JPY", price: "149.85", change: "+0.3%", volume: "$500M", high: "150.20", low: "149.50" },
  { symbol: "XRP/USD", price: "0.5234", change: "-1.2%", volume: "$400M", high: "0.5350", low: "0.5200" },
  { symbol: "SOL/USD", price: "98.45", change: "+3.1%", volume: "$350M", high: "100.20", low: "95.80" },
  { symbol: "ADA/USD", price: "0.4823", change: "+0.8%", volume: "$200M", high: "0.4900", low: "0.4780" },
]

export default function MarketsPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Markets</h1>
        <p className="text-sm md:text-base text-[var(--color-muted-foreground)]">Real-time market data and prices</p>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Search markets..." className="w-full md:max-w-sm" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Market Overview</CardTitle>
          <CardDescription>Live prices and market data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 md:p-4 text-xs md:text-sm">Pair</th>
                  <th className="text-right p-2 md:p-4 text-xs md:text-sm">Price</th>
                  <th className="text-right p-2 md:p-4 text-xs md:text-sm hidden sm:table-cell">24h Change</th>
                  <th className="text-right p-2 md:p-4 text-xs md:text-sm hidden md:table-cell">24h Volume</th>
                  <th className="text-right p-2 md:p-4 text-xs md:text-sm hidden lg:table-cell">24h High</th>
                  <th className="text-right p-2 md:p-4 text-xs md:text-sm hidden lg:table-cell">24h Low</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((market, i) => {
                  const isPositive = market.change.startsWith("+")
                  return (
                    <tr key={i} className="border-b hover:bg-accent/50 cursor-pointer">
                      <td className="p-2 md:p-4 font-semibold text-sm md:text-base">{market.symbol}</td>
                      <td className="p-2 md:p-4 text-right font-medium text-sm md:text-base">{market.price}</td>
                      <td className={`p-2 md:p-4 text-right flex items-center justify-end gap-1 text-xs md:text-sm ${isPositive ? "text-green-600" : "text-red-600"} hidden sm:flex`}>
                        {isPositive ? <TrendingUp className="h-3 w-3 md:h-4 md:w-4" /> : <TrendingDown className="h-3 w-3 md:h-4 md:w-4" />}
                        {market.change}
                      </td>
                      <td className="p-2 md:p-4 text-right text-[var(--color-muted-foreground)] text-xs md:text-sm hidden md:table-cell">{market.volume}</td>
                      <td className="p-2 md:p-4 text-right text-[var(--color-muted-foreground)] text-xs md:text-sm hidden lg:table-cell">{market.high}</td>
                      <td className="p-2 md:p-4 text-right text-[var(--color-muted-foreground)] text-xs md:text-sm hidden lg:table-cell">{market.low}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

