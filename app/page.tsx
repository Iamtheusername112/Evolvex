import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs/server"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"
import { Footer } from "@/components/footer"

export default async function Home() {
  const user = await currentUser()
  
  if (user) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            EvolveX
          </h1>
          <div className="flex gap-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Premium Trading Platform
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              For Forex & Crypto
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trade with confidence on our professional platform. Advanced tools, 
            real-time data, and secure execution.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="text-lg px-8">
                Start Trading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
          <div className="p-6 bg-white/5 backdrop-blur rounded-lg border border-white/10">
            <TrendingUp className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
            <p className="text-gray-300">
              Real-time charts, market data, and comprehensive analytics to make informed decisions.
            </p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur rounded-lg border border-white/10">
            <Shield className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
            <p className="text-gray-300">
              Bank-level security with encrypted transactions and secure authentication.
            </p>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur rounded-lg border border-white/10">
            <Zap className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-300">
              Execute trades instantly with low latency and high-speed order processing.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
