'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionFade from '@/components/ui/SectionFade'
import { ARTICLES } from '@/lib/articles'

export default function ArticlesPreview() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const featured = ARTICLES.slice(0, 4)
  const [first, ...rest] = featured

  return (
    <SectionFade
      id="articles"
      style={{ backgroundColor: 'var(--color-paper-raised)' }}
      className="relative"
      yOffset={32}
    >
      <div style={{ borderTop: '1px solid var(--color-rule)' }} />

      <div className="section-container py-14 md:py-32">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-10 md:mb-20">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="section-num">II</span>
              <span className="eyebrow">
                {isRTL ? 'תוכן מקצועי' : 'Insights'}
              </span>
            </div>
          </div>
          <div className="lg:col-span-9 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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
              {isRTL ? 'מאמרים מקצועיים.' : 'Articles & Insights.'}
            </h2>
            <Link
              href="/articles"
              className="link-arrow shrink-0"
            >
              {isRTL ? 'לכל המאמרים' : 'View All'}
              <Arrow size={14} />
            </Link>
          </div>
        </div>

        {first && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Featured article */}
            <Link
              href={`/articles/${first.slug}`}
              className="lg:col-span-7 group block"
              style={{
                borderTop: '1px solid var(--color-rule)',
                paddingTop: '2.5rem',
              }}
            >
              <div
                className="flex items-center gap-4 text-xs tracking-wider mb-5"
                style={{ color: 'var(--color-ink-mid)' }}
              >
                <span style={{ color: 'var(--color-accent)' }}>
                  {isRTL ? 'מאמר נבחר' : 'Featured'}
                </span>
                <span aria-hidden>·</span>
                <span>
                  {first.readTimeMin} {isRTL ? 'דקות קריאה' : 'min read'}
                </span>
              </div>
              <h3
                className="font-bold tracking-tight transition-colors duration-300 group-hover:text-[color:var(--color-accent)]"
                style={{
                  fontFamily: 'var(--font-frank)',
                  color: 'var(--color-ink)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                }}
              >
                {first.titleHe}
              </h3>
              <p
                className="mt-5 text-base md:text-lg"
                style={{
                  color: 'var(--color-ink-mid)',
                  lineHeight: 1.7,
                }}
              >
                {first.excerptHe}
              </p>
              <span
                className="mt-7 inline-flex items-center gap-2 text-xs tracking-wider transition-all duration-300 group-hover:gap-3"
                style={{ color: 'var(--color-accent)' }}
              >
                {isRTL ? 'המשך לקריאה' : 'Continue Reading'}
                <Arrow size={12} />
              </span>
            </Link>

            {/* Side list */}
            <div
              className="lg:col-span-5 flex flex-col"
              style={{ borderTop: '1px solid var(--color-rule)' }}
            >
              {rest.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group block py-7"
                  style={{
                    borderBottom: i < rest.length - 1
                      ? '1px solid var(--color-rule)'
                      : 'none',
                  }}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className="text-xs tracking-wider shrink-0"
                      style={{
                        fontFamily: 'var(--font-frank)',
                        color: 'var(--color-ink-soft)',
                      }}
                    >
                      {String(i + 2).padStart(2, '0')}
                    </span>
                    <div>
                      <h4
                        className="text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-[color:var(--color-accent)]"
                        style={{
                          fontFamily: 'var(--font-frank)',
                          color: 'var(--color-ink)',
                          lineHeight: 1.25,
                        }}
                      >
                        {article.titleHe}
                      </h4>
                      <p
                        className="mt-2 text-sm"
                        style={{
                          color: 'var(--color-ink-mid)',
                          lineHeight: 1.6,
                        }}
                      >
                        {article.excerptHe}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </SectionFade>
  )
}
