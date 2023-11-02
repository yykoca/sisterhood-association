import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from './ui/sidenav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sisterhood Association',
  description: 'Sisterhood Association',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNav />
        {children}
      </body>
    </html>
  )
}
