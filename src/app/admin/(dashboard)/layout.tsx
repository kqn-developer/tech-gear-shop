import AdminBreadcrumb from '@/components/admin/admin-breadcrumb'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import ToggleMode from '@/components/toggle-mode'
import { Separator } from '@/components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Tech Gear',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='admin-app'>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <header className='flex h-16 shrink-0 items-center gap-2'>
            <div className='flex items-center gap-2 px-4'>
              <SidebarTrigger className='-ml-1 cursor-pointer' />
              <Separator orientation='vertical' className='mr-2 h-4' />
              <AdminBreadcrumb />
            </div>
            <ToggleMode />
          </header>
          <div className='flex flex-1 p-4 pt-0'>{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
