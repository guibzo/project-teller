import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { socialLogos } from '@/constants/social-logos'
import { LucideUser } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const UserCard = () => {
  return (
    <Card className='h-fit w-[360px] rounded-tl-none border-none'>
      <CardContent className='h-fit rounded-2xl rounded-tl-none border'>
        <Avatar className='mx-auto size-[200px]'>
          <AvatarImage src='https://github.com/guibzo.png' />
          <AvatarFallback>
            <LucideUser className='size-24' />
          </AvatarFallback>
        </Avatar>

        <h1 className='mt-5 text-3xl font-bold tracking-tight text-white'>
          Guilherme Viana
        </h1>
        <p className='font-medium text-muted-foreground'>
          Desenvolvedor front-end
        </p>

        <Separator className='mb-4 mt-2 w-4/5' />

        <h6 className='text-xs font-semibold'>SOCIALS</h6>
        <ul className='mt-2 flex items-center gap-2.5'>
          {socialLogos.map((logo) => {
            const Icon = logo.src

            return (
              <li key={logo.id}>
                <Link href='#'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='bg-secondary brightness-110 hover:bg-secondary/50'
                  >
                    {typeof Icon === 'string' ? (
                      <Image
                        src={Icon}
                        alt={logo.name}
                        width={26}
                        height={26}
                      />
                    ) : (
                      <Icon size={26} className='shrink-0 text-white' />
                    )}
                  </Button>
                </Link>
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}
