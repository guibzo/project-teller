import { ContentContainer } from '@/components/content-container'
import { Header } from '@/components/header'
import { LucideSparkles } from 'lucide-react'
import { CreateInput } from './(components)/create-input'

export default function Page() {
  return (
    <ContentContainer>
      <Header />

      <div className='flex flex-1 flex-col items-center justify-center'>
        <div className='flex items-center gap-2'>
          <h1 className='text-2xl font-semibold'>
            Tudo pronto, agora só escolher o seu link!
          </h1>

          <div className='-mb-1.5 animate-bounce'>
            <LucideSparkles className='size-9 animate-pulse text-primary' />
          </div>
        </div>

        <CreateInput />
      </div>
    </ContentContainer>
  )
}
