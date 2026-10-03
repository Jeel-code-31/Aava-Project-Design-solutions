import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google"
import { BackToTop } from "@/components/layout/BackToTop"
import "./globals.css"

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "AAVA Project & Design Solutions — Engineering Plants. Delivering Results.",
  description:
    "End-to-end EPCM consultancy for Food, Garment & Steel manufacturing — from concept to commissioned plant.",
  keywords: [
    "EPCM consultancy India",
    "Food manufacturing plant setup",
    "Garment textile plant engineering",
    "Steel heavy industry MEP",
    "Turnkey industrial project management",
    "FSSAI compliant plant design",
  ],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
  themeColor: "#4A171D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" data-scroll-behavior="smooth">
      <body className={`${body.variable} ${display.variable} antialiased`}>
        {children}
        <BackToTop />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
