import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GOTA - A Legacy of Resilience and Unity",
  description: "Goatseus Aurelius (GOTA) is a community-driven cryptocurrency built on principles of resilience, humor, and the enduring strength of the herd.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
} 