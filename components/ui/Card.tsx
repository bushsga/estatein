import { ReactNode, CSSProperties } from 'react'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties  // Add this to accept style prop
}

export default function Card({ children, className = '', style }: Props) {
  return (
    <div 
      className={`bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500 transition-all duration-300 hover:scale-105 ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}