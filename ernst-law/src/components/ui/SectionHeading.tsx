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
    <ScrollReveal className={`mb-14 md:mb-20 ${center ? 'text-center' : ''} ${className}`}>
      <div className="inline-flex items-center gap-3 mb-5">
        <div className="h-px w-8" style={{ background: 'linear-gradient(to left, rgba(198,169,80,0.5), transparent)' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-primary-400)' }} />
        <div className="h-px w-8" style={{ background: 'linear-gradient(to right, rgba(198,169,80,0.5), transparent)' }} />
      </div>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 mb-4 tracking-tight"
        style={{ fontFamily: 'var(--font-frank)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(250,248,240,0.45)' }}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  )
}
