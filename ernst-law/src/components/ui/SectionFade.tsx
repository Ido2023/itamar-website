'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
  duration?: number
  yOffset?: number
  threshold?: number
  as?: 'section' | 'div'
  style?: React.CSSProperties
}

export default function SectionFade({
  children,
  className = '',
  id,
  delay = 0,
  duration = 0.9,
  yOffset = 24,
  threshold = 0.12,
  as = 'section',
  style,
}: Props) {
  const prefersReducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ triggerOnce: true, threshold })

  const initial = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: yOffset }

  const Component = as === 'section' ? motion.section : motion.div

  return (
    <Component
      ref={ref}
      id={id}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0 } : initial}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  )
}
