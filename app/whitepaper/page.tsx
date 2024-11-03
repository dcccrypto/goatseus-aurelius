"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageTransition } from "@/components/ui/page-transition"
import { BackButton } from "@/components/ui/back-button"
import { NavigationHeader } from "@/components/ui/navigation-header"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Rocket, Shield, Users, Zap, BarChart2, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/ui/footer"

export default function WhitepaperPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#2D1B4E]">
        <NavigationHeader />
        <div className="container py-8 px-4 md:px-6">
          <BackButton />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">GOATSEUS AURELIUS (GOTA) White Paper</h1>
              <p className="text-xl text-purple-200">A Community-Driven Cryptocurrency Built on Resilience and Transparency</p>
            </div>

            <Card className="bg-purple-800/20 border-purple-700 mb-12">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Abstract</h2>
                <p className="text-purple-100 text-lg leading-relaxed">
                  Goatseus Aurelius (GOTA) is a community-driven cryptocurrency built on principles of resilience, humor, and the enduring strength of the herd. In an industry dominated by technology and artificial intelligence, GOTA presents a human-centered approach, fostering loyalty and sustainable growth through robust tokenomics, transparent liquidity management, and community engagement.
                </p>
              </CardContent>
            </Card>

            <Tabs defaultValue="overview" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-purple-900/20">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <Card className="bg-purple-800/20 border-purple-700">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center">
                      <Rocket className="mr-2 h-6 w-6" />
                      Project Overview
                    </h3>
                    <ul className="space-y-4 text-purple-100">
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <span>Built on the Solana blockchain for high throughput and low fees</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <span>Focused on community-driven growth and decision-making</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <span>Implements transparent liquidity management and tokenomics</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <span>Combines humor with purpose in the evolving crypto space</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tokenomics" className="mt-6">
                <Card className="bg-purple-800/20 border-purple-700">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center">
                      <BarChart2 className="mr-2 h-6 w-6" />
                      Tokenomics
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">Token Supply</h4>
                        <p className="text-purple-100 mb-4">Total Supply: 1,000,000,000 GOTA</p>
                        <ul className="space-y-2 text-purple-100">
                          <li className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                            <span>Community Rewards: 5% (50,000,000 tokens) for all holders</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                            <span>Strategic Burns: 5% (50,000,000 tokens)</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                            <span>Frozen Tokens: 10% (100,000,000 tokens)</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">Liquidity Strategy</h4>
                        <ul className="space-y-2 text-purple-100">
                          <li className="flex items-start">
                            <Lock className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                            <span>70-80% of liquidity locked at launch</span>
                          </li>
                          <li className="flex items-start">
                            <Shield className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                            <span>Transparent adjustments for long-term stability</span>
                          </li>
                          <li className="flex items-start">
                            <Users className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                            <span>Community-verified liquidity management</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="community" className="mt-6">
                <Card className="bg-purple-800/20 border-purple-700">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center">
                      <Users className="mr-2 h-6 w-6" />
                      Community Engagement
                    </h3>
                    <div className="space-y-4 text-purple-100">
                      <p>GOTA fosters a strong community through various initiatives:</p>
                      <div className="flex gap-6 mb-6">
                        <Link 
                          href="https://x.com/GOTAGOAT1" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transform hover:scale-110 transition-transform"
                        >
                          <Image
                            src="/assets/logos/x.png"
                            alt="X (Twitter)"
                            width={32}
                            height={32}
                            className="filter invert sepia saturate-[10000%] hue-rotate-[265deg]"
                          />
                        </Link>
                        <Link 
                          href="https://t.me/goatAURELIUS" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transform hover:scale-110 transition-transform"
                        >
                          <Image
                            src="/assets/logos/telegram.png"
                            alt="Telegram"
                            width={32}
                            height={32}
                            className="filter invert sepia saturate-[10000%] hue-rotate-[265deg]"
                          />
                        </Link>
                        <Link 
                          href="https://www.tiktok.com/@rum_burgundy" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transform hover:scale-110 transition-transform"
                        >
                          <Image
                            src="/assets/logos/tiktok.png"
                            alt="TikTok"
                            width={32}
                            height={32}
                            className="filter invert sepia saturate-[10000%] hue-rotate-[265deg]"
                          />
                        </Link>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Zap className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                          <span>Airdrops: 5% of GOTA (50,000,000 tokens) for top 20 holders</span>
                        </li>
                        <li className="flex items-start">
                          <Zap className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                          <span>Regular giveaways and community events</span>
                        </li>
                        <li className="flex items-start">
                          <Zap className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                          <span>Token flexibility for various uses including burns</span>
                        </li>
                        <li className="flex items-start">
                          <Zap className="mr-2 h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                          <span>Active engagement on social platforms</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="roadmap" className="mt-6">
                <Card className="bg-purple-800/20 border-purple-700">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-yellow-500 mb-4 flex items-center">
                      <Rocket className="mr-2 h-6 w-6" />
                      Project Roadmap
                    </h3>
                    <div className="space-y-6">
                      {[
                        { phase: "Phase 1: Foundation", items: ["Mint Freeze", "Website Launch"] },
                        { phase: "Phase 2: Community Building", items: ["Social Media Expansion", "Community Events"] },
                        { phase: "Phase 3: Expansion", items: ["Strategic Burns", "Exchange Listings"] },
                        { phase: "Phase 4: Long-Term Strategy", items: ["Token Release Schedule", "Sustained Engagement"] }
                      ].map((phase, index) => (
                        <div key={index}>
                          <h4 className="text-xl font-bold text-white mb-2">{phase.phase}</h4>
                          <ul className="space-y-1 text-purple-100">
                            {phase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center">
                                <ArrowRight className="mr-2 h-4 w-4 text-yellow-500" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="bg-purple-800/20 border-purple-700">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Conclusion</h2>
                <p className="text-purple-100 text-lg leading-relaxed mb-6">
                  Goatseus Aurelius is more than a token—it's a resilient community, a movement, and a legacy. Built on principles of transparency, integrity, and sustainable growth, GOTA aims to foster a lasting legacy within the crypto space. Guided by purpose and fortified by the strength of the herd, GOTA stands as a testament to resilience and unity in an evolving industry.
                </p>
                <div className="flex justify-center">
                  <Link href="/community">
                    <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 transition-all hover:scale-105">
                      Join the GOTA Community
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  )
}