'use client'

import { Card, CardContent } from '@/components/ui/card'
import { LucidePlusCircle } from 'lucide-react'

export const AddProject = () => {
  return (
    <button className='flex w-full justify-end transition-all hover:cursor-pointer hover:brightness-[85%]'>
      <Card className='border-dashed'>
        <CardContent>
          <div className='flex items-center gap-2'>
            <span className='font-semibold leading-6'>Adicionar projeto</span>
            <LucidePlusCircle className='size-6' />
          </div>
        </CardContent>
      </Card>
    </button>
  )
}
