import { cn } from '@/lib/cn'

export const FormError = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return (
    <p className={cn('text-sm font-medium text-red-500', className)}>
      {children}
    </p>
  )
}
