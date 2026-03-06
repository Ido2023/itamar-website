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

  const featured = areaConfig[0]
  const FeaturedIcon = featured.icon
  const featuredData = t.areas[featured.key]
  const rest = areaConfig.slice(1)

  return (
    <section className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, var(--color-dark-950) 0%, rgba(10,12,22,1) 50%, var(--color-dark-950) 100%)',
      }} />
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(198,169,80,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(198,169,80,0.8) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.3), transparent)',
      }} />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12" style={{ background: 'var(--color-primary-400)' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--color-primary-400)' }}>
                {isRTL ? 'מומחיות' : 'Expertise'}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
            >
              {t.areas.sectionTitle}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base max-w-md lg:text-end"
            style={{ color: 'rgba(240,236,229,0.45)' }}
          >
            {t.areas.sectionSubtitle}
          </motion.p>
        </div>

        {/* Featured area — full width hero card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-5"
        >
          <Link href={featured.href} className="block group">
            <div
              className="relative overflow-hidden rounded-2xl p-8 md:p-12 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(12,12,22,0.95), rgba(20,25,40,0.9))',
                border: '1px solid rgba(198,169,80,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,169,80,0.3)'
                e.currentTarget.style.boxShadow = '0 30px 80px -20px rgba(0,0,0,0.5), 0 0 60px -20px rgba(198,169,80,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,169,80,0.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Large background number */}
              <span className="absolute top-6 font-bold pointer-events-none select-none" style={{
                [isRTL ? 'left' : 'right']: '2rem',
                fontSize: '10rem',
                lineHeight: 0.8,
                fontFamily: 'var(--font-frank)',
                color: 'rgba(198,169,80,0.03)',
              }}>
                01
              </span>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at 20% 50%, rgba(198,169,80,0.06) 0%, transparent 60%)',
              }} />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(198,169,80,0.15), rgba(198,169,80,0.05))',
                      border: '1px solid rgba(198,169,80,0.2)',
                    }}
                  >
                    <FeaturedIcon size={26} style={{ color: 'var(--color-primary-400)' }} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}>
                    {featuredData.title}
                  </h3>
                  <p className="text-base leading-relaxed max-w-2xl mb-6" style={{ color: 'rgba(240,236,229,0.5)' }}>
                    {featuredData.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all duration-300" style={{ color: 'var(--color-primary-400)' }}>
                    {t.areas.readMore}
                    <Arrow size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Remaining areas — compact horizontal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {rest.map((area, i) => {
            const Icon = area.icon
            const data = t.areas[area.key]
            return (
              <motion.div
                key={area.key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              >
                <Link href={area.href} className="block group h-full">
                  <div
                    className="relative overflow-hidden rounded-xl p-5 h-full transition-all duration-500"
                    style={{
                      background: 'linear-gradient(145deg, rgba(12,12,22,0.95), rgba(18,18,32,0.8))',
                      border: '1px solid rgba(198,169,80,0.06)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(198,169,80,0.2)'
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 15px 40px -10px rgba(0,0,0,0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(198,169,80,0.06)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110" style={{
                      background: 'rgba(198,169,80,0.08)',
                      border: '1px solid rgba(198,169,80,0.1)',
                    }}>
                      <Icon size={18} style={{ color: 'var(--color-primary-400)' }} />
                    </div>
                    <h3 className="text-sm font-bold mb-1" style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}>
                      {data.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-medium mt-2 group-hover:gap-2 transition-all duration-300" style={{ color: 'var(--color-primary-400)', opacity: 0.7 }}>
                      {t.areas.readMore}
                      <Arrow size={12} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.3), transparent)',
      }} />
    </section>
  )
}
