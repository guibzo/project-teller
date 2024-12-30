import { ContentContainer } from '@/components/content-container'
import type { Metadata } from 'next'
import { Hero } from './(hero)'
import { Pricing } from './(pricing)'
import { VideoExplanation } from './(video-explanation)'

export const metadata: Metadata = {
  title: 'ProjectTeller',
}

export default function Home() {
  return (
    <>
      <Hero />

      <ContentContainer>
        <VideoExplanation />
        <Pricing />
      </ContentContainer>
    </>
  )
}
