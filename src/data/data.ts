import { AdminNavItem, Product } from '@/types/types'
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
        url: '/admin/products',
      },
      {
        title: 'Danh mục',
        url: '/admin/products/categories',
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

export const productList: Product[] = [
  {
    id: '628b4853-c528-4207-a43f-2f2d0caffe30',
    name: 'Gaming Laptop ASUS ROG Strix G15',
    price: 32000000,
    thumbnail: '/img/products/christin-hume-mfB1B1s4sMc-unsplash.jpg',
  },
  {
    id: '7f1d3a56-b5f4-4a63-a4a0-9f93c1c1d5a8',
    name: 'Intel Core i9-13900K Processor',
    price: 14990000,
    thumbnail: '/img/products/dai-ke-GkraTrCYA_0-unsplash.jpg',
  },
  {
    id: '3e2a4b67-6c9f-4d5b-9e27-1b5c8a7a9f21',
    name: 'NVIDIA GeForce RTX 4080',
    price: 32990000,
    thumbnail: '/img/products/luke-chesser-rCOWMC8qf8A-unsplash.jpg',
  },
  {
    id: 'bf9a67c2-e7a5-48b6-8b5c-4f72a1a7d0d8',
    name: 'Corsair Vengeance RGB Pro 32GB (2x16GB) DDR5',
    price: 4899000,
    thumbnail: '/img/products/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg',
  },
  {
    id: '2d8e6f5b-4f3a-4a9e-a5c1-6e2a8f7b2d3c',
    name: 'Samsung 970 EVO Plus 1TB NVMe SSD',
    price: 2499000,
    thumbnail: '/img/products/timothy-hales-bennett-OwvRB-M3GwE-unsplash.jpg',
  },
]
