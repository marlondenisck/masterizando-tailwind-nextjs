import { SettingsTabs } from '@/components/Settings'
import { Input } from '@/components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { FileInput } from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

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
      <h1 className='to-zinc-900 text-3xl font-medium dark:text-zinc-100'>
        Settings
      </h1>
      <SettingsTabs />

      <div className='mt-6 flex flex-col'>
        <div className='flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700'>
          <div className='space-y-1'>
            <h2 className='text-lg font-medium text-zinc-900 dark:text-zinc-100'>
              Personal info
            </h2>
            <span className='text-sm text-zinc-500 dark:text-zinc-400'>
              Update your photo and personal details here.
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Button type='button' variant='outline'>
              Cancel
            </Button>
            <Button type='submit' form='settings'>
              Save
            </Button>
          </div>
        </div>

        <form
          className='mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700'
          id='settings'
        >
          {/* NAME */}
          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form)'>
            <label
              htmlFor='firstName'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
            >
              Name
            </label>
            <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2'>
              <Input.Root>
                <Input.Control id='firstName' defaultValue='nome' />
              </Input.Root>
              <div className='flex flex-col gap-3 lg:block'>
                <label
                  htmlFor='lastName'
                  className='text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300'
                >
                  Last name
                </label>

                <Input.Root>
                  <Input.Control id='lastName' defaultValue='sobrenome' />
                </Input.Root>
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form)'>
            <label
              htmlFor='email'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
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
          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form)'>
            <label
              htmlFor='filePhoto'
              className='cursor-pointer text-sm font-medium text-zinc-700 dark:text-zinc-300'
            >
              Your Photo
              <span className='mt-0.5 block text-sm font-normal text-zinc-500'>
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className='flex flex-col gap-5 lg:flex-row lg:items-start'>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control accept='.jpg, .jpeg, image/jpeg' />
            </FileInput.Root>
          </div>

          {/* ROLE */}
          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form)'>
            <label
              htmlFor='role'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
            >
              Role
            </label>

            <Input.Root>
              <Input.Control id='role' defaultValue='CTO' />
            </Input.Root>
          </div>

          {/* COUNTRY */}
          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form)'>
            <label
              htmlFor='country'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
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
          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form)'>
            <label
              htmlFor='timezone'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
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
          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form)'>
            <label
              htmlFor='bio'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
            >
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
                  <Button type='button' variant='ghost'>
                    <Bold className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <Italic className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <Link className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <List className='h-4 w-4 text-zinc-500' strokeWidth={3} />
                  </Button>
                  <Button type='button' variant='ghost'>
                    <ListOrdered
                      className='h-4 w-4 text-zinc-500'
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id='bio'
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          {/* PORTIFOLIO */}
          <div className='flex flex-col gap-3 pb-5 lg:grid lg:grid-cols-(--form)'>
            <label
              htmlFor='projects'
              className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
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
            <Button type='button' variant='outline'>
              Cancel
            </Button>
            <Button type='submit'>Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
