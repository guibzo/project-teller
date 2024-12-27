'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const CreateInput = () => {
  return (
    <div className='mt-10 flex items-center gap-4'>
      <h4>projectinbio.com/</h4>
      <Input placeholder='Seu link' />
      <Button>Criar agora</Button>
    </div>
  )
}
