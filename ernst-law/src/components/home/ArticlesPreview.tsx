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
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--color-dark-950)' }}>
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="grid-pattern" />

      <div className="section-container relative z-10">
        <SectionHeading title={t.articles.sectionTitle} subtitle={t.articles.sectionSubtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.articles.articlesList.map((article, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="premium-card h-full flex flex-col group">
                {/* Top accent glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(198,169,80,0.05) 0%, transparent 60%)',
                }} />

                <div className="flex items-center gap-2 mb-4 relative">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{
                    background: 'rgba(198,169,80,0.08)',
                    border: '1px solid rgba(198,169,80,0.1)',
                  }}>
                    <BookOpen size={14} style={{ color: 'var(--color-primary-400)' }} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.15em] font-medium" style={{ color: 'rgba(198,169,80,0.5)' }}>
                    {isRTL ? 'מאמר' : 'Article'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-cream-50 mb-3 relative" style={{ fontFamily: 'var(--font-frank)' }}>
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-5 relative" style={{ color: 'rgba(250,248,240,0.4)' }}>
                  {article.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 relative group-hover:gap-3"
                  style={{ color: 'var(--color-primary-400)' }}
                >
                  {t.articles.readMore}
                  <Arrow size={14} className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link href="/articles" className="btn-outline">
            {isRTL ? 'לכל המאמרים' : 'View All Articles'}
            <Arrow size={16} />
          </Link>
        </ScrollReveal>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
