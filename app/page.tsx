"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, MessageSquare, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  const [activePhase, setActivePhase] = React.useState("1")
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const tokenomicsData = {
    totalSupply: "1,010,000,000 GOTA",
    distribution: [
      { name: "Initial Liquidity Lock", percentage: 80, description: "Locked at launch for stability" },
      { name: "Community Rewards & Airdrops", percentage: 5, description: "50,500,000 tokens for top 20 holders" },
      { name: "Strategic Burns", percentage: 5, description: "50,500,000 tokens for scheduled burns" },
      { name: "Frozen Tokens", percentage: 10, description: "101,000,000 tokens released with BTC halvings" }
    ]
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#2D1B4E]">
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b border-purple-800/10 backdrop-blur transition-all duration-300 ${
        scrolled ? "bg-[#2D1B4E]/95 shadow-lg" : "bg-transparent"
      }`}>
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link className="flex items-center gap-2 group relative" href="#">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-75 blur transition-all duration-500 group-hover:duration-200"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab76f2_8a1321a80ada404bab3767e7ac07936f~mv2-Dv1lOgfUpe0N3wqPrwgpgkWg22Knv7.webp"
                alt="GOTA Logo"
                width={40}
                height={40}
                className="rounded-full transition-transform group-hover:scale-110 relative"
              />
              <span className="hidden font-bold text-white sm:inline-block relative">GOTA</span>
            </Link>
          </div>
          <nav className="flex items-center gap-2 md:gap-4">
            <Link className="text-xs md:text-sm font-medium text-white/90 hover:text-white transition-colors relative group" href="/whitepaper">
              Whitepaper
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link className="text-xs md:text-sm font-medium text-white/90 hover:text-white transition-colors relative group" href="#about">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link className="text-xs md:text-sm font-medium text-white/90 hover:text-white transition-colors relative group" href="#roadmap">
              Roadmap
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link className="text-xs md:text-sm font-medium text-white/90 hover:text-white transition-colors relative group" href="/community">
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
            <Button 
              className="bg-[#F7B928] hover:bg-[#F7B928]/90 text-white transition-all hover:scale-105 group relative overflow-hidden text-xs md:text-sm px-3 md:px-4 h-8 md:h-10"
            >
              Buy GOTA
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="relative mb-6 md:mb-8 inline-block">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-75 blur group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab76f2_8a1321a80ada404bab3767e7ac07936f~mv2-Dv1lOgfUpe0N3wqPrwgpgkWg22Knv7.webp"
                alt="GOTA Hero"
                width={160}
                height={160}
                className="relative rounded-full transform transition-transform duration-500 group-hover:scale-105 md:w-[200px] md:h-[200px]"
              />
            </div>
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white animate-fade-in">
              A Legacy of Resilience and Unity
            </h1>
            <p className="mb-6 md:mb-8 text-base md:text-lg text-purple-200 animate-fade-in-delayed">
              Goatseus Aurelius (GOTA) is a community-driven cryptocurrency built on principles of resilience, humor, and the enduring strength of the herd.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-delayed-more">
              <Button className="bg-[#F7B928] hover:bg-[#F7B928]/90 text-white transition-all hover:scale-105 group w-full sm:w-auto">
                Explore White Paper
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 text-white hover:bg-white/20 border-white/20 transition-all hover:scale-105 relative group overflow-hidden w-full sm:w-auto backdrop-blur-sm"
              >
                Join Community
              </Button>
            </div>
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-delayed-more">
              <Link href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="bg-white/10 text-white hover:bg-white/20 border-white/20 transition-all hover:scale-105 group text-sm backdrop-blur-sm flex items-center gap-2"
                >
                  <Image
                    src="/assets/logos/dexscreener.png"
                    alt="DexScreener"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  DexScreener
                </Button>
              </Link>
              <Link href="https://www.dextools.io" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="bg-white/10 text-white hover:bg-white/20 border-white/20 transition-all hover:scale-105 group text-sm backdrop-blur-sm flex items-center gap-2"
                >
                  <Image
                    src="/assets/logos/dextools.png"
                    alt="DexTools"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  DexTools
                </Button>
              </Link>
              <Link href="https://www.geckoterminal.com" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="bg-white/10 text-white hover:bg-white/20 border-white/20 transition-all hover:scale-105 group text-sm backdrop-blur-sm flex items-center gap-2"
                >
                  <Image
                    src="/assets/logos/geckoterminal.png"
                    alt="GeckoTerminal"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  GeckoTerminal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chart Section */}
      <section className="py-12 md:py-24 bg-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-purple-900/30"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Live Price Chart
            </h2>
            <div className="relative w-full aspect-[4/3] md:aspect-[5/4] rounded-lg overflow-hidden border border-purple-700 bg-white transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
              <iframe
                title="DEXTools Trading Chart"
                width="100%"
                height="100%"
                src="https://www.dextools.io/widget-chart/en/solana/pe-light/BYbGCRpD75B8JukmqYnMUN5G8s8Km469BtCo9P6Veijv?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
                className="absolute inset-0"
                style={{ border: 'none' }}
              />
            </div>
            <p className="mt-4 text-sm md:text-base text-purple-200">
              Real-time trading data powered by DEXTools
            </p>
          </div>
        </div>
      </section>

      {/* Technical Overview Section */}
      <section className="py-12 md:py-24 bg-purple-900/20 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white">Technical Overview</h2>
            <Card className="bg-purple-800/20 border-purple-700">
              <CardContent className="p-4 md:p-6">
                <h3 className="mb-4 text-lg md:text-xl font-bold text-yellow-500">Token Supply</h3>
                <p className="text-2xl font-bold text-purple-100 mb-6">{tokenomicsData.totalSupply}</p>
                <div className="grid gap-4">
                  {tokenomicsData.distribution.map((item, index) => (
                    <div key={index} className="text-left">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-purple-200">{item.name}</span>
                        <span className="text-sm text-purple-200">{item.percentage}%</span>
                      </div>
                      <Progress 
                        value={item.percentage} 
                        className="bg-purple-900" 
                        indicatorClassName="bg-yellow-500"
                      />
                      <p className="mt-1 text-xs text-purple-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Token Strategy Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white">Token Strategy</h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg md:text-xl font-bold text-yellow-500">Burn Events</h3>
                  <ul className="text-sm text-purple-100 space-y-2">
                    <li>• Initial Burn: 1,100,000 GOTA (October 28, 2024)</li>
                    <li>• Strategic Burns: Total 5% of supply</li>
                    <li>• Progressive burns with prior announcements</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg md:text-xl font-bold text-yellow-500">Token Freezing</h3>
                  <ul className="text-sm text-purple-100 space-y-2">
                    <li>• Total Frozen: 101,000,000 GOTA</li>
                    <li>• Phase 1: 50.5M unlocked with BTC halving</li>
                    <li>• Phase 2: 50.5M unlocked 4 years after</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="border-t border-purple-800/10 bg-[#2D1B4E] py-4 md:py-6">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center text-xs md:text-sm text-purple-200">
            <p className="mb-2">
              As with any digital asset, GOTA comes with inherent risks, including market volatility and liquidity issues. 
              Holders are advised to conduct thorough research and be aware of the inherent risks before investing.
            </p>
            <p>
              Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/10 bg-[#2D1B4E] py-4 md:py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab76f2_8a1321a80ada404bab3767e7ac07936f~mv2-Dv1lOgfUpe0N3wqPrwgpgkWg22Knv7.webp"
                alt="GOTA Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xs md:text-sm text-purple-200">Guided by Purpose, Fortified by Unity</span>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-purple-200 hover:text-white transition-colors transform hover:scale-110 flex items-center gap-2">
                <Image
                  src="/assets/logos/x-twitter.svg"
                  alt="X (Twitter)"
                  width={20}
                  height={20}
                  className="filter invert opacity-75 hover:opacity-100"
                />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="#" className="text-purple-200 hover:text-white transition-colors transform hover:scale-110 flex items-center gap-2">
                <Image
                  src="/assets/logos/discord.svg"
                  alt="Discord"
                  width={20}
                  height={20}
                  className="filter invert opacity-75 hover:opacity-100"
                />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="text-purple-200 hover:text-white transition-colors transform hover:scale-110 flex items-center gap-2">
                <Image
                  src="/assets/logos/github.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="filter invert opacity-75 hover:opacity-100"
                />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}