"use client"

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, MessageSquare, Twitter, Copy, ExternalLink, Check, DollarSign, Wallet, ArrowRight, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/ui/footer"

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
      { name: "Initial Liquidity Lock", percentage: 99, description: "Locked at launch for stability" },
      { name: "Community Rewards & Airdrops", percentage: 15, description: "150,000,000 tokens for community rewards" },
      { name: "Strategic Burns", percentage: 5, description: "50,500,000 tokens for scheduled burns" },
      { name: "Frozen Tokens", percentage: 10, description: "100,000,000 tokens have been frozen" }
    ]
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#2D1B4E]">
      {/* Ticker Tape */}
      <div className="bg-yellow-500 text-purple-900 py-2 overflow-hidden">
        <div ref={tickerRef} className="whitespace-nowrap inline-block animate-marquee">
          <span className="inline-block px-4">$GOTA - The Resilient Cryptocurrency</span>
          <span className="inline-block px-4">Total Supply: {tokenomicsData.totalSupply}</span>
          <span className="inline-block px-4">Join the Herd Today!</span>
          <span className="inline-block px-4">Community-Driven, Transparent Governance</span>
          <span className="inline-block px-4">Liquidity Locked: 99%</span>
          <span className="inline-block px-4">Strategic Burns for Long-Term Value</span>
          <span className="inline-block px-4">$GOTA - The Resilient Cryptocurrency</span>
          <span className="inline-block px-4">Total Supply: {tokenomicsData.totalSupply}</span>
          <span className="inline-block px-4">Join the Herd Today!</span>
          <span className="inline-block px-4">Community-Driven, Transparent Governance</span>
          <span className="inline-block px-4">Liquidity Locked: 99%</span>
          <span className="inline-block px-4">Strategic Burns for Long-Term Value</span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b border-purple-800/10 backdrop-blur transition-all duration-300 ${
        scrolled ? "bg-[#2D1B4E]/95 shadow-lg" : "bg-transparent"
      }`}>
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Link className="flex items-center gap-2 group relative" href="#">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-75 blur transition-all duration-500 group-hover:duration-200"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Du5oqsRUx4piwE9IMgmNYLSDgeOd0m.png"
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
            <Link 
              href="https://jup.ag/swap/SOL-Hdkhm7bFRR63zbFcLo3d1D6rJRnpe5yjrvMCAuqWdCrs" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-[#F7B928] hover:bg-[#F7B928]/90 text-white transition-all hover:scale-105 group relative overflow-hidden text-xs md:text-sm px-3 md:px-4 h-8 md:h-10"
              >
                Buy GOTA
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="relative mb-6 md:mb-8 inline-block">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Du5oqsRUx4piwE9IMgmNYLSDgeOd0m.png"
                alt="GOTA Hero"
                width={160}
                height={160}
                className="relative rounded-full transform transition-transform duration-500 group-hover:scale-105 md:w-[200px] md:h-[200px]"
              />
            </div>
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white animate-fade-in">
              GOATSEUS AURELIUS<br/>A Legacy of Resilience and Unity
            </h1>
            <p className="mb-6 md:mb-8 text-base md:text-lg text-purple-200 animate-fade-in-delayed">
              Goatseus Aurelius (GOTA) is a community-driven cryptocurrency built on principles of resilience, humor, and the enduring strength of the purple herd.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-delayed-more">
              <Link href="/whitepaper">
                <Button className="bg-[#F7B928] hover:bg-[#F7B928]/90 text-white transition-all hover:scale-105 group w-full sm:w-auto">
                  Explore White Paper
                </Button>
              </Link>
              <Link href="/community">
                <Button 
                  variant="outline" 
                  className="bg-white/10 text-white hover:bg-white/20 border-white/20 transition-all hover:scale-105 relative group overflow-hidden w-full sm:w-auto backdrop-blur-sm"
                >
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Address and DEX Buttons Section */}
      <section className="py-8 bg-purple-900/30">
        <div className="container px-4 md:px-6">
          <Card className="bg-purple-800/20 border-purple-700">
            <CardContent className="p-6">
              <div className="flex flex-col gap-6">
                {/* Contract Address */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-lg bg-purple-900/40 border border-purple-700/50">
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Du5oqsRUx4piwE9IMgmNYLSDgeOd0m.png"
                      alt="GOTA Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-yellow-500">GOTA Contract Address</span>
                      <span className="text-xs text-purple-200">{contractAddress}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyToClipboard}
                    className="min-w-[100px] bg-purple-800/50 hover:bg-purple-700/50 text-yellow-500 hover:text-yellow-400"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 mr-2" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>

                {/* DEX Links */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Button className="w-full bg-purple-800/20 hover:bg-purple-700/30 text-white transition-all">
                    <Image
                      src="/assets/logos/dexscreener.png"
                      alt="DexScreener"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    DexScreener
                  </Button>
                  <Button className="w-full bg-purple-800/20 hover:bg-purple-700/30 text-white transition-all">
                    <Image
                      src="/assets/logos/dextools.png"
                      alt="DexTools"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    DexTools
                  </Button>
                  <Button className="w-full bg-gray-500/50 text-white cursor-not-allowed" disabled>
                    <Image
                      src="/assets/logos/coingecko.png"
                      alt="CoinGecko"
                      width={20}
                      height={20}
                      className="mr-2 opacity-50"
                    />
                    CoinGecko
                    <span className="ml-2 text-xs bg-yellow-500 text-purple-900 px-2 py-0.5 rounded-full">Soon</span>
                  </Button>
                  <Button className="w-full bg-gray-500/50 text-white cursor-not-allowed" disabled>
                    <Image
                      src="/assets/logos/coinmarketcap.png"
                      alt="CoinMarketCap"
                      width={20}
                      height={20}
                      className="mr-2 opacity-50"
                    />
                    CMC
                    <span className="ml-2 text-xs bg-yellow-500 text-purple-900 px-2 py-0.5 rounded-full">Soon</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
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
                  <Button 
                    variant="outline" 
                    className="mt-auto w-full bg-yellow-500 text-purple-900 hover:bg-yellow-600"
                    onClick={() => window.open('https://phantom.app/', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Get Phantom Wallet
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-purple-800/20 border-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ArrowRight className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">Step 3: Swap for GOTA</h3>
                  <p className="text-purple-100 mb-4">Use Jupiter Exchange to swap your SOL for GOTA tokens.</p>
                  <Button 
                    variant="outline" 
                    className="mt-auto w-full bg-yellow-500 text-purple-900 hover:bg-yellow-600"
                    onClick={() => window.open('https://jup.ag/swap/SOL-Hdkhm7bFRR63zbFcLo3d1D6rJRnpe5yjrvMCAuqWdCrs', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Go to Jupiter Exchange
                  </Button>
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
            <div className="flex justify-center items-center mt-4 space-x-4">
              
              <Image
                src="/assets/logos/dextools.png"
                alt="DEXTools"
                width={24}
                height={24}
                className="opacity-80 hover:opacity-100"
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
                    <li>• Total Frozen: 100,000,000 GOTA</li>
                    <li>• Phase 1: 50M unlocked with BTC halving</li>
                    <li>• Phase 2: 50M unlocked 4 years after</li>
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
                    5% of GOTA (50,000,000 tokens) allocated for all holders and community rewards through platform engagement.
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

      {/* Donation Section */}
      <section className="py-8 bg-purple-900/30">
        <div className="container px-4 md:px-6">
          <Card className="bg-purple-800/20 border-purple-700">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <h3 className="text-xl font-bold text-yellow-500">Support GOTA Community Events</h3>
                <p className="text-purple-200 text-sm">
                  Help us continue providing giveaways and community events by donating SOL for transaction fees
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 bg-purple-900/40 p-4 rounded-lg border border-purple-700/50">
                  <span className="text-white font-medium">Donation Address:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-sm">2uFKnc7BtS4jqArmiDs8uBkTDYR2oTjoA6XJ9h6A7aSu</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText("3rf4NThR65JBwLugKSMEPch7v3iab29HpiJHMa2AhKgj")
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                      }}
                      className="min-w-[100px] bg-purple-800/50 hover:bg-purple-700/50 text-yellow-500 hover:text-yellow-400"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 mr-2" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </div>
                <p className="text-purple-200/80 text-xs">
                  Your support helps maintain community engagement and rewards
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Press Release Section */}
      <section className="py-12 md:py-24 bg-purple-900/20">
        <div className="container px-4 md:px-6">
          <Card className="bg-purple-800/20 border-purple-700">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">Latest Press Coverage</h3>
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/logos/apnews.png"
                    alt="AP News"
                    width={100}
                    height={40}
                    className="opacity-80"
                  />
                  <span className="text-white font-semibold">Associated Press</span>
                </div>
                <div className="max-w-3xl">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    GOTA Token Emerges as a Pioneering Force in El Salvador's Cryptocurrency Landscape
                  </h4>
                  <p className="text-purple-100 mb-6">
                    A groundbreaking development in El Salvador's cryptocurrency sphere as GOTA token 
                    introduces innovative blockchain solutions and community-driven initiatives.
                  </p>
                  <Button 
                    variant="outline" 
                    className="bg-yellow-500 text-purple-900 hover:bg-yellow-600"
                    onClick={() => window.open('https://apnews.com/press-release/prcom/el-salvador-blockchain-25c3105ec96835ea2ee77f322ab8eb4f', '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read Full Article
                  </Button>
                </div>
                <div className="w-full border-t border-purple-700/50 my-6"></div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Card className="bg-purple-900/30 border-purple-700 p-4 flex items-center gap-2">
                    <span className="text-purple-200">Featured in</span>
                    <span className="text-yellow-500 font-semibold">AP News</span>
                  </Card>
                  <Card className="bg-purple-900/30 border-purple-700 p-4 flex items-center gap-2">
                    <span className="text-purple-200">Coverage</span>
                    <span className="text-yellow-500 font-semibold">Global</span>
                  </Card>
                  <Card className="bg-purple-900/30 border-purple-700 p-4 flex items-center gap-2">
                    <span className="text-purple-200">Focus</span>
                    <span className="text-yellow-500 font-semibold">El Salvador</span>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}