import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

function InputIcon(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

function InputControl(props: InputControlProps) {
  return (
    <input
      type='text'
      className='flex-1 border-0 bg-transparent p-0 text-sm text-zinc-900 outline-none placeholder:text-zinc-600 focus:outline-none'
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

function InputRoot(props: InputRootProps) {
  return (
    <div
      className='flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100'
      {...props}
    />
  )
}

export const Input = {
  Root: InputRoot,
  Icon: InputIcon,
  Control: InputControl,
}
