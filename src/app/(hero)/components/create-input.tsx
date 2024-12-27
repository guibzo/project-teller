'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const CreateInput = () => {
  return (
    <div className='mt-10 flex w-full items-center gap-3'>
      <h4 className='font-medium opacity-80'>projectinbio.com/</h4>
      <Input placeholder='Seu link' containerClassName='flex-1' />
      <Button className='px-10'>Criar agora</Button>
    </div>
  )
}
