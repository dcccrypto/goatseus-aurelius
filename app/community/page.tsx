"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageTransition } from "@/components/ui/page-transition"
import { BackButton } from "@/components/ui/back-button"
import { NavigationHeader } from "@/components/ui/navigation-header"
import { motion } from "framer-motion"
import { 
  Send, 
  Twitter, 
  Users, 
  Gift, 
  Trophy,
  Share2,
  ArrowRight,
  Rocket,
  Heart,
  Shield,
  Target,
  Video
} from "lucide-react"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function CommunityPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#2D1B4E]">
        <NavigationHeader />
        <div className="container py-8 px-4 md:px-6">
          <BackButton />
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the GOTA Community</h1>
              <p className="text-purple-200 text-lg md:text-xl max-w-2xl mx-auto">
                Be part of a movement that values transparency, resilience, and community-driven growth
              </p>
            </motion.div>

            {/* Social Platforms */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6 md:grid-cols-3 mb-16"
            >
              <motion.div variants={item}>
                <Card className="bg-purple-800/20 border-purple-700 transform transition-all duration-300 hover:scale-105 hover:bg-purple-800/30">
                  <div className="p-6 space-y-1.5">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/logos/x.png"
                        alt="X (Twitter)"
                        width={32}
                        height={32}
                        className="filter invert sepia saturate-[10000%] hue-rotate-[265deg]"
                      />
                      <h3 className="text-2xl font-semibold text-white">X.com</h3>
                    </div>
                  </div>
                  <CardContent className="text-center">
                    <p className="text-purple-100 mb-6">Follow us for the latest updates, announcements, and community highlights</p>
                    <Link href="https://x.com/GOTAGOAT1" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#F7B928] hover:bg-[#F7B928]/90 text-white w-full">
                        Follow on X
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="bg-purple-800/20 border-purple-700 transform transition-all duration-300 hover:scale-105 hover:bg-purple-800/30">
                  <div className="p-6 space-y-1.5">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/logos/telegram.png"
                        alt="Telegram"
                        width={32}
                        height={32}
                        className="filter invert sepia saturate-[10000%] hue-rotate-[265deg]"
                      />
                      <h3 className="text-2xl font-semibold text-white">Telegram</h3>
                    </div>
                  </div>
                  <CardContent className="text-center">
                    <p className="text-purple-100 mb-6">Join our Telegram for real-time discussions, support, and community updates</p>
                    <Link href="https://t.me/goatAURELIUS" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#F7B928] hover:bg-[#F7B928]/90 text-white w-full">
                        Join Telegram
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="bg-purple-800/20 border-purple-700 transform transition-all duration-300 hover:scale-105 hover:bg-purple-800/30">
                  <div className="p-6 space-y-1.5">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/assets/logos/tiktok.png"
                        alt="TikTok"
                        width={32}
                        height={32}
                        className="filter invert sepia saturate-[10000%] hue-rotate-[265deg]"
                      />
                      <h3 className="text-2xl font-semibold text-white">TikTok</h3>
                    </div>
                  </div>
                  <CardContent className="text-center">
                    <p className="text-purple-100 mb-6">Follow our TikTok for engaging content and community highlights</p>
                    <Link href="https://www.tiktok.com/@rum_burgundy" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#F7B928] hover:bg-[#F7B928]/90 text-white w-full">
                        Follow TikTok
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Community Benefits */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-yellow-500 mb-8 flex items-center">
                    <Trophy className="h-6 w-6 mr-3" />
                    Community Benefits
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="rounded-full bg-purple-900/50 p-3 mr-4">
                          <Gift className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Token Rewards</h3>
                          <p className="text-purple-100">
                            50,000,000 GOTA tokens allocated for all holders and community rewards
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-purple-900/50 p-3 mr-4">
                          <Share2 className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Giveaways</h3>
                          <p className="text-purple-100">
                            Regular giveaways and rewards for active community members
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="rounded-full bg-purple-900/50 p-3 mr-4">
                          <Target className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Token Flexibility</h3>
                          <p className="text-purple-100">
                            Freedom to use GOTA tokens for daily needs, personal objectives, or token burns
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-purple-900/50 p-3 mr-4">
                          <Heart className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">Community Events</h3>
                          <p className="text-purple-100">
                            Regular events, challenges, and opportunities to engage with fellow community members
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Engagement Opportunities */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-yellow-500 mb-8 flex items-center">
                    <Rocket className="h-6 w-6 mr-3" />
                    Ways to Engage
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Social Media",
                        description: "Follow and engage with our X, Telegram, and TikTok content",
                        icon: Share2
                      },
                      {
                        title: "Content Creation",
                        description: "Create and share GOTA-related content with the community",
                        icon: Video
                      },
                      {
                        title: "Event Participation",
                        description: "Join community events, challenges, and competitions",
                        icon: Users
                      }
                    ].map((item, index) => (
                      <Card key={index} className="bg-purple-900/30 border-purple-700">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <item.icon className="h-5 w-5 text-yellow-500 mr-3" />
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-purple-100">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Community Guidelines */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="h-6 w-6 text-yellow-500 mr-3" />
                    <h2 className="text-2xl font-bold text-white">Community Guidelines</h2>
                  </div>
                  <div className="space-y-6 text-purple-100">
                    <p className="text-lg">
                      Welcome to the GOTA community! We're building a strong, supportive environment where all members can
                      thrive. Please follow these guidelines:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        "Be respectful and supportive of all community members",
                        "Share knowledge and help others understand our project",
                        "Avoid spam and promotional content",
                        "Report any suspicious activity to moderators",
                        "Participate in community events and discussions",
                        "Follow our code of conduct and terms of service"
                      ].map((guideline, index) => (
                        <div key={index} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{guideline}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}