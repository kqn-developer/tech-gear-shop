import { AdminNavItem } from '@/types/types'
import { Box, ChartNoAxesCombined, LayoutDashboard, ReceiptText, Users } from 'lucide-react'

export const adminNavItems: AdminNavItem[] = [
  {
    title: 'Dashboard',
    url: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Phân tích',
    url: '#',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Sản phẩm',
    url: '/admin/products',
    icon: Box,
    items: [
      {
        title: 'Tất cả',
        url: '#',
      },
      {
        title: 'Danh mục',
        url: '#',
      },
    ],
  },
  {
    title: 'Đơn hàng',
    url: '#',
    icon: ReceiptText,
  },
  {
    title: 'Thành viên',
    url: '#',
    icon: Users,
  },
]
