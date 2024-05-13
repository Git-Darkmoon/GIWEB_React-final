import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ReactQueryProvider from "@/utils/ReactQueryProvider"
import Navbar from "@/components/Navbar"
import { Toaster } from "react-hot-toast"
import NextTopLoader from "nextjs-toploader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GIWEB - Final Project",
  description:
    "Final project for approving the GIWEB - React and Next.js course",
  authors: [{ name: "Nicolas Mayorga" }],
  openGraph: {
    title: "GIWEB - Final Project",
    description:
      "Final project for approving the GIWEB - React and Next.js course",
    url: "https://giweb-finalproject.vercel.app/",
    siteName: "GIWEB - Final Project",
    images: [
      {
        url: "./handyIcon.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        <ReactQueryProvider>
          <NextTopLoader color="#ff6347" />
          <Toaster
            toastOptions={{
              style: {
                background: "#06030F",
                color: "#fafafa",
                border: "1px solid #ff6347",
              },
            }}
          />
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
