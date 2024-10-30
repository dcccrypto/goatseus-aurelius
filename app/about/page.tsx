"use client"

import React from "react"
import Image from "next/image"
import { PageTransition } from "@/components/ui/page-transition"
import { BackButton } from "@/components/ui/back-button"
import { NavigationHeader } from "@/components/ui/navigation-header"
import { Card, CardContent } from "@/components/ui/card"

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
                  src="/assets/logos/logo.png"
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

            <Card className="bg-purple-800/20 border-purple-700">
              <CardContent className="p-8">
                <div className="text-purple-100 space-y-6">
                  <p>
                    GOTA (Goatseus Aurelius) combines ancient stoic wisdom with modern cryptocurrency innovation,
                    creating a unique ecosystem that values resilience, community, and sustainable growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}