'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right' | 'zoom'
  delay?: number
  className?: string
}

export default function ScrollAnimation({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClass = {
    up: 'scroll-animate',
    left: 'scroll-animate-left',
    right: 'scroll-animate-right',
    zoom: 'animate-zoom-in'
  }[direction]

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}