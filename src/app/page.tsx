export default function Home() {
  return (
    <div className='bg-slate-0 flex h-screen flex-col items-center justify-center p-4 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-50'>
      <div className='mx-auto max-w-[700px]'>
        <h1 className='flex items-center gap-2 before:h-4 before:w-1 before:bg-sky-50'>
          Ola mundo
        </h1>
        <h2 className='text-3xl font-bold md:text-5xl'>Ola tailwind</h2>
        <button
          disabled
          className='mt-4 cursor-pointer rounded bg-sky-500 px-4 py-2 text-white enabled:hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60'
        >
          Entrar
        </button>
      </div>
    </div>
  )
}
