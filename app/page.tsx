"use client"

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, MessageSquare, Twitter, Copy, ExternalLink, Check, DollarSign, Wallet, ArrowRight, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NavigationHeader } from "@/components/ui/navigation-header"

export default function Component() {
  const [activePhase, setActivePhase] = useState("1")
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)

  const contractAddress = "Hdkhm7bFRR63zbFcLo3d1D6rJRnpe5yjrvMCAuqWdCrs"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const ticker = tickerRef.current
    if (ticker) {
      const animateTicker = () => {
        if (ticker.scrollLeft >= ticker.scrollWidth / 2) {
          ticker.scrollLeft = 0
        } else {
          ticker.scrollLeft += 1
        }
      }
      const animation = setInterval(animateTicker, 50)
      return () => clearInterval(animation)
    }
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tokenomicsData = {
    totalSupply: "1,010,000,000 GOTA",
    distribution: [
      { name: "Initial Liquidity Lock", percentage: 80, description: "Locked at launch for stability" },
      { name: "Community Rewards & Airdrops", percentage: 5, description: "50,500,000 tokens for top 20 holders" },
      { name: "Strategic Burns", percentage: 5, description: "50,500,000 tokens for scheduled burns" },
      { name: "Frozen Tokens", percentage: 10, description: "101,000,000 tokens released with BTC halvings" }
    ]
  }

  const tickerContent = [
    "$GOTA - The Resilient Cryptocurrency",
    "Total Supply: 1,010,000,000 GOTA",
    "Join the Herd Today!",
    "Community-Driven, Transparent Governance",
    "Liquidity Locked: 70-80%",
    "Strategic Burns for Long-Term Value"
  ].join(" • ");

  return (
    <div className="flex min-h-screen flex-col bg-[#2D1B4E]">
      {/* Ticker Tape */}
      <div className="bg-yellow-500 text-purple-900 py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          {tickerContent} {tickerContent}
        </div>
      </div>

      {/* Header */}
      <NavigationHeader variant="landing" />

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
          </div>
        </div>
      </section>

      {/* Contract Address Section */}
      <section className="py-8 bg-purple-900/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-white font-semibold">GOTA Contract Address:</span>
            <div className="flex items-center bg-purple-800/50 rounded-lg px-4 py-2">
              <span className="text-yellow-500 mr-2">{contractAddress}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={copyToClipboard}
                className="text-yellow-500 hover:text-yellow-400"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy GOTA Section */}
      <section className="py-12 md:py-24 bg-purple-900/20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">How to Buy GOTA</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-purple-800/20 border-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <DollarSign className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">Step 1: Get SOL</h3>
                  <p className="text-purple-100 mb-4">Purchase SOL from an exchange like Coinbase or Binance.</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-800/20 border-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Wallet className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">Step 2: Set Up Wallet</h3>
                  <p className="text-purple-100 mb-4">Create a Phantom wallet and transfer your SOL to it.</p>
                  <Link href="https://phantom.app/en-GB/download" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="mt-auto w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Get Phantom Wallet
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-purple-800/20 border-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ArrowRight className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">Step 3: Swap for GOTA</h3>
                  <p className="text-purple-100 mb-4">Use Jupiter Exchange to swap your SOL for GOTA tokens.</p>
                  <Link 
                    href="https://jup.ag/swap/SOL-Hdkhm7bFRR63zbFcLo3d1D6rJRnpe5yjrvMCAuqWdCrs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="mt-auto w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Swap for GOTA
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chart Section */}
      <section className="py-12 md:py-24 bg-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-purple-900/30"></div>
        <div className="container px-4 md:px-6 relative">
          <div  className="mx-auto max-w-3xl text-center">
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

      {/* Liquidity Strategy Section */}
      <section className="py-12 md:py-24 bg-purple-900/20 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white">Liquidity Strategy</h2>
            <div className="grid gap-6">
              <Card className="bg-purple-800/20  border-purple-700">
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg md:text-xl font-bold text-yellow-500">Initial Lock</h3>
                  <p className="text-sm text-purple-100">
                    70-80% of liquidity is locked at the outset, ensuring stability during the early growth phase. A portion will remain locked indefinitely, while a small percentage is reserved for strategic adjustments to enhance stability as the project matures.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg md:text-xl font-bold text-yellow-500">Community Verification</h3>
                  <p className="text-sm text-purple-100">
                    All liquidity adjustments and locks are transparently visible on the blockchain. This enables the community to track the project's liquidity and reinforces GOTA's emphasis on community trust.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-white">Community Engagement</h2>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg md:text-xl font-bold text-yellow-500">Airdrops & Rewards</h3>
                  <p className="text-sm text-purple-100">
                    5% of GOTA (50,500,000 tokens) allocated for top 20 holders and community rewards through platform engagement.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-4 md:p-6">
                  <h3 className="mb-2 text-lg md:text-xl font-bold text-yellow-500">Token Flexibility</h3>
                  <p className="text-sm text-purple-100">
                    Freedom to use GOTA tokens for daily needs, personal objectives, or token burns, empowering community participation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-12 md:py-24 bg-purple-900/20 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <h2 className="mb-8 md:mb-12 text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white">
            Roadmap
          </h2>
          <Tabs value={activePhase} onValueChange={setActivePhase} className="mx-auto max-w-3xl">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-purple-900/20">
              <TabsTrigger value="1" className="text-sm md:text-base">Phase 1</TabsTrigger>
              <TabsTrigger value="2" className="text-sm md:text-base">Phase 2</TabsTrigger>
              <TabsTrigger value="3" className="text-sm md:text-base">Phase 3</TabsTrigger>
              <TabsTrigger value="4" className="text-sm md:text-base">Phase 4</TabsTrigger>
            </TabsList>
            <TabsContent value="1" className="mt-6 text-purple-100">
              <h3 className="mb-4 text-lg md:text-xl font-bold text-yellow-500">Foundation</h3>
              <ul className="list-inside list-disc space-y-2 text-sm md:text-base">
                <li>Mint Freeze: Setting a fixed total supply by freezing the mint authority</li>
                <li>Website Launch: A dedicated site offering access to trading data, tokenomics, and a downloadable white paper</li>
              </ul>
            </TabsContent>
            <TabsContent value="2" className="mt-6 text-purple-100">
              <h3 className="mb-4 text-lg md:text-xl font-bold text-yellow-500">Community Building</h3>
              <ul className="list-inside list-disc space-y-2 text-sm md:text-base">
                <li>Social Media Engagement: Expanding presence on platforms to reward active community members</li>
                <li>Community Events: Launching events, meme challenges, and community giveaways</li>
              </ul>
            </TabsContent>
            <TabsContent value="3" className="mt-6 text-purple-100">
              <h3 className="mb-4 text-lg md:text-xl font-bold text-yellow-500">Expansion</h3>
              <ul className="list-inside list-disc space-y-2 text-sm md:text-base">
                <li>Strategic Burns and Partnerships: Expanding utility through partnerships and further strategic burns</li>
                <li>Exchange Listings: Adding GOTA to new decentralized and centralized exchanges</li>
              </ul>
            </TabsContent>
            <TabsContent value="4" className="mt-6 text-purple-100">
              <h3 className="mb-4 text-lg md:text-xl font-bold text-yellow-500">Long-Term Strategy</h3>
              <ul className="list-inside list-disc space-y-2 text-sm md:text-base">
                <li>Token Release Schedule: Frozen tokens released in alignment with Bitcoin halvings</li>
                <li>Sustained Community Engagement: Continued burns, airdrops, and events</li>
              </ul>
            </TabsContent>
          </Tabs>
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
                priority
              />
              <span className="text-xs md:text-sm text-purple-200">Guided by Purpose, Fortified by Unity</span>
            </div>
            <div className="flex gap-6">
              <Link 
                href="https://x.com/GOTAGOAT1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-200 hover:text-white transition-colors transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="https://t.me/goatAURELIUS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-200 hover:text-white transition-colors transform hover:scale-110"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </Link>
              <Link 
                href="https://www.tiktok.com/@rum_burgundy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-200 hover:text-white transition-colors transform hover:scale-110"
              >
                <Video className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}