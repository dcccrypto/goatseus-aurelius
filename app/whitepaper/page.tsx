"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { PageTransition } from "@/components/ui/page-transition"
import { BackButton } from "@/components/ui/back-button"
import { NavigationHeader } from "@/components/ui/navigation-header"
import { motion } from "framer-motion"
import { Book, Shield, Rocket, Target } from "lucide-react"

export default function WhitepaperPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#2D1B4E]">
        <NavigationHeader />
        <div className="container py-8 px-4 md:px-6">
          <BackButton />
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">GOTA Whitepaper</h1>
              <p className="text-purple-200 text-lg md:text-xl">
                Technical Documentation and Project Overview
              </p>
            </motion.div>

            {/* Sections */}
            <div className="space-y-8">
              <Card className="bg-purple-800/20 border-purple-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-yellow-500 mb-6 flex items-center">
                    <Book className="h-6 w-6 mr-3" />
                    Introduction
                  </h2>
                  <div className="text-purple-100 space-y-4">
                    <p>
                      GOTA (Goatseus Aurelius) represents a unique fusion of ancient wisdom and modern cryptocurrency innovation.
                      This document outlines our technical infrastructure, tokenomics, and community-driven approach.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Add more sections as needed */}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
} 