import { Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function Footer() {
  const [copied, setCopied] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2D1B4E] border-t border-purple-800/10">
      {/* Main Footer Content */}
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logos/logo.png"
                alt="GOTA Logo"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
              <span className="text-lg font-bold text-white">GOTA</span>
            </div>
            <p className="text-purple-200 text-sm">
              Guided by Purpose, Fortified by Unity
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/whitepaper" className="text-purple-200 hover:text-yellow-500 transition-colors">
                  White Paper
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-purple-200 hover:text-yellow-500 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Community</h3>
            <div className="flex gap-4">
              <Link 
                href="https://x.com/GOTAGOAT1" 
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <Image
                  src="/assets/logos/x.png"
                  alt="X (Twitter)"
                  width={24}
                  height={24}
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
                  width={24}
                  height={24}
                  className="filter invert sepia saturate-[10000%] hue-rotate-[265deg]"
                />
              </Link>
            </div>
          </div>

          {/* Trading */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Trading</h3>
            <div className="flex flex-col gap-2">
              <Link 
                href="https://dexscreener.com/solana/hdkhm7bfrr63zbfclo3d1d6rjrnpe5yjrvmcauqwdcrs" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-200 hover:text-yellow-500 transition-colors"
              >
                <Image
                  src="/assets/logos/dexscreener.png"
                  alt="DexScreener"
                  width={20}
                  height={20}
                />
                DexScreener
              </Link>
              <Link 
                href="https://www.dextools.io/app/en/solana/pair-explorer/hdkhm7bfrr63zbfclo3d1d6rjrnpe5yjrvmcauqwdcrs" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-200 hover:text-yellow-500 transition-colors"
              >
                <Image
                  src="/assets/logos/dextools.png"
                  alt="DexTools"
                  width={20}
                  height={20}
                />
                DexTools
              </Link>
            </div>
          </div>
        </div>

        {/* Developer Support Section */}
        <div className="mt-8 pt-8 border-t border-purple-800/10">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-semibold text-white">Developer Support</h3>
            </div>
            <p className="text-purple-200 text-sm max-w-xl">
              Support the developer who brought GOTA to life
            </p>
            <p className="text-purple-200 text-sm">
              Looking for a stunning website for your memecoin? This website was crafted by me!
              Reach out for professional web development services.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://x.com/@dcc_crypto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-900/40 px-4 py-2 rounded-lg text-purple-200 hover:text-yellow-500 transition-colors"
              >
                @dcc_crypto
              </Link>
              <Link 
                href="https://t.me/plug2k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-900/40 px-4 py-2 rounded-lg text-purple-200 hover:text-yellow-500 transition-colors"
              >
                @plug2k
              </Link>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer and Copyright */}
        <div className="mt-8 pt-8 border-t border-purple-800/10">
          <div className="grid md:grid-cols-2 gap-4 text-xs text-purple-200/80">
            <div>
              <p>
                Risk Disclaimer: Cryptocurrency investments carry inherent risks including market volatility and liquidity issues. 
                Past performance does not guarantee future results. DYOR.
              </p>
            </div>
            <div className="text-right">
              <p>© {currentYear} Goatseus Aurelius. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 