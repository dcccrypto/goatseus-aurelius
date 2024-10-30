"use client"

import * as React from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./button"

export function BackButton() {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      className="mb-8 bg-white/10 text-white hover:bg-white/20 border-white/20"
      onClick={() => router.back()}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </Button>
  )
}