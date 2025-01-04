import { manageAuth } from '@/actions/manage-auth'
import { auth } from '@/lib/auth'
import { LucideLogIn, LucideLogOut, LucideUser2 } from 'lucide-react'
import Link from 'next/link'
import { Logo } from './logo'
import { Button } from './ui/button'

export const Header = async () => {
  const session = await auth()

  return (
    <div className='z-50 mb-5 mt-1 flex items-center justify-between'>
      <Link href='/'>
        <Logo />
      </Link>

      <form action={manageAuth} className='flex items-center gap-3'>
        {session && (
          <>
            <Link href='/perfil/10'>
              <Button className='flex items-center gap-2 px-4'>
                <LucideUser2 className='size-5' />
                Minha página
              </Button>
            </Link>

            <Button
              variant='destructive'
              className='flex items-center gap-2 px-4'
            >
              <LucideLogOut className='size-5' />
              Sair
            </Button>
          </>
        )}

        {!session && (
          <Button className='flex items-center gap-2 px-4'>
            <LucideLogIn className='size-5' />
            Entrar
          </Button>
        )}
      </form>
    </div>
  )
}
