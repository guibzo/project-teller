import { ContentContainer } from '@/components/content-container'
import { Separator } from '@/components/ui/separator'
import { Faq } from './(faq)'
import { Hero } from './(hero)'
import { Pricing } from './(pricing)'
import { VideoExplanation } from './(video-explanation)'

export default function Home() {
  return (
    <>
      <Hero />

      <ContentContainer className='mt-[60px] gap-32'>
        <VideoExplanation />
        <Pricing />

        <Separator className='h-0.5' />

        <Faq />
      </ContentContainer>
    </>
  )
}
