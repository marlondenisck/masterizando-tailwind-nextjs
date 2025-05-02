import { LogOut } from 'lucide-react'
import { Button } from '@/components/Button'

export function Profile() {
  return (
    <div className='grid grid-cols-(--grid-profile) items-center gap-3'>
      <img
        src='https://github.com/marlondenisck.png'
        alt='Marlon'
        className='h-10 w-10 rounded'
      />
      <div className='flex flex-col truncate'>
        <span className='truncate text-sm font-semibold text-zinc-700'>
          Marlon
        </span>
        <span className='truncate text-sm text-zinc-700'>email@email.com</span>
      </div>
      <Button type='button' variant='ghost'>
        <LogOut className='h-5 w-5 text-zinc-500' />
      </Button>
    </div>
  )
}
