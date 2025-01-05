import { ContentContainer } from '@/components/content-container'
import { Header } from '@/components/header'
import { DotBg } from '@/components/ui/dot-bg'
import { UpgradeNowBanner } from '@/components/upgrade-now-banner'
import { UserCard } from '@/components/user-card'
import { AddProject } from './(components)/add-project'
import { ProjectCard } from './(components)/project-card'

export default async function Page({
  params,
}: {
  params: Promise<{ profileId: string }>
}) {
  const { profileId } = await params

  return (
    <div className='max-h-screen overflow-y-hidden'>
      <UpgradeNowBanner />

      <DotBg className='max-h-screen overflow-y-hidden'>
        <ContentContainer className='min-h-0'>
          <Header />
        </ContentContainer>

        <ContentContainer className='relative mt-14 overflow-y-hidden'>
          <div className='relative flex gap-[120px]'>
            <div className='mt-16'>
              <UserCard />
            </div>

            <div className='space-y-8'>
              <h1 className='text-2xl font-bold'>Projetos</h1>

              <div className='grid max-h-[470px] grid-cols-2 gap-[25px] overflow-y-auto'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>

              <AddProject />
            </div>
          </div>
        </ContentContainer>
      </DotBg>
    </div>
  )
}
