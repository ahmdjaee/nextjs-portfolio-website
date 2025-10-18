import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"
import NextTopLoader from "nextjs-toploader"
import { BackToTopButton } from "@/components/back-to-top-button"

export const metadata: Metadata = {
  title: "Portfolio - Ahmad Jaelani",
  description: "Professional portfolio showcasing web development projects and expertise",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ScrollToTop />
        <BackToTopButton />
        <NextTopLoader color="oklch(0.72 0.18 150)" showSpinner={false} />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
