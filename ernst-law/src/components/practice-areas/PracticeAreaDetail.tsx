'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import SectionFade from '@/components/ui/SectionFade'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { CALENDLY_LINK, PHONE_TEL, PHONE_NUMBER } from '@/lib/constants'
import type { LucideIcon } from 'lucide-react'

interface PracticeAreaDetailProps {
  icon?: LucideIcon
  titleHe: string
  titleEn: string
  descHe: string
  descEn: string
  detailsHe: string[]
  detailsEn: string[]
  benefitsHe: string[]
  benefitsEn: string[]
}

export default function PracticeAreaDetail({
  titleHe,
  titleEn,
  descHe,
  descEn,
  detailsHe,
  detailsEn,
  benefitsHe,
  benefitsEn,
}: PracticeAreaDetailProps) {
  const { t, lang, isRTL } = useLanguage()
  const title = lang === 'he' ? titleHe : titleEn
  const desc = lang === 'he' ? descHe : descEn
  const details = lang === 'he' ? detailsHe : detailsEn
  const benefits = lang === 'he' ? benefitsHe : benefitsEn
  const BackArrow = isRTL ? ChevronRight : ChevronLeft
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <PageWrapper>
      {/* Hero */}
      <SectionFade>
        <div className="section-container pt-16 md:pt-24 pb-10 md:pb-16">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-xs tracking-wider mb-10 transition-colors hover:text-[color:var(--color-accent)]"
            style={{ color: 'var(--color-ink-mid)' }}
          >
            <BackArrow size={14} />
            {t.areas.sectionTitle}
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="section-num">·</span>
            <span className="eyebrow">
              {isRTL ? 'תחום התמחות' : 'Practice Area'}
            </span>
          </div>

          <h1
            className="font-bold tracking-tight max-w-4xl"
            style={{
              fontFamily: 'var(--font-frank)',
              color: 'var(--color-ink)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>

          <p
            className="mt-7 text-lg md:text-xl max-w-3xl"
            style={{ color: 'var(--color-ink-mid)', lineHeight: 1.65 }}
          >
            {desc}
          </p>
        </div>
      </SectionFade>

      {/* Body */}
      <SectionFade>
        <div className="section-container pb-24 md:pb-32">
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
            style={{ borderTop: '1px solid var(--color-rule)' }}
          >
            {/* Long-form details */}
            <div className="lg:col-span-8 pt-12">
              <div className="space-y-7">
                {details.map((paragraph, i) => (
                  <p
                    key={i}
                    className={i === 0 ? 'text-lg drop-cap' : 'text-base md:text-[1.0625rem]'}
                    style={{ color: 'var(--color-ink-body)', lineHeight: 1.75 }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink"
                >
                  {isRTL ? 'קביעת פגישת ייעוץ' : 'Book Consultation'}
                </a>
                <a
                  href={PHONE_TEL}
                  className="link-arrow"
                  dir="ltr"
                >
                  {PHONE_NUMBER}
                  <Arrow size={14} />
                </a>
              </div>
            </div>

            {/* Benefits sidebar */}
            <aside
              className="lg:col-span-4 pt-12"
              style={{ borderInlineStart: '1px solid var(--color-rule)' }}
            >
              <div className="ps-0 lg:ps-12">
                <h3
                  className="text-xs tracking-[0.22em] uppercase mb-6"
                  style={{
                    color: 'var(--color-ink-mid)',
                    fontWeight: 600,
                  }}
                >
                  {isRTL ? 'יתרונות עיקריים' : 'Key Benefits'}
                </h3>
                <ul style={{ borderTop: '1px solid var(--color-rule)' }}>
                  {benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-baseline gap-4 py-4"
                      style={{ borderBottom: '1px solid var(--color-rule)' }}
                    >
                      <span
                        className="text-xs tracking-wider shrink-0"
                        style={{
                          fontFamily: 'var(--font-frank)',
                          color: 'var(--color-accent)',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="text-sm"
                        style={{
                          color: 'var(--color-ink-body)',
                          lineHeight: 1.5,
                        }}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </SectionFade>
    </PageWrapper>
  )
}
