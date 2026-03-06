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
    { title: t.value.oneStopTitle, desc: t.value.oneStopDesc, num: '01' },
    { title: t.value.preventionTitle, desc: t.value.preventionDesc, num: '02' },
    { title: t.value.innovationTitle, desc: t.value.innovationDesc, num: '03' },
    { title: t.value.savingsTitle, desc: t.value.savingsDesc, num: '04' },
  ]

  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(198,169,80,0.04) 0%, transparent 60%)',
      }} />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section header — left aligned, editorial */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12" style={{ background: 'var(--color-primary-400)' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--color-primary-400)' }}>
                {isRTL ? 'למה אנחנו' : 'Why Us'}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
            >
              {t.value.sectionTitle}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base max-w-md lg:text-end"
            style={{ color: 'rgba(240,236,229,0.45)' }}
          >
            {t.value.sectionSubtitle}
          </motion.p>
        </div>

        {/* Bento grid — varied card sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500"
                style={{
                  background: 'linear-gradient(145deg, rgba(12,12,22,0.95), rgba(18,18,32,0.8))',
                  border: '1px solid rgba(198,169,80,0.08)',
                  padding: '2.5rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198,169,80,0.25)'
                  e.currentTarget.style.boxShadow = '0 25px 60px -15px rgba(0,0,0,0.5), 0 0 40px -10px rgba(198,169,80,0.08)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198,169,80,0.08)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Background number watermark */}
                <span
                  className="absolute top-4 font-bold pointer-events-none select-none"
                  style={{
                    [isRTL ? 'left' : 'right']: '1.5rem',
                    fontSize: '6rem',
                    lineHeight: 1,
                    fontFamily: 'var(--font-frank)',
                    color: 'rgba(198,169,80,0.04)',
                  }}
                >
                  {item.num}
                </span>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
                  background: 'radial-gradient(circle at 30% 20%, rgba(198,169,80,0.06) 0%, transparent 60%)',
                }} />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(198,169,80,0.12), rgba(198,169,80,0.04))',
                      border: '1px solid rgba(198,169,80,0.15)',
                    }}
                  >
                    <Icon size={22} style={{ color: 'var(--color-primary-400)' }} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-md" style={{ color: 'rgba(240,236,229,0.45)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
