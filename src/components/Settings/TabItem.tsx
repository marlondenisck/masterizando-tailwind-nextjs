import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'motion/react'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className='group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700'
    >
      <span className='rounded group-focus:ring-offset-4 group-focus-visible:ring-2 group-focus-visible:ring-violet-400'>
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId='motionTab'
          className='absolute right-0 -bottom-px left-0 h-0.5 bg-violet-700'
        />
      )}
    </Tabs.Trigger>
  )
}
