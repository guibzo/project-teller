'use client'

import { DialogsList } from './dialogs-list'

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      {props.children}

      <DialogsList />
    </>
  )
}
