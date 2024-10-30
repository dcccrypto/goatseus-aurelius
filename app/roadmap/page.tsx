"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { PageTransition } from "@/components/ui/page-transition"
import { BackButton } from "@/components/ui/back-button"
import { NavigationHeader } from "@/components/ui/navigation-header"
import { motion } from "framer-motion"
import { Flag, Rocket, Users, Building, Target, Check, ArrowRight } from "lucide-react"

export default function RoadmapPage() {
  const [activePhase, setActivePhase] = useState<number>(1)

  const phases = [
    {
      number: 1,
      title: "Foundation",
      icon: Flag,
      description: "Setting the groundwork for GOTA's success",
      status: "Completed",
      items: [
        "Mint Freeze: Setting a fixed total supply by freezing the mint authority",
        "Website Launch: A dedicated site offering access to trading data, tokenomics, and a downloadable white paper"
      ],
      color: "text-green-500"
    },
    {
      number: 2,
      title: "Community Building",
      icon: Users,
      description: "Growing and strengthening our community",
      status: "In Progress",
      items: [
        "Social Media Engagement: Expanding presence on platforms like Mainland to reward active community members",
        "Community Events: Launching events, meme challenges, and community giveaways"
      ],
      color: "text-yellow-500"
    },
    {
      number: 3,
      title: "Expansion",
      icon: Building,
      description: "Expanding GOTA's reach and utility",
      status: "Upcoming",
      items: [
        "Strategic Burns and Partnerships: Expanding utility through partnerships and further strategic burns",
        "Exchange Listings: Adding GOTA to new decentralized and centralized exchanges"
      ],
      color: "text-purple-400"
    },
    {
      number: 4,
      title: "Long-Term Strategy",
      icon: Target,
      description: "Ensuring sustainable growth",
      status: "Planned",
      items: [
        "Token Release Schedule: Frozen tokens released in alignment with Bitcoin halvings",
        "Sustained Community Engagement: Continued burns, airdrops, and events"
      ],
      color: "text-blue-400"
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#2D1B4E]">
        <NavigationHeader />
        <div className="container py-8 px-4 md:px-6">
          <BackButton />
          
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">GOTA Roadmap</h1>
              <p className="text-purple-200 text-lg md:text-xl max-w-2xl mx-auto">
                Our journey towards building a resilient and thriving community
              </p>
            </div>

            {/* Phase Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {phases.map((phase) => {
                const Icon = phase.icon
                return (
                  <motion.div
                    key={phase.number}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card 
                      className={`bg-purple-800/20 border-purple-700 cursor-pointer transition-colors ${
                        activePhase === phase.number ? 'bg-purple-800/40' : 'hover:bg-purple-800/30'
                      }`}
                      onClick={() => setActivePhase(phase.number)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="flex justify-center mb-2">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            activePhase === phase.number ? 'bg-yellow-500' : 'bg-purple-900/50'
                          }`}>
                            <Icon className={`h-5 w-5 ${
                              activePhase === phase.number ? 'text-purple-900' : 'text-purple-100'
                            }`} />
                          </div>
                        </div>
                        <h3 className="font-bold text-white">Phase {phase.number}</h3>
                        <p className={`text-sm ${phase.color}`}>{phase.status}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Active Phase Details */}
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-purple-900/50`}>
                      {phases[activePhase - 1].icon && (
                        <div>
                          {React.createElement(phases[activePhase - 1].icon, {
                            className: "h-6 w-6 text-yellow-500"
                          })}
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <h2 className="text-2xl font-bold text-yellow-500">
                        Phase {activePhase}: {phases[activePhase - 1].title}
                      </h2>
                      <p className={`text-sm ${phases[activePhase - 1].status === "Completed" ? "text-green-500" : phases[activePhase - 1].color}`}>
                        {phases[activePhase - 1].status}
                      </p>
                    </div>
                  </div>
                  <p className="text-purple-100 text-lg mb-6">
                    {phases[activePhase - 1].description}
                  </p>
                  <div className="space-y-4">
                    {phases[activePhase - 1].items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-start gap-3 text-purple-100"
                      >
                        <Check className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timeline Overview */}
            <div className="mt-12">
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Timeline Overview</h3>
                  <div className="relative">
                    <div className="absolute left-0 w-1 bg-purple-900/50 h-full"></div>
                    <div className="space-y-8 relative">
                      {phases.map((phase, index) => (
                        <motion.div
                          key={phase.number}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="ml-6"
                        >
                          <div className="absolute -left-3 w-6 h-6 rounded-full bg-purple-900 border-2 border-yellow-500"></div>
                          <div className={`${phase.number === activePhase ? 'text-white' : 'text-purple-200'}`}>
                            <h4 className="font-bold">Phase {phase.number}: {phase.title}</h4>
                            <p className="text-sm text-purple-300">{phase.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}