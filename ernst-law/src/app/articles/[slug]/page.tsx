'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'
import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import {
  getArticleBySlug,
  getOtherArticles,
  CATEGORY_LABELS_HE,
  type Article,
} from '@/lib/articles'

// ──────────────────────────────────────────────────────────────────────────────
// Tiny inline markdown renderer.
// Splits content by blank lines into blocks; lines beginning with `## ` or
// `### ` become headings, everything else is a paragraph.
// ──────────────────────────────────────────────────────────────────────────────

type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }

function parseMarkdown(md: string): Block[] {
  const trimmed = md.trim()
  if (!trimmed) return []
  return trimmed
    .split(/\n{2,}/)
    .map((raw) => raw.trim())
    .filter(Boolean)
    .map<Block>((block) => {
      if (block.startsWith('### ')) return { type: 'h3', text: block.slice(4).trim() }
      if (block.startsWith('## ')) return { type: 'h2', text: block.slice(3).trim() }
      return { type: 'p', text: block }
    })
}

// ──────────────────────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────────────────────

export default function ArticlePage() {
  const params = useParams<{ slug: string }>()
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  const { isRTL } = useLanguage()

  const article = useMemo<Article | undefined>(() => getArticleBySlug(slug), [slug])

  if (!article) {
    return (
      <PageWrapper>
        <NotFoundState isRTL={isRTL} />
      </PageWrapper>
    )
  }

  const blocks = parseMarkdown(article.contentHe)
  const others = getOtherArticles(article.slug, 3)
  const categoryLabel = CATEGORY_LABELS_HE[article.category]

  return (
    <PageWrapper>
      <article
        dir="rtl"
        style={{
          background: 'var(--color-paper)',
          color: 'var(--color-ink)',
          minHeight: '100vh',
        }}
      >
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <header className="px-6 md:px-10 pt-16 md:pt-24 pb-10 md:pb-14">
          <div className="mx-auto" style={{ maxWidth: '760px' }}>
            <div
              className="text-xs md:text-sm uppercase tracking-[0.2em] mb-6"
              style={{
                color: 'var(--color-ink-soft)',
                fontFamily: 'var(--font-heebo)',
              }}
            >
              <span>מאמר</span>
              <span className="mx-2" style={{ color: 'var(--color-rule)' }}>·</span>
              <span>{categoryLabel}</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight"
              style={{
                fontFamily: 'var(--font-frank)',
                color: 'var(--color-ink)',
              }}
            >
              {article.titleHe}
            </h1>

            <div
              className="mt-8 flex items-center gap-3 text-sm"
              style={{
                color: 'var(--color-ink-mid)',
                fontFamily: 'var(--font-heebo)',
              }}
            >
              <span>זמן קריאה {article.readTimeMin} דק׳</span>
              {article.publishDate ? (
                <>
                  <span style={{ color: 'var(--color-rule)' }}>·</span>
                  <time dateTime={article.publishDate}>
                    {formatHebrewDate(article.publishDate)}
                  </time>
                </>
              ) : null}
            </div>
          </div>
        </header>

        {/* ── Hairline ──────────────────────────────────────────────── */}
        <div className="px-6 md:px-10">
          <div
            className="mx-auto"
            style={{
              maxWidth: '760px',
              height: '1px',
              background: 'var(--color-rule)',
            }}
          />
        </div>

        {/* ── Body ──────────────────────────────────────────────────── */}
        <div className="px-6 md:px-10 py-12 md:py-16">
          <div className="mx-auto" style={{ maxWidth: '720px' }}>
            {blocks.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2
                    key={i}
                    className="mt-14 mb-5 text-2xl md:text-3xl font-medium leading-snug"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-ink)',
                    }}
                  >
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'h3') {
                return (
                  <h3
                    key={i}
                    className="mt-10 mb-3 text-lg md:text-xl font-semibold"
                    style={{
                      fontFamily: 'var(--font-heebo)',
                      color: 'var(--color-ink)',
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {block.text}
                  </h3>
                )
              }
              return (
                <p
                  key={i}
                  className="text-[1.0625rem] md:text-[1.125rem] mb-6"
                  style={{
                    fontFamily: 'var(--font-heebo)',
                    color: 'var(--color-ink)',
                    lineHeight: 1.85,
                    maxWidth: '65ch',
                  }}
                >
                  {block.text}
                </p>
              )
            })}
          </div>
        </div>

        {/* ── Related ──────────────────────────────────────────────── */}
        {others.length > 0 ? (
          <section className="px-6 md:px-10 pb-16">
            <div className="mx-auto" style={{ maxWidth: '760px' }}>
              <div
                style={{
                  height: '1px',
                  background: 'var(--color-rule)',
                  marginBottom: '2.5rem',
                }}
              />
              <h2
                className="text-xs md:text-sm uppercase tracking-[0.2em] mb-8"
                style={{
                  color: 'var(--color-ink-soft)',
                  fontFamily: 'var(--font-heebo)',
                }}
              >
                מאמרים נוספים
              </h2>

              <ul className="space-y-8">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/articles/${o.slug}`}
                      className="block group"
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        className="text-[0.7rem] uppercase tracking-[0.18em] mb-2"
                        style={{
                          color: 'var(--color-ink-soft)',
                          fontFamily: 'var(--font-heebo)',
                        }}
                      >
                        {CATEGORY_LABELS_HE[o.category]}
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-medium mb-2 leading-snug transition-colors"
                        style={{
                          fontFamily: 'var(--font-frank)',
                          color: 'var(--color-ink)',
                        }}
                      >
                        <span className="group-hover:[color:var(--color-accent)] transition-colors">
                          {o.titleHe}
                        </span>
                      </h3>
                      <p
                        className="text-sm md:text-base"
                        style={{
                          color: 'var(--color-ink-mid)',
                          fontFamily: 'var(--font-heebo)',
                          lineHeight: 1.7,
                        }}
                      >
                        {o.excerptHe}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {/* ── Back link ────────────────────────────────────────────── */}
        <footer className="px-6 md:px-10 pb-24">
          <div className="mx-auto" style={{ maxWidth: '760px' }}>
            <div
              style={{
                height: '1px',
                background: 'var(--color-rule)',
                marginBottom: '2rem',
              }}
            />
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
              style={{
                color: 'var(--color-ink-mid)',
                fontFamily: 'var(--font-heebo)',
                textDecoration: 'none',
              }}
            >
              <span>{isRTL ? '←' : '→'}</span>
              <span>חזרה לכל המאמרים</span>
            </Link>
          </div>
        </footer>
      </article>
    </PageWrapper>
  )
}

// ──────────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────────

function NotFoundState({ isRTL }: { isRTL: boolean }) {
  return (
    <section
      dir="rtl"
      className="px-6 md:px-10 py-32 min-h-[70vh] flex items-center"
      style={{ background: 'var(--color-paper)', color: 'var(--color-ink)' }}
    >
      <div className="mx-auto text-center" style={{ maxWidth: '560px' }}>
        <div
          className="text-xs uppercase tracking-[0.2em] mb-6"
          style={{
            color: 'var(--color-ink-soft)',
            fontFamily: 'var(--font-heebo)',
          }}
        >
          404
        </div>
        <h1
          className="text-3xl md:text-4xl font-medium mb-6 leading-tight"
          style={{
            fontFamily: 'var(--font-frank)',
            color: 'var(--color-ink)',
          }}
        >
          המאמר לא נמצא
        </h1>
        <p
          className="text-base md:text-lg mb-10"
          style={{
            color: 'var(--color-ink-mid)',
            fontFamily: 'var(--font-heebo)',
            lineHeight: 1.7,
          }}
        >
          ייתכן שהקישור שגוי או שהמאמר הוסר. אפשר לחזור לרשימת כל המאמרים ולמצוא
          את מה שחיפשתם.
        </p>
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
          style={{
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-heebo)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--color-accent)',
            paddingBottom: '2px',
          }}
        >
          <span>{isRTL ? '←' : '→'}</span>
          <span>לכל המאמרים</span>
        </Link>
      </div>
    </section>
  )
}

function formatHebrewDate(iso: string): string {
  // Render as e.g. "25 באוגוסט 2024"
  try {
    const d = new Date(iso)
    if (Number.isNaN(d.getTime())) return iso
    const months = [
      'ינואר',
      'פברואר',
      'מרץ',
      'אפריל',
      'מאי',
      'יוני',
      'יולי',
      'אוגוסט',
      'ספטמבר',
      'אוקטובר',
      'נובמבר',
      'דצמבר',
    ]
    return `${d.getDate()} ב${months[d.getMonth()]} ${d.getFullYear()}`
  } catch {
    return iso
  }
}
