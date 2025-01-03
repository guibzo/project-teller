'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export const CreateInput = () => {
  return (
    <div className='mt-10 flex w-full items-center gap-3'>
      <h4 className='font-medium opacity-80'>projecteller.com/</h4>
      <Input placeholder='Seu link' containerClassName='flex-1' />

      <Link href='/criar'>
        <Button className='px-10'>Criar agora</Button>
      </Link>
    </div>
  )
}
