"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./button"

export function NavigationHeader() {
  return (
    <header className="w-full border-b border-white/10 bg-purple-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logos/logo.png"
              alt="GOTA Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-white text-xl">GOTA</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/about">
              <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                About
              </Button>
            </Link>
            <Link href="/whitepaper">
              <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                Whitepaper
              </Button>
            </Link>
            <Link href="/community">
              <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                Community
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}