'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { formatCurrency } from '@/lib/utils'
import { Product } from '@/types/types'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import { AspectRatio } from '../ui/aspect-ratio'

export const columns: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'thumbnail',
    header: 'Thumbnail',
    cell: ({ row }) => {
      const src = row.original.thumbnail
      return (
        <div className='w-[80px] overflow-hidden rounded-md'>
          <AspectRatio ratio={16 / 9}>
            <Image src={src} alt='' fill className='h-full w-full object-cover' />
          </AspectRatio>
        </div>
      )
    },
  },
  {
    accessorKey: 'name',
    header: 'Tên sản phẩm',
  },
  {
    accessorKey: 'price',
    header: 'Giá',
    cell: ({ row }) => {
      const formattedPrice = formatCurrency(row.original.price)
      return <div>{formattedPrice}</div>
    },
  },
]
