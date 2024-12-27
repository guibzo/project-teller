import { Logo } from './logo'
import { Button } from './ui/button'

export const Header = () => {
  return (
    <div className='mb-5 mt-1 flex items-center justify-between'>
      <Logo />
      <Button className='px-8'>Login</Button>
    </div>
  )
}
