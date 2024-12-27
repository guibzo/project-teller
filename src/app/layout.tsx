import { Providers } from '@/components/providers'
import { cn } from '@/lib/cn'
import '@/styles/global.css'
import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    template: '%s | ProjectTeller',
    default: 'ProjectTeller',
  },
}

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={cn('antialiased', redHatDisplay.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
