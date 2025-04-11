export function UsedSpaceWidget() {
  return (
    <div className='flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5'>
      <div className='space-y-1'>
        <span className='text-sm/loose font-medium text-violet-700'>
          Used space
        </span>
        <p className='text-sm/loose font-medium text-violet-500'>
          Your team has used 80% of your available space. Need More?
        </p>
      </div>
      <div className='h-2 rounded-full bg-violet-100'>
        <div className='h-2 w-[80%] rounded-full bg-violet-600' />
      </div>

      <div className='space-x-3'>
        <button
          type='button'
          className='cursor-pointer text-sm font-medium text-violet-500 hover:underline'
        >
          Dismiss
        </button>
        <button
          type='button'
          className='cursor-pointer text-sm font-medium text-violet-700 hover:underline'
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
