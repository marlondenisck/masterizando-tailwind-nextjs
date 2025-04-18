import * as Tabs from '@radix-ui/react-tabs'

export interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className='relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700'
    >
      <span>{title}</span>

      {isSelected && (
        <div className='absolute right-0 -bottom-px left-0 h-0.5 bg-violet-700' />
      )}
    </Tabs.Trigger>
  )
}
