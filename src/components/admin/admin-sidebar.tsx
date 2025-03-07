'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { adminNavItems } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import { AdminNavMain } from './admin-nav-main'
import { AdminNavUser } from './admin-nav-user'

export function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant='inset' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href='/admin'>
                <div className='bg-foreground dark:bg-background flex size-8 items-center justify-center overflow-hidden rounded-sm'>
                  <div className='size-5'>
                    <AspectRatio ratio={1}>
                      <Image src={'/vercel.svg'} alt='logo' fill className='h-full w-full object-contain' />
                    </AspectRatio>
                  </div>
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>Tech Gear</span>
                  <span className='truncate text-xs'>Administration</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <AdminNavMain items={adminNavItems} />
      </SidebarContent>
      <SidebarFooter>
        <AdminNavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
