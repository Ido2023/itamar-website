'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { ArrowLeft, ArrowRight, Users, ScrollText, Building, FileCheck, Heart, Scale } from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

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

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--color-dark-950)' }}>
      {/* Background elements */}
      <div className="grid-pattern" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="section-container relative z-10">
        <SectionHeading title={t.areas.sectionTitle} subtitle={t.areas.sectionSubtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areaConfig.map((area, i) => {
            const Icon = area.icon
            const data = t.areas[area.key]
            return (
              <ScrollReveal key={area.key} delay={i * 0.08}>
                <Link href={area.href} className="block group h-full">
                  <div className="premium-card h-full relative">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-[10%] right-[10%] h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                      background: 'linear-gradient(90deg, transparent, var(--color-primary-400), transparent)',
                    }} />

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(198,169,80,0.06) 0%, transparent 70%)',
                    }} />

                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(198,169,80,0.15)]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(198,169,80,0.1), rgba(198,169,80,0.03))',
                        border: '1px solid rgba(198,169,80,0.12)',
                      }}
                    >
                      <Icon size={22} style={{ color: 'var(--color-primary-400)' }} />
                    </div>
                    <h3 className="text-lg font-bold text-cream-50 mb-3" style={{ fontFamily: 'var(--font-frank)' }}>
                      {data.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(250,248,240,0.4)' }}>
                      {data.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group-hover:gap-3"
                      style={{ color: 'var(--color-primary-400)' }}
                    >
                      {t.areas.readMore}
                      <Arrow size={14} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
