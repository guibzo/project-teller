import { ContentContainer } from '@/components/content-container'
import { Header } from '@/components/header'
import { TotalVisits } from '@/components/total-visits'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { GridSmallBg } from '@/components/ui/grid-small-bg'
import { Separator } from '@/components/ui/separator'
import { socialLogos } from '@/constants/social-logos'
import { LucideUser } from 'lucide-react'
import Link from 'next/link'
import { CreateInput } from './components/create-input'

export const Hero = () => {
  return (
    <GridSmallBg>
      <ContentContainer>
        <div className='relative flex flex-1 flex-col'>
          <Header />

          <div className='-mt-10 flex flex-1 items-center'>
            <section className='my-auto grid grid-cols-5 gap-20'>
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

              <div className='relative col-span-2 ml-auto'>
                <div className='absolute -z-10 h-full w-full rounded-full bg-primary blur-3xl' />

                <div className='flex w-1/2 rounded-b-none rounded-t-md bg-card px-3 py-1'>
                  <div className='flex w-full items-center'>
                    <span className='flex size-2.5 items-center'>
                      <span className='absolute inline-flex size-2.5 animate-ping rounded-full bg-green-200 opacity-75' />
                      <span className='inline-flex size-2.5 rounded-full bg-emerald-400' />
                    </span>

                    <h4 className='ml-2 font-kanit text-sm font-medium text-emerald-500'>
                      15 CLIQUES
                    </h4>
                  </div>
                </div>

                <Card className='w-[360px] rounded-tl-none border-none'>
                  <CardContent className='rounded-2xl border'>
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

                    <h6 className='text-sm font-semibold'>LINKS</h6>
                    <ul className='mt-2 flex items-center gap-2.5'>
                      {socialLogos.map((logo) => {
                        const Icon = logo.src

                        return (
                          <li key={logo.id}>
                            <Link href='#'>
                              <Button
                                variant='ghost'
                                size='icon'
                                className='bg-zinc-600 hover:bg-zinc-700'
                              >
                                <Icon
                                  size={24}
                                  className='shrink-0 text-white'
                                />
                              </Button>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          <div className='absolute bottom-0 right-0'>
            <TotalVisits />
          </div>
        </div>
      </ContentContainer>
    </GridSmallBg>
  )
}
