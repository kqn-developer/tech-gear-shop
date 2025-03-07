import { LucideIcon } from 'lucide-react'

export type AdminNavItem = {
  title: string
  url: string
  icon?: LucideIcon
  items?: AdminNavItem[]
}
