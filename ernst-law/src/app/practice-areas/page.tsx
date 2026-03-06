'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Users, ScrollText, Building, FileCheck, Heart, Scale, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const areas = [
  { key: 'intergenerational' as const, icon: Users, href: '/practice-areas/intergenerational-transfer' },
  { key: 'wills' as const, icon: ScrollText, href: '/practice-areas/wills' },
  { key: 'realEstateTax' as const, icon: Building, href: '/practice-areas/real-estate-tax' },
  { key: 'poa' as const, icon: FileCheck, href: '/practice-areas/power-of-attorney' },
  { key: 'prenuptial' as const, icon: Heart, href: '/practice-areas/prenuptial' },
  { key: 'guardianship' as const, icon: Scale, href: '/practice-areas/guardianship' },
]

export default function PracticeAreasPage() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <PageWrapper>
      <section className="py-16 md:py-24 relative">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(198,169,80,0.05) 0%, transparent 50%)' }}
        />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="gold-divider mb-4" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream-50 mb-4"
                style={{ fontFamily: 'var(--font-frank)' }}>
              {t.areas.sectionTitle}
            </h1>
            <p className="text-lg text-cream-200/60 max-w-2xl">
              {t.areas.sectionSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areas.map((area, i) => {
              const Icon = area.icon
              const data = t.areas[area.key]
              return (
                <ScrollReveal key={area.key} delay={i * 0.08}>
                  <Link href={area.href} className="block group h-full">
                    <div
                      className="premium-card h-full"
                      style={{ borderTopWidth: '2px', borderTopColor: 'transparent', transition: 'all 0.5s' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderTopColor = 'var(--color-primary-400)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderTopColor = 'transparent' }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: 'rgba(198,169,80,0.08)' }}
                        >
                          <Icon size={26} style={{ color: 'var(--color-primary-400)' }} />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-xl font-bold text-cream-50 mb-2" style={{ fontFamily: 'var(--font-frank)' }}>
                            {data.title}
                          </h2>
                          <p className="text-sm text-cream-200/55 leading-relaxed mb-4">
                            {data.desc}
                          </p>
                          <span
                            className="inline-flex items-center gap-1.5 text-sm font-medium"
                            style={{ color: 'var(--color-primary-400)' }}
                          >
                            {t.areas.readMore}
                            <Arrow size={14} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
