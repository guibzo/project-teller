import { Header } from '@/components/header'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { LucideUser } from 'lucide-react'
import { CreateInput } from './create-input'

export const Hero = () => {
  return (
    <>
      <Header />

      <div className='mt-20 grid grid-cols-5 gap-20'>
        <div className='col-span-3'>
          <div className='space-y-2.5'>
            <h1 className='text-5xl font-bold leading-[56px] text-white'>
              Seus projetos e redes sociais em um único link
            </h1>
            <h2 className='text-xl leading-6'>
              Crie sua própria página de projetos e compartilhe eles com o
              mundo!
              <br />
              Acompanhe o engajamento com análise de cliques
            </h2>
          </div>

          <CreateInput />
        </div>

        <div className='col-span-2'>
          <div className='flex w-2/4 rounded-b-none rounded-t-md bg-secondary px-3 py-1'>
            <div className='flex w-full items-center'>
              <h4 className='text-sm font-semibold text-emerald-500'>
                15 CLIQUES
              </h4>
            </div>
          </div>

          <Card className='rounded-tl-none border-none'>
            <CardContent className='rounded-2xl border'>
              <Avatar className='mx-auto size-[200px]'>
                <AvatarImage src='https://github.com/guibzo.png' />
                <AvatarFallback>
                  <LucideUser />
                </AvatarFallback>
              </Avatar>

              <h1 className='mt-5 text-3xl font-bold tracking-tight text-white'>
                Guilherme Viana
              </h1>
              <p className='text-muted-foreground'>Desenvolvedor front-end</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
