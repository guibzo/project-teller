import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formatNumberToLocalePrice } from '@/utils/format-number-to-locale-price'

type PricingCardProps = {
  price: number
  pricePerPeriodLabel?: string
  name: string
}

export const PricingCard = ({
  price,
  pricePerPeriodLabel,
  name,
}: PricingCardProps) => {
  return (
    <div className='flex h-full flex-col'>
      <div className='flex flex-1 flex-col justify-end'>
        <Card className='mt-auto bg-transparent'>
          <CardContent className='flex h-full flex-col gap-5'>
            <div className='flex flex-col items-center'>
              <h3 className='text-2xl font-bold'>{name}</h3>
              <span className='text-sm text-muted-foreground'>Por apenas</span>
            </div>

            <div className='flex flex-1 flex-col justify-end'>
              <div className='mt-auto inline-flex w-full items-center justify-center'>
                <span className='text-2xl font-bold text-white'>
                  {formatNumberToLocalePrice(price)}
                </span>{' '}
                <span className='text-sm text-muted-foreground'>
                  {pricePerPeriodLabel}
                </span>
              </div>

              <Button variant='secondary' className='mt-3 w-full'>
                Assinar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
