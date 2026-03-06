'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { BookOpen, ArrowLeft, ArrowRight } from 'lucide-react'

export default function ArticlesPage() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <PageWrapper>
      <section className="py-16 md:py-24 relative">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(198,169,80,0.05) 0%, transparent 50%)' }}
        />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="gold-divider mb-4" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream-50 mb-4"
                style={{ fontFamily: 'var(--font-frank)' }}>
              {t.articles.sectionTitle}
            </h1>
            <p className="text-lg text-cream-200/60 max-w-2xl">
              {t.articles.sectionSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.articles.articlesList.map((article, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <article className="premium-card h-full flex flex-col group cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={16} style={{ color: 'var(--color-primary-400)' }} />
                    <span className="text-xs text-cream-200/40 uppercase tracking-wider">
                      {isRTL ? 'מאמר' : 'Article'}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-cream-50 mb-3" style={{ fontFamily: 'var(--font-frank)' }}>
                    {article.title}
                  </h2>
                  <p className="text-sm text-cream-200/55 leading-relaxed flex-1 mb-4">
                    {article.excerpt}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: 'var(--color-primary-400)' }}
                  >
                    {t.articles.readMore}
                    <Arrow size={14} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
