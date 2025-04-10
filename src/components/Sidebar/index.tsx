import { Logo } from '@/components/Sidebar/Logo'
import { Search } from 'lucide-react'
import { MainNavigation } from '../MainNavigation'
export function Sidebar() {
  return (
    <aside className='space-y-6 border-r border-zinc-200 px-5 py-8'>
      <Logo />

      <div className='flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm'>
        <Search className='h-5 w-5 text-zinc-500' />
        <input
          type='text'
          className='flex-1 border-0 bg-transparent p-0 text-sm text-zinc-900 placeholder:text-zinc-600 focus:outline-none'
          placeholder='Search...'
        />
      </div>
      <MainNavigation />
    </aside>
  )
}
