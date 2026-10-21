import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'danger'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: ButtonVariant
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const className = 'button button--' + variant

  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  )
}
