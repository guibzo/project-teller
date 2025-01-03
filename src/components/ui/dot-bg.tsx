import { cn } from '@/lib/cn'
import { ReactNode } from 'react'

export const DotBg = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'relative flex w-full justify-center bg-dot-white/[0.2]',
        className,
      )}
    >
      <div className='pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_45%,black)]' />

      <div className='relative h-full'>{children}</div>
    </div>
  )
}
