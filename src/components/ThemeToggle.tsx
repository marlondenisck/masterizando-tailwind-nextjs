'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './Button'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evita hidratação inconsistente
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant='ghost'
      className='h-10 w-10 space-x-5'
      aria-label='Alternar tema'
    >
      {theme === 'dark' ? (
        <Sun className='h-5 w-5 text-zinc-200' />
      ) : (
        <Moon className='h-5 w-5 text-zinc-700' />
      )}
    </Button>
  )
}
