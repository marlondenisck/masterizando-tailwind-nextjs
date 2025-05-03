'use client'

import { Logo } from '@/components/Sidebar/Logo'
import {
  Search,
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Menu,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import * as Collapsible from '@radix-ui/react-collapsible'

export function Sidebar() {
  return (
    <Collapsible.Root className='fixed top-0 right-0 left-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0'>
      <div className='flex items-center justify-between'>
        <Logo />
        <Collapsible.Trigger asChild className='lg:hidden'>
          <Button variant='ghost'>
            <Menu className='h-6 w-6' />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className='flex flex-col data-[state=closed]:hidden lg:data-[state=closed]:flex'
      >
        <Input.Root>
          <Input.Icon>
            <Search className='h-5 w-5 text-zinc-500' />
          </Input.Icon>
          <Input.Control type='text' placeholder='Search...' />
        </Input.Root>

        <nav className='space-y-px'>
          <NavItem title='Home' icon={Home} />
          <NavItem title='Dashboard' icon={BarChart} />
          <NavItem title='Projects' icon={SquareStack} />
          <NavItem title='Tasks' icon={CheckSquare} />
          <NavItem title='Reporting' icon={Flag} />
          <NavItem title='Users' icon={Users} />
        </nav>

        <div className='mt-auto flex flex-col gap-6'>
          <nav className='space-y-0.5'>
            <NavItem title='Support' icon={LifeBuoy} />
            <NavItem title='Settings' icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className='h-px bg-zinc-200' />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
