import { cn } from '@/lib/cn'
import { LucideCrown } from 'lucide-react'

export const Logo = ({
  iconClassName,
  textClassName,
}: {
  iconClassName?: string
  textClassName?: string
}) => {
  return (
    <div className='flex items-center gap-2'>
      <LucideCrown className={cn('size-6 text-primary', iconClassName)} />
      <strong
        className={cn(
          'text-lg font-bold text-white sm:text-2xl',
          textClassName,
        )}
      >
        ProjectTeller
      </strong>
    </div>
  )
}
