'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

export default function ToggleMode() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant='ghost'
      className='ml-auto size-8 cursor-pointer px-0'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <SunIcon className='hidden dark:block' />
      <MoonIcon className='block dark:hidden' />
      <span className='sr-only'>Chuyển đổi Light-Dark mode</span>
    </Button>
  )
}
