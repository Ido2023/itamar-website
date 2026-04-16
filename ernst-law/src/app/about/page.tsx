'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import SectionFade from '@/components/ui/SectionFade'
import Link from 'next/link'
import Image from 'next/image'
import { CALENDLY_LINK } from '@/lib/constants'

export default function AboutPage() {
  const { t, isRTL } = useLanguage()

  const offices = isRTL
    ? [
        { name: 'משרד ראשי', addr: 'קיבוץ עין צורים' },
        { name: 'ירושלים', addr: 'הר חוצבים' },
        { name: 'מרכז', addr: 'רמת גן — מתחם הבורסה' },
      ]
    : [
        { name: 'Main Office', addr: 'Kibbutz Ein Tzurim' },
        { name: 'Jerusalem', addr: 'Har Hotzvim' },
        { name: 'Central', addr: 'Ramat Gan — Diamond Exchange' },
      ]

  const stats = [
    { value: '45+', label: t.about.stats.yearsLabel },
    { value: '1,000+', label: t.about.stats.familiesLabel },
    { value: '5.0', label: t.about.stats.ratingLabel },
  ]

  return (
    <PageWrapper>
      {/* Hero — editorial */}
      <SectionFade>
        <div className="section-container pt-16 md:pt-24 pb-10 md:pb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-num">·</span>
            <span className="eyebrow">
              {isRTL ? 'אודות המשרד' : 'About'}
            </span>
          </div>
          <h1
            className="font-bold tracking-tight max-w-4xl"
            style={{
              fontFamily: 'var(--font-frank)',
              color: 'var(--color-ink)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            {isRTL
              ? 'משרד בוטיק לדיני ירושה ומשפחה — מאז 1979.'
              : 'A boutique inheritance and family law office — since 1979.'}
          </h1>
        </div>
      </SectionFade>

      {/* Two-column: portrait + biography */}
      <SectionFade>
        <div className="section-container pb-20 md:pb-28">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
            style={{ borderTop: '1px solid var(--color-rule)' }}
          >
            <div className={`lg:col-span-5 pt-12 ${isRTL ? '' : ''}`}>
              <figure>
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
                  style={{ color: 'var(--color-ink-mid)' }}
                >
                  <span>
                    {isRTL ? 'עו״ד איתמר ארנסט · מנכ״ל המשרד' : 'Adv. Itamar Ernst · Managing Partner'}
                  </span>
                  <span style={{ color: 'var(--color-accent)' }}>I</span>
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-7 pt-12 space-y-6">
              <p
                className="text-lg drop-cap"
                style={{ color: 'var(--color-ink-body)', lineHeight: 1.7 }}
              >
                {t.about.p1}
              </p>
              <p style={{ color: 'var(--color-ink-body)', lineHeight: 1.7 }}>
                {t.about.p2}
              </p>
              <p style={{ color: 'var(--color-ink-body)', lineHeight: 1.7 }}>
                {t.about.p3}
              </p>
              <p style={{ color: 'var(--color-ink-body)', lineHeight: 1.7 }}>
                {t.about.p4}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6">
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink"
                >
                  {isRTL ? 'קביעת פגישת ייעוץ' : 'Book Consultation'}
                </a>
                <Link href="/practice-areas" className="link-arrow">
                  {t.nav.practiceAreas}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionFade>

      {/* Stats strip */}
      <SectionFade
        style={{ backgroundColor: 'var(--color-paper-warm)' }}
      >
        <div style={{ borderTop: '1px solid var(--color-rule-strong)' }} />
        <div className="section-container py-16 md:py-20">
          <div
            className="grid grid-cols-1 sm:grid-cols-3"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="py-4 sm:py-2 text-center sm:text-start"
                style={{
                  borderInlineStart:
                    i > 0 ? '1px solid var(--color-rule-strong)' : 'none',
                  paddingInlineStart: i > 0 ? '2rem' : 0,
                }}
              >
                <div
                  className="font-bold"
                  style={{
                    fontFamily: 'var(--font-frank)',
                    color: 'var(--color-ink-strong)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-3 text-xs tracking-[0.18em] uppercase"
                  style={{ color: 'var(--color-ink-mid)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--color-rule-strong)' }} />
      </SectionFade>

      {/* Approach + offices */}
      <SectionFade>
        <div className="section-container py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-7">
                <span className="section-num">·</span>
                <span className="eyebrow">
                  {isRTL ? 'הגישה שלנו' : 'Approach'}
                </span>
              </div>
              <h2
                className="font-bold tracking-tight"
                style={{
                  fontFamily: 'var(--font-frank)',
                  color: 'var(--color-ink)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.015em',
                }}
              >
                {isRTL
                  ? 'גישה אישית, מקצועיות ללא פשרות.'
                  : 'A personal approach, uncompromising professionalism.'}
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p style={{ color: 'var(--color-ink-body)', lineHeight: 1.75 }}>
                {isRTL
                  ? 'משרד עו"ד ארנסט הוקם בשנת 1979 ומאז ועד היום שמר על אותה גישה: ליווי אישי, הקשבה אמיתית לצרכי הלקוח ופתרונות יצירתיים ומותאמים לכל מקרה.'
                  : 'Ernst Law Office was founded in 1979 and has since maintained the same approach — personal accompaniment, genuine listening, and creative solutions tailored to each case.'}
              </p>
              <p style={{ color: 'var(--color-ink-body)', lineHeight: 1.75 }}>
                {isRTL
                  ? 'המשרד מתמחה בהעברה בין-דורית של נכסים — תחום הדורש שילוב ייחודי של מומחיות בדיני ירושה, מיסוי מקרקעין, ייפוי כוח מתמשך ודיני משפחה תחת קורת גג אחת.'
                  : 'The firm specialises in intergenerational asset transfer — a field requiring a unique combination of expertise in inheritance, real-estate taxation, continuing power of attorney, and family law, all under one roof.'}
              </p>

              <div className="pt-8">
                <h3
                  className="text-xs tracking-[0.22em] uppercase mb-5"
                  style={{ color: 'var(--color-ink-mid)', fontWeight: 600 }}
                >
                  {isRTL ? 'משרדים' : 'Offices'}
                </h3>
                <ul style={{ borderTop: '1px solid var(--color-rule)' }}>
                  {offices.map((office, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-4 py-4"
                      style={{ borderBottom: '1px solid var(--color-rule)' }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-frank)',
                          color: 'var(--color-ink)',
                          fontWeight: 600,
                        }}
                      >
                        {office.name}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: 'var(--color-ink-mid)' }}
                      >
                        {office.addr}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionFade>
    </PageWrapper>
  )
}
