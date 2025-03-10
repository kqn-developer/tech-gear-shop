import { productList } from '@/data/data' // Giả sử bạn lưu danh sách sản phẩm ở `src/data.ts`
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(productList)
}
