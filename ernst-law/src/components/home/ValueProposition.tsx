'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Building2, ShieldCheck, Lightbulb, PiggyBank } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const icons = [Building2, ShieldCheck, Lightbulb, PiggyBank]

export default function ValueProposition() {
  const { t, isRTL } = useLanguage()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  const items = [
    { title: t.value.oneStopTitle, desc: t.value.oneStopDesc },
    { title: t.value.preventionTitle, desc: t.value.preventionDesc },
    { title: t.value.innovationTitle, desc: t.value.innovationDesc },
    { title: t.value.savingsTitle, desc: t.value.savingsDesc },
  ]

  return (
    <section
      className="relative overflow-hidden"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #08080f 0%, #0d0f1a 100%)' }}
    >
      {/* Top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.2), transparent)' }} />

      <div className="section-container py-24 md:py-32">
        {/* Big number + title lockup */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: section label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 shrink-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: 'var(--color-primary-400)' }} />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--color-primary-400)' }}>
                {isRTL ? 'הגישה שלנו' : 'Our Approach'}
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]"
              style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
            >
              {t.value.sectionTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(240,236,229,0.4)' }}>
              {t.value.sectionSubtitle}
            </p>
          </motion.div>

          {/* Right: items — no cards, just clean list */}
          <div className="flex-1 w-full">
            {items.map((item, i) => {
              const Icon = icons[i]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="group flex gap-6 py-8 transition-all duration-300"
                  style={{
                    borderBottom: i < items.length - 1 ? '1px solid rgba(198,169,80,0.06)' : 'none',
                  }}
                >
                  {/* Number */}
                  <span className="text-3xl font-bold shrink-0 w-12 transition-colors duration-300" style={{
                    fontFamily: 'var(--font-frank)',
                    color: 'rgba(198,169,80,0.12)',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={18} style={{ color: 'var(--color-primary-400)' }} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,236,229,0.4)' }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
