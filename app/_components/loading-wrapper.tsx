"use client"

import dynamic from "next/dynamic"
import type { ReactNode } from "react"

const SpaceLoading = dynamic(() => import("./space-loading"), { ssr: false })

export default function LoadingWrapper({ children }: { children: ReactNode }) {
  return <SpaceLoading>{children}</SpaceLoading>
}