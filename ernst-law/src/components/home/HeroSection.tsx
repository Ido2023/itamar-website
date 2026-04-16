'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { CALENDLY_LINK } from '@/lib/constants'

export default function HeroSection() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const prefersReducedMotion = useReducedMotion()

  const fade = (delay = 0) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: 'var(--color-paper)' }}
    >
      <div className="section-container">
        {/* Top establishing line */}
        <motion.div
          {...fade(0)}
          className="flex items-center justify-between mb-12 md:mb-20"
        >
          <span
            className="text-xs tracking-[0.32em] uppercase"
            style={{
              color: 'var(--color-ink-mid)',
              fontFamily: 'var(--font-heebo)',
            }}
          >
            Est. 1979
          </span>
          <div className="flex-1 mx-6 h-px" style={{ background: 'var(--color-rule-strong)' }} />
          <span
            className="text-xs tracking-[0.18em]"
            style={{
              color: 'var(--color-ink-mid)',
              fontFamily: 'var(--font-heebo)',
            }}
          >
            {isRTL ? 'ירושלים  ·  עין צורים  ·  רמת גן' : 'Jerusalem  ·  Ein Tzurim  ·  Ramat Gan'}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-end">

          {/* Portrait — appears FIRST on mobile (top), order swap on desktop */}
          <motion.div
            {...fade(0.05)}
            className={`lg:col-span-5 order-1 ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <figure className="relative">
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '4 / 5',
                  border: '1px solid var(--color-rule-strong)',
                  backgroundColor: 'var(--color-paper-warm)',
                }}
              >
                <Image
                  src="/images/itamar-hero.jpeg"
                  alt={isRTL ? 'עו"ד איתמר ארנסט' : 'Adv. Itamar Ernst'}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption
                className="mt-3 flex items-baseline justify-between text-xs tracking-wider"
                style={{
                  color: 'var(--color-ink-mid)',
                  fontFamily: 'var(--font-heebo)',
                }}
              >
                <span>
                  {isRTL ? 'עו״ד איתמר ארנסט · מנכ״ל המשרד' : 'Adv. Itamar Ernst · Managing Partner'}
                </span>
                <span style={{ color: 'var(--color-accent)' }}>I</span>
              </figcaption>
            </figure>
          </motion.div>

          {/* Text column */}
          <div className={`lg:col-span-7 order-2 ${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
            <motion.h1
              {...fade(0.1)}
              className="font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-frank)',
                color: 'var(--color-ink)',
                fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
                lineHeight: '0.98',
                letterSpacing: '-0.02em',
              }}
            >
              {isRTL ? (
                <>
                  ליווי משפטי
                  <br />
                  <span style={{ fontWeight: 400, fontStyle: 'italic' }}>
                    להעברה
                  </span>{' '}
                  בין-דורית
                  <br />
                  של נכסים.
                </>
              ) : (
                <>
                  Legal counsel
                  <br />
                  for the <span style={{ fontWeight: 400, fontStyle: 'italic' }}>
                    intergenerational
                  </span>
                  <br />
                  transfer of assets.
                </>
              )}
            </motion.h1>

            <motion.p
              {...fade(0.2)}
              className="mt-8 text-base md:text-lg max-w-xl"
              style={{
                color: 'var(--color-ink-mid)',
                lineHeight: 1.7,
              }}
            >
              {isRTL
                ? 'משרד בוטיק שמלווה משפחות בתכנון ירושה, מיסוי מקרקעין, ייפוי כוח מתמשך והסכמי ממון. השקעה אחת שמונעת סכסוכים והתדיינות מיותרת.'
                : 'A boutique firm guiding families through inheritance planning, real-estate taxation, continuing power of attorney, and prenuptial agreements — a single investment that prevents disputes and unnecessary litigation.'}
            </motion.p>

            <motion.div
              {...fade(0.3)}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
            >
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink"
              >
                {isRTL ? 'קביעת פגישת ייעוץ' : 'Book a Consultation'}
              </a>
              <Link href="/practice-areas" className="link-arrow">
                {isRTL ? 'תחומי ההתמחות' : 'Practice Areas'}
                <Arrow size={14} />
              </Link>
            </motion.div>

            {/* Editorial small-text row */}
            <motion.div
              {...fade(0.4)}
              className="mt-14 grid grid-cols-3 max-w-md"
              style={{ borderTop: '1px solid var(--color-rule)' }}
            >
              {[
                { num: '45+', label: isRTL ? 'שנות ניסיון' : 'Years' },
                { num: '1,000+', label: isRTL ? 'משפחות' : 'Families' },
                { num: '5.0', label: isRTL ? 'דירוג Google' : 'Rating' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="pt-5"
                  style={{
                    borderInlineStart: i > 0 ? '1px solid var(--color-rule)' : 'none',
                    paddingInlineStart: i > 0 ? '1.25rem' : 0,
                  }}
                >
                  <div
                    className="text-2xl md:text-3xl font-bold"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-ink)',
                      lineHeight: 1,
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    className="mt-1 text-[0.7rem] tracking-wider"
                    style={{ color: 'var(--color-ink-mid)' }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
