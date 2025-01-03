import Link from 'next/link'
import { Logo } from './logo'
import { Button } from './ui/button'

export const Header = () => {
  return (
    <div className='z-50 mb-5 mt-1 flex items-center justify-between'>
      <Link href='/'>
        <Logo />
      </Link>

      <Link href='/perfil/10'>
        <Button className='px-8'>Login</Button>
      </Link>
    </div>
  )
}
