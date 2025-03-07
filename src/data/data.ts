import { AdminNavItem } from '@/types/types'
import { Box, ChartNoAxesCombined, LayoutDashboard, ReceiptText } from 'lucide-react'

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
    url: '#',
    icon: Box,
  },
  {
    title: 'Đơn hàng',
    url: '#',
    icon: ReceiptText,
  },
]
