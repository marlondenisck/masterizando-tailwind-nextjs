import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Masterizando o Tailwind',
  description: 'Aprendendo tawilind',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='grid min-h-screen grid-cols-(--grid-cols-app)'>
          <Sidebar />
          <main className='px-4 pt-8 pb-12'>{children}</main>
        </div>
      </body>
    </html>
  )
}
