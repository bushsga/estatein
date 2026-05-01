import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
   type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, variant = 'primary', size = 'md', className = '', onClick }: Props) {
  const variants = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-white/10 hover:bg-white/20 text-white',  // grey-10 background
    outline: 'border border-white/20 text-white hover:bg-white/10'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-2.5 text-base rounded-lg'
  }
  
  return (
    <button
      onClick={onClick}
      className={`font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}