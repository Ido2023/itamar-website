'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import SectionFade from '@/components/ui/SectionFade'

export default function WhyChooseUs() {
  const { t, isRTL } = useLanguage()

  const stats = [
    { value: '45+',    label: isRTL ? 'שנות ניסיון' : 'Years of Experience' },
    { value: '1,000+', label: isRTL ? 'משפחות שליווינו' : 'Families Served' },
    { value: '5.0',    label: isRTL ? 'דירוג Google' : 'Google Rating' },
  ]

  return (
    <SectionFade
      id="why-us"
      style={{ backgroundColor: 'var(--color-paper-warm)' }}
      yOffset={32}
    >
      <div style={{ borderTop: '1px solid var(--color-rule-strong)' }} />

      <div className="section-container py-14 md:py-32">
        {/* Stats row */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{ borderBottom: '1px solid var(--color-rule-strong)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-8 md:py-12 text-center sm:text-start"
              style={{
                borderInlineStart:
                  i > 0 ? '1px solid var(--color-rule-strong)' : 'none',
                paddingInlineStart: i > 0 ? '2.5rem' : 0,
              }}
            >
              <div
                className="font-bold"
                style={{
                  fontFamily: 'var(--font-frank)',
                  color: 'var(--color-ink-strong)',
                  fontSize: 'clamp(3rem, 6vw, 4.75rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div
                className="mt-3 text-xs tracking-[0.18em] uppercase"
                style={{
                  color: 'var(--color-ink-mid)',
                  fontFamily: 'var(--font-heebo)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mt-12 md:mt-20 mb-8 md:mb-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="section-num">IV</span>
              <span className="eyebrow">
                {isRTL ? 'יתרונות' : 'Advantages'}
              </span>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-frank)',
                color: 'var(--color-ink)',
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
              }}
            >
              {isRTL ? 'למה לבחור בעו"ד איתמר ארנסט.' : 'Why choose Adv. Itamar Ernst.'}
            </h2>
          </div>
        </div>

        {/* 2-column list */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12"
          style={{ borderTop: '1px solid var(--color-rule)' }}
        >
          {t.why.items.map((item, i) => (
            <div
              key={i}
              className="py-7 md:py-8 flex items-baseline gap-5"
              style={{ borderBottom: '1px solid var(--color-rule)' }}
            >
              <span
                className="text-sm tracking-wider shrink-0"
                style={{
                  fontFamily: 'var(--font-frank)',
                  color: 'var(--color-ink-soft)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3
                  className="text-lg font-bold tracking-tight mb-1.5"
                  style={{
                    fontFamily: 'var(--font-frank)',
                    color: 'var(--color-ink)',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: 'var(--color-ink-mid)',
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionFade>
  )
}
