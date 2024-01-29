import {ReactNode} from "react"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loft pomodoro timer',
  description: 'Pomodoro Loft Timer is a simple, efficient, and user-friendly Pomodoro Technique timer ' +
    'application designed to boost productivity. This application helps users to break their work into intervals, ' +
    'traditionally 25 minutes in length, separated by short breaks.',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
