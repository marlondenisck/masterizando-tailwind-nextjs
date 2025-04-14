import { LogOut } from 'lucide-react'

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
      <button
        type='button'
        className='ml-auto cursor-pointer rounded-md p-2 hover:bg-zinc-50'
      >
        <LogOut className='h-5 w-5 text-zinc-500' />
      </button>
    </div>
  )
}
