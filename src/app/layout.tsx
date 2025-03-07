import { ThemeProvider } from '@/components/theme-provider'
import { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tech Gear',
  description:
    'Tech Gear - nền tảng thương mại điện tử chuyên cung cấp linh kiện máy tính, PC và laptop chính hãng với giá tốt, đa dạng sản phẩm, và dịch vụ hỗ trợ chuyên nghiệp',
}

const be_vietnam_pro = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='vi' suppressHydrationWarning>
      <body className={be_vietnam_pro.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
