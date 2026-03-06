'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ArticlesPreview() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="py-20 md:py-28 relative" style={{ backgroundColor: 'var(--color-dark-950)' }}>
      <div className="section-container">
        <SectionHeading title={t.articles.sectionTitle} subtitle={t.articles.sectionSubtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.articles.articlesList.map((article, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="premium-card h-full flex flex-col group">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={16} style={{ color: 'var(--color-primary-400)' }} />
                  <span className="text-xs text-cream-200/40 uppercase tracking-wider">
                    {isRTL ? 'מאמר' : 'Article'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-cream-50 mb-3" style={{ fontFamily: 'var(--font-frank)' }}>
                  {article.title}
                </h3>
                <p className="text-sm text-cream-200/55 leading-relaxed flex-1 mb-4">
                  {article.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300"
                  style={{ color: 'var(--color-primary-400)' }}
                >
                  {t.articles.readMore}
                  <Arrow size={14} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-10">
          <Link href="/articles" className="btn-outline">
            {isRTL ? 'לכל המאמרים' : 'View All Articles'}
            <Arrow size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
