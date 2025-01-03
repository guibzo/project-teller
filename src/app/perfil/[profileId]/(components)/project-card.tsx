import { ClickIndicator } from '@/components/click-indicator'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <Card>
      <CardContent className='p-3 sm:p-3'>
        <div className='flex items-center gap-5'>
          <Image
            src='https://github.com/guibzo.png'
            alt=''
            width={96}
            height={108}
            className='rounded-md'
          />

          <div>
            <ClickIndicator clickAmount={10} />

            <h3 className='mt-2 font-bold leading-6'>Taskify</h3>
            <p className='line-clamp-3 text-sm text-muted-foreground'>
              Gerencie tarefas e acompanhe o progresso Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Fugit, dolorem perferendis?
              Velit unde quo commodi saepe, repellat esse amet totam consectetur
              eum voluptatum consequuntur magni temporibus ullam ipsum harum
              explicabo.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
