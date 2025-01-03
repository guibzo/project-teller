import Link from 'next/link'
import { Button } from './ui/button'

export const UpgradeNowBanner = () => {
  return (
    <div className='flex w-full justify-center bg-app-bg-secondary py-2'>
      <span>
        Você está usando a versão trial.{' '}
        <Link href='/'>
          <Button
            size='fit'
            variant='link'
            className='text-primary hover:text-primary/90'
          >
            Faça o upgrade agora!
          </Button>
        </Link>
      </span>
    </div>
  )
}
