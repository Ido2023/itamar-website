'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { ArrowLeft, ArrowRight, Users, ScrollText, Building, FileCheck, Heart, Scale } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const areaConfig = [
  { key: 'intergenerational' as const, icon: Users, href: '/practice-areas/intergenerational-transfer' },
  { key: 'wills' as const, icon: ScrollText, href: '/practice-areas/wills' },
  { key: 'realEstateTax' as const, icon: Building, href: '/practice-areas/real-estate-tax' },
  { key: 'poa' as const, icon: FileCheck, href: '/practice-areas/power-of-attorney' },
  { key: 'prenuptial' as const, icon: Heart, href: '/practice-areas/prenuptial' },
  { key: 'guardianship' as const, icon: Scale, href: '/practice-areas/guardianship' },
]

export default function PracticeAreas() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      className="relative overflow-hidden"
      ref={ref}
      style={{ background: '#0a0c14' }}
    >
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.15), transparent)' }} />

      <div className="section-container py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ background: 'var(--color-primary-400)' }} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--color-primary-400)' }}>
              {isRTL ? 'תחומי התמחות' : 'Practice Areas'}
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl"
            style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
          >
            {t.areas.sectionTitle}
          </h2>
        </motion.div>

        {/* 3-column grid — but with varied heights through content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{
          background: 'rgba(198,169,80,0.06)',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          border: '1px solid rgba(198,169,80,0.06)',
        }}>
          {areaConfig.map((area, i) => {
            const Icon = area.icon
            const data = t.areas[area.key]
            return (
              <motion.div
                key={area.key}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
              >
                <Link href={area.href} className="block group h-full">
                  <div
                    className="p-7 md:p-8 h-full transition-all duration-500 relative"
                    style={{ background: '#0a0c14' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(198,169,80,0.03)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#0a0c14'
                    }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <Icon size={22} style={{ color: 'var(--color-primary-400)' }} className="opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="text-xs font-bold" style={{
                        fontFamily: 'var(--font-frank)',
                        color: 'rgba(198,169,80,0.15)',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}>
                      {data.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(240,236,229,0.35)' }}>
                      {data.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium group-hover:gap-3 transition-all duration-300" style={{ color: 'var(--color-primary-400)' }}>
                      {t.areas.readMore}
                      <Arrow size={12} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.15), transparent)' }} />
    </section>
  )
}
