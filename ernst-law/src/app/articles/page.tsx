'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import SectionFade from '@/components/ui/SectionFade'
import Link from 'next/link'
import { ARTICLES, CATEGORY_LABELS_HE } from '@/lib/articles'

export default function ArticlesPage() {
  const { t, isRTL } = useLanguage()

  return (
    <PageWrapper>
      <SectionFade>
        <div className="section-container pt-16 md:pt-24 pb-10 md:pb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-num">·</span>
            <span className="eyebrow">
              {isRTL ? 'תוכן מקצועי' : 'Insights'}
            </span>
          </div>
          <h1
            className="font-bold tracking-tight max-w-3xl"
            style={{
              fontFamily: 'var(--font-frank)',
              color: 'var(--color-ink)',
              fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            {t.articles.sectionTitle}.
          </h1>
          <p
            className="mt-7 text-base md:text-lg max-w-2xl"
            style={{ color: 'var(--color-ink-mid)', lineHeight: 1.7 }}
          >
            {t.articles.sectionSubtitle}
          </p>
        </div>
      </SectionFade>

      <SectionFade>
        <div className="section-container pb-24 md:pb-32">
          <div style={{ borderTop: '1px solid var(--color-rule)' }}>
            {ARTICLES.map((article, i) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group grid grid-cols-12 gap-6 py-8 md:py-10 transition-colors"
                style={{ borderBottom: '1px solid var(--color-rule)' }}
              >
                <div className="col-span-2 sm:col-span-1">
                  <span
                    className="text-sm tracking-wider"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-ink-soft)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-7">
                  <span
                    className="text-[0.7rem] tracking-[0.2em] uppercase"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {CATEGORY_LABELS_HE[article.category]}
                  </span>
                  <h2
                    className="mt-3 text-2xl md:text-3xl font-bold tracking-tight transition-colors group-hover:text-[color:var(--color-accent)]"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-ink)',
                      lineHeight: 1.15,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {article.titleHe}
                  </h2>
                  <p
                    className="mt-3 text-sm md:text-base"
                    style={{
                      color: 'var(--color-ink-mid)',
                      lineHeight: 1.7,
                    }}
                  >
                    {article.excerptHe}
                  </p>
                </div>
                <div className="hidden sm:flex col-span-4 items-end justify-end">
                  <div className="text-end">
                    <div
                      className="text-xs tracking-wider"
                      style={{ color: 'var(--color-ink-soft)' }}
                    >
                      {article.readTimeMin} {isRTL ? 'דקות קריאה' : 'min read'}
                    </div>
                    <div
                      className="mt-3 inline-flex items-center gap-2 text-xs tracking-wider transition-all duration-300 group-hover:gap-3"
                      style={{ color: 'var(--color-ink) ' }}
                    >
                      {isRTL ? 'קרא ←' : 'Read →'}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionFade>
    </PageWrapper>
  )
}
