import { ContentContainer } from '@/components/content-container'
import { GridSmallBg } from '@/components/ui/grid-small-bg'
import type { Metadata } from 'next'
import { Hero } from './(hero)'

export const metadata: Metadata = {
  title: 'Home | ProjectTeller',
}

export default function Home() {
  return (
    <GridSmallBg>
      <ContentContainer>
        <Hero />
      </ContentContainer>
    </GridSmallBg>
  )
}
