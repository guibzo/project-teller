import { cn } from '@/lib/cn'

type Props = {
  clickAmount: number
  className?: string
}

const getColorByStrength = (amount: number) => {
  if (amount === 0) {
    return 'text-muted-foreground'
  }

  if (amount < 40) {
    return 'text-app-yellow-100'
  }

  return 'text-sky-500'
}

export const ClickIndicator = ({ clickAmount, className }: Props) => {
  return (
    <h4
      className={cn(
        'text-app-yellow-100 font-kanit text-sm font-medium',
        getColorByStrength(clickAmount),
        className,
      )}
    >
      {clickAmount} <span className='text-xs'>CLICKS</span>
    </h4>
  )
}
