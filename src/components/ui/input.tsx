import * as React from 'react'

import { cn } from '@/lib/cn'
import { LucideEye, LucideEyeOff } from 'lucide-react'

type CustomInputProps = {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  revealer?: boolean
  containerClassName?: string
  inputClassName?: string
}

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & CustomInputProps
>(
  (
    {
      className,
      type,
      startIcon,
      endIcon,
      revealer,
      containerClassName,
      inputClassName,
      ...props
    },
    ref,
  ) => {
    const [showInput, setShowInput] = React.useState(false)

    const inputType = revealer ? (showInput ? 'text' : 'password') : type

    return (
      <div className='relative'>
        <input
          type={inputType}
          className={cn(
            'peer flex h-10 w-full rounded-md border border-input bg-background px-2.5 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
            startIcon && 'ps-9',
            (endIcon || revealer) && 'pe-9',
          )}
          ref={ref}
          {...props}
        />

        {startIcon && (
          <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2.5 text-muted-foreground/80 peer-disabled:opacity-50'>
            {startIcon}
          </div>
        )}

        {!revealer && endIcon && (
          <div
            className={cn(
              'pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2.5 text-muted-foreground/80 peer-disabled:opacity-50',
            )}
          >
            {endIcon}
          </div>
        )}

        {revealer && (
          <button
            className={cn(
              'absolute inset-y-0 end-0 flex items-center justify-center pe-2.5 text-muted-foreground/80 transition-all hover:text-white peer-disabled:opacity-50',
            )}
            onClick={() => setShowInput(!showInput)}
          >
            <>
              {!showInput ? (
                <LucideEyeOff className='size-5 cursor-pointer' />
              ) : (
                <LucideEye className='size-5 cursor-pointer' />
              )}
            </>
          </button>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
