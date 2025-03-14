import { ComponentProps, forwardRef } from 'react';
import { buttonStyle } from './ButtonStyles';
import { VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';


type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyle>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, size, colorScheme, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonStyle({ variant, size, className }))}
      />
    )
  }
)

