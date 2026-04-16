'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import SectionFade from '@/components/ui/SectionFade'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const areas = [
  { key: 'intergenerational' as const, href: '/practice-areas/intergenerational-transfer' },
  { key: 'wills' as const,            href: '/practice-areas/wills' },
  { key: 'realEstateTax' as const,    href: '/practice-areas/real-estate-tax' },
  { key: 'poa' as const,              href: '/practice-areas/power-of-attorney' },
  { key: 'prenuptial' as const,       href: '/practice-areas/prenuptial' },
  { key: 'guardianship' as const,     href: '/practice-areas/guardianship' },
]

export default function PracticeAreasPage() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <PageWrapper>
      <SectionFade>
        <div className="section-container pt-16 md:pt-24 pb-10 md:pb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-num">·</span>
            <span className="eyebrow">
              {isRTL ? 'תחומי התמחות' : 'Practice Areas'}
            </span>
          </div>
          <h1
            className="font-bold tracking-tight max-w-4xl"
            style={{
              fontFamily: 'var(--font-frank)',
              color: 'var(--color-ink)',
              fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            {t.areas.sectionTitle}.
          </h1>
          <p
            className="mt-7 text-base md:text-lg max-w-2xl"
            style={{ color: 'var(--color-ink-mid)', lineHeight: 1.7 }}
          >
            {t.areas.sectionSubtitle}
          </p>
        </div>
      </SectionFade>

      <SectionFade>
        <div className="section-container pb-24 md:pb-32">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12"
            style={{ borderTop: '1px solid var(--color-rule)' }}
          >
            {areas.map((area, i) => {
              const data = t.areas[area.key]
              return (
                <Link
                  key={area.key}
                  href={area.href}
                  className="group block py-8 md:py-10 transition-colors"
                  style={{ borderBottom: '1px solid var(--color-rule)' }}
                >
                  <div className="flex items-baseline gap-5 mb-3">
                    <span
                      className="text-sm tracking-wider shrink-0"
                      style={{
                        fontFamily: 'var(--font-frank)',
                        color: 'var(--color-ink-soft)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2
                      className="text-2xl md:text-[1.65rem] font-bold tracking-tight transition-colors group-hover:text-[color:var(--color-accent)]"
                      style={{
                        fontFamily: 'var(--font-frank)',
                        color: 'var(--color-ink)',
                        lineHeight: 1.15,
                      }}
                    >
                      {data.title}
                    </h2>
                  </div>
                  <div className="ms-9">
                    <p
                      className="text-sm md:text-[0.95rem] mb-4"
                      style={{
                        color: 'var(--color-ink-mid)',
                        lineHeight: 1.65,
                      }}
                    >
                      {data.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-xs tracking-wider transition-all duration-300 group-hover:gap-3"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {t.areas.readMore}
                      <Arrow size={12} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </SectionFade>
    </PageWrapper>
  )
}
