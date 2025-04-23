import { SettingsTabs } from '@/components/Settings'
import { Input } from '@/components/Input'
import { Mail, UploadCloud, User } from 'lucide-react'

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

        <form
          className='mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200'
          id='settings'
        >
          {/* NAME */}
          <div className='grid grid-cols-(--form) gap-3 pb-5'>
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

          {/* EMAIL */}
          <div className='grid grid-cols-(--form) gap-3 pb-5'>
            <label
              htmlFor='email'
              className='text-sm font-medium text-zinc-700'
            >
              Email Address
            </label>

            <Input.Root>
              <Input.Icon>
                <Mail className='h-5 w-5 text-zinc-500' />
              </Input.Icon>
              <Input.Control
                id='email'
                type='email'
                defaultValue='email@email.com.br'
              />
            </Input.Root>
          </div>

          {/* PHOTO */}
          <div className='grid grid-cols-(--form) gap-3 pb-5'>
            <label
              htmlFor='filePhoto'
              className='cursor-pointer text-sm font-medium text-zinc-700'
            >
              Your Photo
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                This will be displayed on your profile.
              </span>
            </label>

            <div className='flex items-start gap-5'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-violet-50'>
                <User className='h-8 w-8 text-violet-500' />
              </div>

              <label
                htmlFor='filePhoto'
                className='group hover:bg-violet-25 flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:text-violet-500'
              >
                <div className='rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100'>
                  <UploadCloud className='h-5 w-5 text-zinc-600 group-hover:text-violet-600' />
                </div>
                <div className='flex flex-col items-center gap-1'>
                  <span className='text-sm'>
                    <span className='font-semibold text-violet-700'>
                      Click to upload
                    </span>{' '}
                    or grag and drop
                  </span>
                  <span className='text-xs'>
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </div>
              </label>
              <input type='file' id='filePhoto' className='sr-only' />
            </div>
          </div>

          {/* ROLE */}
          <div className='grid grid-cols-(--form) gap-3 pb-5'>
            <label htmlFor='role' className='text-sm font-medium text-zinc-700'>
              Role
            </label>

            <Input.Root>
              <Input.Control id='role' defaultValue='CTO' />
            </Input.Root>
          </div>

          {/* COUNTRY */}
          <div className='grid grid-cols-(--form) gap-3 pb-5'>
            <label
              htmlFor='country'
              className='text-sm font-medium text-zinc-700'
            >
              Country
            </label>
          </div>

          {/* TIMEZONE */}
          <div className='grid grid-cols-(--form) gap-3 pb-5'>
            <label
              htmlFor='timezone'
              className='text-sm font-medium text-zinc-700'
            >
              Timezone
            </label>
          </div>

          {/* BIO */}
          <div className='grid grid-cols-(--form) gap-3 pb-5'>
            <label htmlFor='bio' className='text-sm font-medium text-zinc-700'>
              Bio
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Write a short introduction.
              </span>
            </label>
          </div>

          {/* PORTIFOLIO */}
          <div className='grid grid-cols-(--form) gap-3 pb-5'>
            <label
              htmlFor='projects'
              className='text-sm font-medium text-zinc-700'
            >
              Portifolio projects
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Share a few snippets of your work.
              </span>
            </label>
          </div>

          <div className='flex items-center justify-end gap-2 pt-5'>
            <button
              type='button'
              className='cursor-pointer rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='cursor-pointer rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
