import { SettingsTabs } from '@/components/Settings'
import { Input } from '@/components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { FileInput } from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'

export default function Home() {
  const countries = [
    { value: 'br', label: 'Brazil' },
    { value: 'us', label: 'United States' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'es', label: 'Spain' },
    { value: 'it', label: 'Italy' },
    { value: 'jp', label: 'Japan' },
  ]

  const timezones = [
    { value: 'utc-3', label: 'America/Brasilia' },
    { value: 'utc-4', label: 'America/Cuiabá' },
  ]

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

            <FileInput.Root className='flex items-start gap-5'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control accept='.jpg, .jpeg, image/jpeg' />
            </FileInput.Root>
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
            <Select placeholder='Select a country...'>
              {countries.map((country) => (
                <SelectItem
                  key={country.value}
                  value={country.value}
                  text={country.label}
                />
              ))}
            </Select>
          </div>

          {/* TIMEZONE */}
          <div className='grid grid-cols-(--form) gap-3 pb-5'>
            <label
              htmlFor='timezone'
              className='text-sm font-medium text-zinc-700'
            >
              Timezone
            </label>
            <Select placeholder='Select a timezone...'>
              {timezones.map((timezone) => (
                <SelectItem
                  key={timezone.value}
                  value={timezone.value}
                  text={timezone.label}
                />
              ))}
            </Select>
          </div>

          {/* BIO */}
          <div className='grid grid-cols-(--form) gap-3 pb-5'>
            <label htmlFor='bio' className='text-sm font-medium text-zinc-700'>
              Bio
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                Write a short introduction.
              </span>
            </label>
            <div className='space-y-3'>
              <div className='grid grid-cols-2 gap-3'>
                <Select placeholder='' defaultValue='normal'>
                  <SelectItem
                    value='normal'
                    defaultChecked
                    text='Normal Text'
                  />
                  <SelectItem value='md' text='Markdown' />
                </Select>

                <div className='flex items-center gap-1'>
                  <button
                    type='button'
                    className='rounded-md p-2 hover:bg-zinc-50'
                  >
                    <Bold className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </button>
                  <button
                    type='button'
                    className='rounded-md p-2 hover:bg-zinc-50'
                  >
                    <Italic className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </button>
                  <button
                    type='button'
                    className='rounded-md p-2 hover:bg-zinc-50'
                  >
                    <Link className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </button>
                  <button
                    type='button'
                    className='rounded-md p-2 hover:bg-zinc-50'
                  >
                    <List className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </button>
                  <button
                    type='button'
                    className='rounded-md p-2 hover:bg-zinc-50'
                  >
                    <ListOrdered
                      className='h-4 w-4 text-zinc-500'
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <Textarea
                id='bio'
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
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
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control
                multiple
                accept='.jpg, .jpeg, image/jpeg, .pdf'
              />
            </FileInput.Root>
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
