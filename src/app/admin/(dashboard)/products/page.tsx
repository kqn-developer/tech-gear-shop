'use client'

import { columns } from '@/components/data-table/columns'
import { DataTable } from '@/components/data-table/data-table'
import { Product } from '@/types/types'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ProductsPage() {
  const { data: products, error, isLoading } = useSWR<Product[]>('/api/products', fetcher)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Failed to load products</p>

  return (
    <div className='list-products mt-2'>
      <p className='text-2xl uppercase'>Danh sách sản phẩm</p>
      <div className='container mx-auto py-10'>
        <DataTable columns={columns} data={products || []} />
      </div>
    </div>
  )
}
