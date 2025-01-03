import { ClickIndicator } from '@/components/click-indicator'
import { ContentContainer } from '@/components/content-container'
import { Header } from '@/components/header'
import { TotalVisits } from '@/components/total-visits'
import { GridSmallBg } from '@/components/ui/grid-small-bg'
import { UserCard } from '@/components/user-card'
import { CreateInput } from './components/create-input'

export const Hero = () => {
  return (
    <GridSmallBg>
      <ContentContainer>
        <div className='relative flex flex-1 flex-col'>
          <Header />

          <div className='-mt-10 flex flex-1 items-center'>
            <section className='my-auto grid grid-cols-5 items-center gap-20'>
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

                <div className='flex w-1/2 rounded-b-none rounded-t-md border border-b-0 bg-card px-3 py-1'>
                  <div className='flex w-full items-center'>
                    <span className='flex size-2.5 items-center'>
                      <span className='absolute inline-flex size-2.5 animate-ping rounded-full bg-green-200 opacity-75' />
                      <span className='inline-flex size-2.5 rounded-full bg-sky-400' />
                    </span>

                    <ClickIndicator className='ml-2' clickAmount={45} />
                  </div>
                </div>

                <UserCard />
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
