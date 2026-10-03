import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#7c6bcf] text-white shadow-md hover:bg-[#6a59bd] focus-visible:ring-[#c4b5fd]',
  secondary:
    'bg-white text-[#2f2840] ring-1 ring-[#eadcf8] hover:bg-[#fffaf5] focus-visible:ring-[#d8c9f8]',
  ghost:
    'bg-transparent text-[#2f2840] hover:bg-white/70 focus-visible:ring-[#eadcf8]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
}

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

export type ButtonProps = BaseProps &
  (
    | (ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined })
    | (Omit<LinkProps, 'className' | 'children'> & { to: LinkProps['to'] })
  )

function composeClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return [
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf6f0]',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = composeClassName(variant, size, className)

  if ('to' in props && props.to !== undefined) {
    const { to, ...linkProps } = props
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  const { type = 'button', ...buttonProps } = props
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
