'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export const CreateInput = () => {
  return (
    <div className='mt-10 flex items-center gap-3'>
      <h4 className='font-medium opacity-80'>projecteller.com/</h4>

      <form className='flex items-center gap-3'>
        <Input placeholder='Seu link' className='w-96' />

        <Link href='/criar'>
          <Button className='px-10'>Criar</Button>
        </Link>
      </form>
    </div>
  )
}
