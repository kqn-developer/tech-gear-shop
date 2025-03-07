import { Separator } from '@/components/ui/separator'

export default function NotFound() {
  return (
    <div className='page-not-found'>
      <div className='bg-primary/5 dark:bg-primary-foreground/80 flex min-h-screen items-center justify-center px-5'>
        <div className='bg-primary-foreground space-y-7 rounded-sm px-8 py-10 text-center sm:px-10 sm:py-12'>
          <header className='space-y-2'>
            <h1 className='text-primary text-4xl font-bold sm:text-5xl'>404</h1>
            <p className='text-primary/50 text-base font-medium sm:text-lg'>Lỗi - Không tìm thấy trang</p>
          </header>
          <Separator />
          <div className='space-y-1'>
            <p className='text-primary/85 text-sm font-medium'>Vui lòng kiểm tra lại URL</p>
            <p className='text-primary/70 text-sm'>
              Ngược lại,{' '}
              <a href='#' className='text-sky-600 hover:text-sky-500 hover:underline'>
                nhấn vào đây
              </a>{' '}
              để chuyển tới trang chủ
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
