'use client'

import { ChevronRight } from 'lucide-react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { AdminNavItem } from '@/types/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AdminNavMain({ items }: { items: AdminNavItem[] }) {
  const pathName = usePathname()

  return (
    <SidebarGroup>
      <SidebarMenu className='gap-1.5 pt-3'>
        {items.map((item) => (
          <Collapsible key={item.title} asChild>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title} isActive={pathName === item.url}>
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className='data-[state=open]:rotate-90'>
                      <ChevronRight />
                      <span className='sr-only'>Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
