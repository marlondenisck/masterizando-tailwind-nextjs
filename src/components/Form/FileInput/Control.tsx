'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInputContext } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInputContext()

  function handleFilesSeleted(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }

  return (
    <input
      type='file'
      id={id}
      className='sr-only'
      onChange={handleFilesSeleted}
      multiple={multiple}
      {...props}
    />
  )
}
