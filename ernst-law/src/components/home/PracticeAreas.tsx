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
    <section className="py-20 md:py-28 relative" style={{ backgroundColor: 'var(--color-dark-950)' }}>
      <div className="section-container">
        <SectionHeading title={t.areas.sectionTitle} subtitle={t.areas.sectionSubtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areaConfig.map((area, i) => {
            const Icon = area.icon
            const data = t.areas[area.key]
            return (
              <ScrollReveal key={area.key} delay={i * 0.08}>
                <Link href={area.href} className="block group h-full">
                  <div
                    className="premium-card h-full relative overflow-hidden"
                    style={{ borderTopWidth: '2px', borderTopColor: 'transparent', transition: 'all 0.5s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = 'var(--color-primary-400)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = 'transparent' }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'rgba(198,169,80,0.08)' }}
                    >
                      <Icon size={22} style={{ color: 'var(--color-primary-400)' }} />
                    </div>
                    <h3 className="text-lg font-bold text-cream-50 mb-3" style={{ fontFamily: 'var(--font-frank)' }}>
                      {data.title}
                    </h3>
                    <p className="text-sm text-cream-200/55 leading-relaxed mb-4">
                      {data.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300"
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
    </section>
  )
}
