'use client'

import ScrollReveal from './ScrollReveal'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionHeading({ title, subtitle, center = true, className = '' }: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${center ? 'text-center' : ''} ${className}`}>
      <div className={`gold-divider mb-4 ${center ? 'mx-auto' : ''}`} />
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-cream-200/60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
