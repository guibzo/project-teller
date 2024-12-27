import { ContentContainer } from '@/components/content-container'
import type { Metadata } from 'next'
import { Hero } from './(hero)'

export const metadata: Metadata = {
  title: 'Home | ProjectTeller',
}

export default function Home() {
  return (
    <ContentContainer>
      <Hero />
    </ContentContainer>
  )
}
