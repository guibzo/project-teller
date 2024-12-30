import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formatNumberToLocalePrice } from '@/utils/format-number-to-locale-price'

type PricingCardProps = {
  price: number
  name: string
}

export const HighlightedPricingCard = ({ price, name }: PricingCardProps) => {
  return (
    <Card className='border-2 bg-secondary/30'>
      <CardContent className='p-0 sm:p-0'>
        <div className='w-full rounded-t-lg bg-secondary py-1 text-center'>
          <span className='animate-pulse text-xs font-bold text-white'>
            RECOMENDADO
          </span>
        </div>

        <div className='p-4 sm:p-6'>
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl font-bold'>{name}</h3>
            <span className='text-sm text-muted-foreground'>
              Economize pagando apenas
            </span>
          </div>

          <span className='mt-10 block w-full text-center text-4xl font-bold text-white'>
            {formatNumberToLocalePrice(price)}
          </span>

          <Button variant='secondary' className='mt-3 w-full'>
            Assinar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
