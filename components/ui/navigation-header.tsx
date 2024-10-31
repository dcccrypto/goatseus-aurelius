"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./button"

interface NavigationHeaderProps {
  variant?: 'landing' | 'default'
}

export function NavigationHeader({ variant = 'default' }: NavigationHeaderProps) {
  // Common navigation items in consistent order
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/whitepaper", label: "Whitepaper" },
    { href: "/community", label: "Community" },
  ]

  if (variant === 'landing') {
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
                priority
              />
              <span className="font-bold text-white text-xl">GOTA</span>
            </Link>
            
            <nav className="flex items-center gap-2 md:gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  className="text-xs md:text-sm font-medium text-white/90 hover:text-white transition-colors relative group" 
                  href={item.href}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all group-hover:w-full"></span>
                </Link>
              ))}
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
          </nav>
        </div>
      </header>
    )
  }

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
              priority
            />
            <span className="font-bold text-white text-xl">GOTA</span>
          </Link>
          
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}