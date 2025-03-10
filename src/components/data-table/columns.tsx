'use client'

import { Product } from '@/types/types'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'thumbnail',
    header: 'Thumbnail',
  },
  {
    accessorKey: 'name',
    header: 'Tên sản phẩm',
  },
  {
    accessorKey: 'price',
    header: 'Giá',
  },
]
