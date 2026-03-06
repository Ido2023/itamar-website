'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function WhyChooseUs() {
  const { t, isRTL } = useLanguage()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12" style={{ background: 'var(--color-primary-400)' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--color-primary-400)' }}>
              {isRTL ? 'היתרון שלנו' : 'Our Edge'}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
          >
            {t.why.sectionTitle}
          </motion.h2>
        </div>

        {/* Numbered process items — vertical timeline style */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute hidden md:block"
            style={{
              [isRTL ? 'right' : 'left']: '1.5rem',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(198,169,80,0.3), rgba(198,169,80,0.08), transparent)',
            }}
          />

          <div className="space-y-2">
            {t.why.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group relative flex items-start gap-6 md:gap-8 p-5 md:p-6 rounded-2xl transition-all duration-500"
                style={{ border: '1px solid transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(12,12,22,0.8)'
                  e.currentTarget.style.borderColor = 'rgba(198,169,80,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
              >
                {/* Number */}
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center relative transition-all duration-500 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, rgba(198,169,80,0.1), rgba(198,169,80,0.03))',
                  border: '1px solid rgba(198,169,80,0.15)',
                }}>
                  <span className="text-sm font-bold" style={{ color: 'var(--color-primary-400)', fontFamily: 'var(--font-frank)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold mb-1.5" style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,236,229,0.4)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
