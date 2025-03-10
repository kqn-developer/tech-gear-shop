import { LucideIcon } from 'lucide-react'

export type AdminNavItem = {
  title: string
  url: string
  icon?: LucideIcon
  items?: AdminNavItem[]
}

export type Product = {
  id: string
  name: string
  price: number
  thumbnail: string
}
