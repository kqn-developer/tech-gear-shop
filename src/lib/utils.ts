import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(price: number, locale: string = 'vi-VN', currency: string = 'VND') {
  return Intl.NumberFormat(locale, { style: 'currency', currency }).format(price)
}
