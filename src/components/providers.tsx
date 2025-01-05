'use client'

import { Toaster } from '@/components/ui/sonner'
import { DialogsList } from './dialogs-list'

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      {props.children}

      <DialogsList />
      <Toaster />
    </>
  )
}
