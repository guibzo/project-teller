import { Logo } from './logo'
import { Button } from './ui/button'

export const Header = () => {
  return (
    <div className='my-4 flex items-center justify-between sm:my-6'>
      <Logo />
      <Button className='px-8'>Login</Button>
    </div>
  )
}
