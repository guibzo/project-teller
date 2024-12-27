import { DialogTitle } from './ui/dialog'
import { ResponsiveDialog } from './ui/responsive-dialog'

export const DialogsList = () => {
  return (
    <>
      <ResponsiveDialog showParamName='showFodase'>
        <DialogTitle>Hello</DialogTitle>

        <div>hello world</div>
      </ResponsiveDialog>
    </>
  )
}
