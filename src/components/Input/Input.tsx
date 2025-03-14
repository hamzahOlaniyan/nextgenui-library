import { VariantProps } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'
import { inputStyle } from './InputStyles'
import { cn } from '../../lib/utils'

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyle> & { label?: string }

export const Input = forwardRef<HTMLInputElement, InputProps>(({ variant, className, label, ...props }, ref) => {
    return (
        <input ref={ref} {...props} name={props.name} className={cn(inputStyle({ variant, className }))} />
    )
})
