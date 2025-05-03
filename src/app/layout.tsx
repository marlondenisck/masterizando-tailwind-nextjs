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
    <html lang='en' className='antialiased'>
      <body className={inter.className}>
        <div className='min-h-screen lg:grid lg:grid-cols-(--grid-cols-app)'>
          <Sidebar />
          <main className='max-w-[100vw] px-4 pt-24 pb-12 lg:col-start-2 lg:px-8 lg:pt-8'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
