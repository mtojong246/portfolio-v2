import './globals.css'
import 'animate.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Fira_Code } from 'next/font/google'

const fira = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Melanie Tojong',
  description: 'Designed and created by Melanie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira.className}>{children}</body>
    </html>
  )
}
