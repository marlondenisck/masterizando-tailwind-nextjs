import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
        <div className='grid-cols-app grid min-h-screen'>
          <aside className='border-r border-zinc-200 bg-[green] px-5 py-8'>
            sidebar
          </aside>
          <main className='bg-teste px-4 pt-8 pb-12'>{children}</main>
        </div>
      </body>
    </html>
  )
}
