import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estatein - Real Estate',
  description: 'Discover your dream property with Estatein',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} bg-black overflow-x-hidden w-full max-w-full`}>
        <Navbar />
        <main className="min-h-screen overflow-x-hidden w-full max-w-full">
          <div className="container-max px-4 sm:px-6 md:px-8 lg:px-12">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}