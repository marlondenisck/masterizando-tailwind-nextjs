import { SettingsTabs } from '@/components/Settings'
import { Input } from '@/components/Input'

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-medium text-zinc-900'>Settings</h1>
      <SettingsTabs />

      <div className='mt-6 flex flex-col'>
        <div className='items- center flex justify-between border-b border-zinc-200 pb-5'>
          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900'>Personal info</h2>
            <span className='text-sm text-zinc-500'>
              Update your photo and personal details here.
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='cursor-pointer rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50'
            >
              Cancel
            </button>
            <button
              type='submit'
              form='settings'
              className='cursor-pointer rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700'
            >
              Save
            </button>
          </div>
        </div>

        <form className='mt-6 flex w-full flex-col gap-5' id='settings'>
          <div className='grid grid-cols-(--form) gap-3'>
            <label
              htmlFor='firstName'
              className='text-sm font-medium text-zinc-700'
            >
              Name
            </label>
            <div className='grid grid-cols-2 gap-6'>
              <Input.Root>
                <Input.Control id='firstName' defaultValue='nome' />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue='sobrenome' />
              </Input.Root>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
