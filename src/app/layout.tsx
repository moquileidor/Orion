import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ORION - Innovative Software Solutions',
  description: 'Leading technology company specializing in enterprise software development, custom solutions, and digital transformation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-space-black text-pure-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 