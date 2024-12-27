import { cn } from '@/lib/cn'

export const ContentContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <main
      className={cn(
        'mx-auto flex min-h-screen w-full max-w-7xl flex-col p-5',
        className,
      )}
    >
      {children}
    </main>
  )
}
