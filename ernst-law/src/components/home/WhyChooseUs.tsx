'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function WhyChooseUs() {
  const { t, isRTL } = useLanguage()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="relative overflow-hidden" ref={ref} style={{ background: '#08080f' }}>
      <div className="section-container py-24 md:py-32">
        {/* Stats row — big impactful numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-20 md:gap-32 mb-20 md:mb-28"
        >
          {[
            { value: '45+', label: isRTL ? 'שנות ניסיון' : 'Years Experience' },
            { value: '1,000+', label: isRTL ? 'משפחות שליווינו' : 'Families Served' },
            { value: '5.0', label: isRTL ? 'דירוג Google' : 'Google Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2" style={{
                fontFamily: 'var(--font-frank)',
                background: 'linear-gradient(135deg, var(--color-primary-300), var(--color-primary-500))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {stat.value}
              </div>
              <div className="text-sm tracking-wider" style={{ color: 'rgba(240,236,229,0.35)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: 'var(--color-primary-400)' }} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--color-primary-400)' }}>
              {isRTL ? 'היתרונות' : 'Advantages'}
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
          >
            {t.why.sectionTitle}
          </h2>
        </motion.div>

        {/* Two-column clean list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {t.why.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              className="flex gap-5 py-6"
              style={{
                borderBottom: '1px solid rgba(198,169,80,0.05)',
              }}
            >
              <span className="text-lg font-bold shrink-0 w-8" style={{
                fontFamily: 'var(--font-frank)',
                color: 'rgba(198,169,80,0.2)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-base font-bold mb-1" style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,236,229,0.35)' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
