import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { PageTransition } from "@/components/ui/page-transition"
import { BackButton } from "@/components/ui/back-button"
import { NavigationHeader } from "@/components/ui/navigation-header"
import Image from "next/image"
import { Shield, Users, Lightbulb, Scale, Target, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#2D1B4E]">
        <NavigationHeader />
        <div className="container py-8 px-4 md:px-6">
          <BackButton />
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="relative inline-block mb-8">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-75 blur"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab76f2_8a1321a80ada404bab3767e7ac07936f~mv2-Dv1lOgfUpe0N3wqPrwgpgkWg22Knv7.webp"
                  alt="GOTA Logo"
                  width={160}
                  height={160}
                  className="relative rounded-full"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About GOTA</h1>
              <p className="text-purple-200 text-lg md:text-xl max-w-2xl mx-auto">
                A Parody with Purpose in the Crypto Space, Building a Legacy of Resilience and Community
              </p>
            </div>

            <div className="grid gap-8 mb-16">
              <Card className="bg-purple-800/20 border-purple-700 hover:bg-purple-800/30 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-yellow-500 mb-6">Our Vision</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-purple-100 mb-4">
                        While GOTA playfully addresses the influence of AI in the crypto world, it serves as a reminder of the power of human-centered communities. We take a timeless approach to growth—building slowly, honestly, and with purpose.
                      </p>
                      <p className="text-purple-100">
                        By implementing clear tokenomics, transparent liquidity, and structured engagement, GOTA empowers individuals to participate in a purposeful project focused on long-term stability.
                      </p>
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Target className="h-5 w-5 mr-2 text-yellow-500" />
                        Key Objectives
                      </h3>
                      <ul className="space-y-3 text-purple-100">
                        <li className="flex items-start">
                          <Rocket className="h-5 w-5 mr-2 mt-1 text-yellow-500/70" />
                          <span>Building a sustainable and engaged community</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-5 w-5 mr-2 mt-1 text-yellow-500/70" />
                          <span>Maintaining transparent operations and governance</span>
                        </li>
                        <li className="flex items-start">
                          <Scale className="h-5 w-5 mr-2 mt-1 text-yellow-500/70" />
                          <span>Ensuring fair distribution and community rewards</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-800/20 border-purple-700 hover:bg-purple-800/30 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-yellow-500 mb-6">The Herd</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-purple-900/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Users className="h-5 w-5 mr-2 text-yellow-500" />
                        Community Values
                      </h3>
                      <ul className="space-y-3 text-purple-100">
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2 mr-2"></div>
                          <span>Unity through shared purpose and vision</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2 mr-2"></div>
                          <span>Active participation in governance</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2 mr-2"></div>
                          <span>Commitment to long-term growth</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-purple-100">
                        The community of GOTA, referred to as "the herd," represents a fellowship inspired by the principles of stoicism and resilience. We envision a decentralized network where members not only hold tokens but actively participate in the herd's progress and success.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-800/20 border-purple-700 hover:bg-purple-800/30 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-yellow-500 mb-6">Core Values</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-purple-900/30 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Shield className="h-6 w-6 text-yellow-500 mr-3" />
                        <h3 className="text-xl font-bold text-white">Transparency</h3>
                      </div>
                      <p className="text-purple-100">
                        All main wallet activities and liquidity adjustments are publicly viewable on the blockchain.
                      </p>
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Users className="h-6 w-6 text-yellow-500 mr-3" />
                        <h3 className="text-xl font-bold text-white">Community</h3>
                      </div>
                      <p className="text-purple-100">
                        Building a strong, united community through shared values and collective decision-making.
                      </p>
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-6">
                      <div className="flex items-center mb-4">
                        <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
                        <h3 className="text-xl font-bold text-white">Innovation</h3>
                      </div>
                      <p className="text-purple-100">
                        Combining humor with purpose while pushing the boundaries in the evolving crypto space.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Card className="bg-purple-800/20 border-purple-700 hover:bg-purple-800/30 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-yellow-500 mb-4">Our Mission</h2>
                  <p className="text-purple-100 max-w-3xl mx-auto">
                    To build a decentralized ecosystem that values community contribution and sustainable growth. Through clear tokenomics, transparent liquidity, and structured engagement, GOTA empowers individuals to participate in a purposeful project focused on long-term stability and community-driven success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}