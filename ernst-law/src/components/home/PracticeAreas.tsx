'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionFade from '@/components/ui/SectionFade'

const areaConfig = [
  { key: 'intergenerational' as const, href: '/practice-areas/intergenerational-transfer' },
  { key: 'wills' as const, href: '/practice-areas/wills' },
  { key: 'realEstateTax' as const, href: '/practice-areas/real-estate-tax' },
  { key: 'poa' as const, href: '/practice-areas/power-of-attorney' },
  { key: 'prenuptial' as const, href: '/practice-areas/prenuptial' },
  { key: 'guardianship' as const, href: '/practice-areas/guardianship' },
]

export default function PracticeAreas() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <SectionFade
      id="practice-areas"
      className="relative"
      yOffset={32}
    >
      <div style={{ borderTop: '1px solid var(--color-rule)' }} />

      <div className="section-container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="section-num">I</span>
              <span className="eyebrow">
                {isRTL ? 'תחומי התמחות' : 'Practice Areas'}
              </span>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-frank)',
                color: 'var(--color-ink)',
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
              }}
            >
              {isRTL
                ? 'מומחיות ייחודית בתכנון העברה בין-דורית של נכסים.'
                : 'Specialised counsel for the intergenerational transfer of assets.'}
            </h2>
            <p
              className="mt-5 text-base md:text-lg max-w-2xl"
              style={{ color: 'var(--color-ink-mid)', lineHeight: 1.7 }}
            >
              {t.areas.sectionSubtitle}
            </p>
          </div>
        </div>

        {/* Editorial 2-column list */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12"
          style={{ borderTop: '1px solid var(--color-rule)' }}
        >
          {areaConfig.map((area, i) => {
            const data = t.areas[area.key]
            return (
              <Link
                key={area.key}
                href={area.href}
                className="group block py-8 md:py-10 transition-colors duration-300"
                style={{ borderBottom: '1px solid var(--color-rule)' }}
              >
                <div className="flex items-baseline gap-5 mb-3">
                  <span
                    className="text-sm tracking-wider shrink-0"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-ink-soft)',
                      fontWeight: 400,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-2xl md:text-[1.65rem] font-bold tracking-tight transition-colors duration-300 group-hover:text-[color:var(--color-accent)]"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-ink)',
                      lineHeight: 1.15,
                    }}
                  >
                    {data.title}
                  </h3>
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
  )
}
