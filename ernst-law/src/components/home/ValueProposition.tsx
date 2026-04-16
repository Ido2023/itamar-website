'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import SectionFade from '@/components/ui/SectionFade'

export default function ValueProposition() {
  const { t, isRTL } = useLanguage()

  const items = [
    { title: t.value.oneStopTitle,    desc: t.value.oneStopDesc },
    { title: t.value.preventionTitle, desc: t.value.preventionDesc },
    { title: t.value.innovationTitle, desc: t.value.innovationDesc },
    { title: t.value.savingsTitle,    desc: t.value.savingsDesc },
  ]

  return (
    <SectionFade
      id="approach"
      yOffset={32}
    >
      <div style={{ borderTop: '1px solid var(--color-rule)' }} />

      <div className="section-container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: section label + headline */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="section-num">III</span>
              <span className="eyebrow">
                {isRTL ? 'הגישה שלנו' : 'Our Approach'}
              </span>
            </div>
            <h2
              className="mt-7 font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-frank)',
                color: 'var(--color-ink)',
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
              }}
            >
              {isRTL
                ? 'הכל תחת קורת גג אחת — מהתכנון ועד הביצוע.'
                : 'Everything under one roof — from planning to execution.'}
            </h2>
            <p
              className="mt-5 text-base md:text-lg max-w-md"
              style={{ color: 'var(--color-ink-mid)', lineHeight: 1.7 }}
            >
              {isRTL
                ? 'גישה אינטגרטיבית המבוססת על ארבעה עקרונות מנחים, שמייצרת ודאות לטווח הארוך עבור המשפחה.'
                : 'An integrative approach built on four guiding principles that delivers long-term certainty for the family.'}
            </p>
          </div>

          {/* Right: numbered list */}
          <div
            className="lg:col-span-7"
            style={{ borderTop: '1px solid var(--color-rule)' }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-5 py-8"
                style={{ borderBottom: '1px solid var(--color-rule)' }}
              >
                <div className="col-span-2 sm:col-span-1">
                  <span
                    className="text-sm tracking-wider"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-accent)',
                      fontWeight: 400,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-11">
                  <h3
                    className="text-xl md:text-2xl font-bold tracking-tight mb-2"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-ink)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm md:text-[0.95rem]"
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
      </div>
    </SectionFade>
  )
}
