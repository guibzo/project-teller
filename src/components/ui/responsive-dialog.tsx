'use client'

import { useParamsRouter } from '@/hooks/use-params-router'
import { cn } from '@/lib/cn'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Dialog, DialogContent } from './dialog'
import { Sheet, SheetContent } from './sheet'

type Props = {
  children: React.ReactNode
  showParamName: string
  onOpenChange?: () => void
  dialogClassName?: string
  sheetClassName?: string
}

const MOBILE_WIDTH = 640

export const ResponsiveDialog = ({
  children,
  showParamName,
  onOpenChange,
  dialogClassName,
  sheetClassName,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const paramsRouter = useParamsRouter()
  const searchParams = useSearchParams()

  const shouldShow = Boolean(searchParams.get(showParamName))

  const onOpenChangeFn = onOpenChange
    ? onOpenChange
    : () => {
        paramsRouter.remove([showParamName]).update().refresh()
      }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < MOBILE_WIDTH)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!shouldShow || !isMounted) return null

  if (isSmallScreen) {
    return (
      <Sheet open={shouldShow} onOpenChange={onOpenChangeFn}>
        <SheetContent
          side={'bottom'}
          className={cn('max-h-[90%] w-full overflow-auto', sheetClassName)}
        >
          {children}
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <Dialog open={shouldShow} onOpenChange={onOpenChangeFn}>
      <DialogContent
        className={cn(
          'max-h-[90%] w-full overflow-auto border-none',
          dialogClassName,
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}
