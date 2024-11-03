import { Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function Footer() {
  return (
    <footer className="border-t border-purple-800/10 bg-[#2D1B4E] py-4 md:py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6">
          {/* Main Footer Content */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logos/logo.png"
                alt="GOTA Logo"
                width={32}
                height={32}
                className="rounded-full"
                priority
              />
              <span className="text-xs md:text-sm text-purple-200">Guided by Purpose, Fortified by Unity</span>
            </div>
            <div className="flex gap-10">
              <Link 
                href="https://x.com/GOTAGOAT1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-200 hover:text-white transition-colors transform hover:scale-110"
              >
                <Image
                  src="/assets/logos/x.png"
                  alt="X (Twitter)"
                  width={44}
                  height={44}
                  className="opacity-80 hover:opacity-100 filter invert sepia saturate-[10000%] hue-rotate-[265deg]"
                />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link 
                href="https://t.me/goatAURELIUS" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-200 hover:text-white transition-colors transform hover:scale-110"
              >
                <Image
                  src="/assets/logos/telegram.png"
                  alt="Telegram"
                  width={44}
                  height={44}
                  className="opacity-80 hover:opacity-100 filter invert sepia saturate-[10000%] hue-rotate-[265deg]"
                />
                <span className="sr-only">Telegram</span>
              </Link>
              <Link 
                href="https://www.tiktok.com/@rum_burgundy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-200 hover:text-white transition-colors transform hover:scale-110"
              >
                <Image
                  src="/assets/logos/tiktok.png"
                  alt="TikTok"
                  width={44}
                  height={44}
                  className="opacity-80 hover:opacity-100 filter invert sepia saturate-[10000%] hue-rotate-[265deg]"
                />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          {/* Developer Support Section */}
          <div className="border-t border-purple-800/10 pt-6">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-purple-800/20 border-purple-700 hover:bg-purple-800/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                        <Code className="w-6 h-6 text-purple-900" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Developer Support</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-purple-200">Support the developer who brought GOTA to life</p>
                      <p className="text-sm text-purple-200/80">
                        Looking for a stunning website for your memecoin? This website was crafted by me! 
                        <br />
                        Reach out for professional web development services.
                      </p>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <Link
                        href="https://x.com/dcc_crypto" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-900/50 rounded-lg hover:bg-purple-900/70 transition-all duration-300 text-white"
                      >
                        <Image
                          src="/assets/logos/x.png"
                          alt="Developer X"
                          width={20}
                          height={20}
                          className="opacity-80 hover:opacity-100 filter invert"
                        />
                        <span>@dcc_crypto</span>
                      </Link>
                      <Link
                        href="https://t.me/plug2k" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-900/50 rounded-lg hover:bg-purple-900/70 transition-all duration-300 text-white"
                      >
                        <Image
                          src="/assets/logos/telegram.png"
                          alt="Developer Telegram"
                          width={20}
                          height={20}
                          className="opacity-80 hover:opacity-100 filter invert"
                        />
                        <span>@plug2k</span>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 