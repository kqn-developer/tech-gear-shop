import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Tech Gear',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className='admin-app'>{children}</div>
}
