import { Providers } from '@/components/providers'
import { cn } from '@/lib/cn'
import '@/styles/global.css'
import type { Metadata } from 'next'
import { Kanit, Red_Hat_Display } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    template: '%s | Project Teller',
    default: 'Project Teller',
  },
}

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className={cn(redHatDisplay.className, kanit.className)}>
      <body className={cn('font-red-hat-display antialiased')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
