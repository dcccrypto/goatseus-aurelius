"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

export function NavigationHeader() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-purple-800/10 backdrop-blur transition-all duration-300 ${
      scrolled ? "bg-[#2D1B4E]/95 shadow-lg" : "bg-transparent"
    }`}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-75 blur transition-all duration-500 group-hover:duration-200"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab76f2_8a1321a80ada404bab3767e7ac07936f~mv2-Dv1lOgfUpe0N3wqPrwgpgkWg22Knv7.webp"
            alt="GOTA Logo"
            width={40}
            height={40}
            className="rounded-full transition-transform group-hover:scale-110 relative"
          />
          <span className="hidden font-bold text-white sm:inline-block relative">GOTA</span>
        </Link>
        <nav className="flex gap-4">
          <Link href="/whitepaper" className="text-sm font-medium text-purple-200 hover:text-white transition-colors">
            Whitepaper
          </Link>
          <Link href="/about" className="text-sm font-medium text-purple-200 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/roadmap" className="text-sm font-medium text-purple-200 hover:text-white transition-colors">
            Roadmap
          </Link>
          <Link href="/community" className="text-sm font-medium text-purple-200 hover:text-white transition-colors">
            Community
          </Link>
        </nav>
      </div>
    </header>
  )
}