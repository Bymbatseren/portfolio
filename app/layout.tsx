// app/layout.tsx
import "./globals.css"
import LoadingWrapper from "@/app/_components/loading-wrapper"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { Noto_Sans_Mongolian } from 'next/font/google'

const mongolian = Noto_Sans_Mongolian({ 
  subsets: ['mongolian'],
  weight: ['400'],
})

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang="en">
      

      <body className={`${inter.className} ${mongolian.className} antialiased bg-black text-white`}>
        <LoadingWrapper>{children}</LoadingWrapper>
      </body>
    </html>
  )
}