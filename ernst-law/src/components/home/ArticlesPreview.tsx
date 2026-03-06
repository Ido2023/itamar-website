'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ArticlesPreview() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const articles = t.articles.articlesList

  return (
    <section className="relative overflow-hidden" ref={ref} style={{ background: '#08080f' }}>
      <div className="section-container py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: 'var(--color-primary-400)' }} />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--color-primary-400)' }}>
                {isRTL ? 'תוכן מקצועי' : 'Insights'}
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
            >
              {t.articles.sectionTitle}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/articles" className="btn-outline text-sm">
              {isRTL ? 'לכל המאמרים' : 'View All'}
              <Arrow size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Clean list of articles — no cards */}
        <div>
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            >
              <div
                className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 transition-all duration-300 cursor-pointer"
                style={{
                  borderBottom: '1px solid rgba(198,169,80,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingRight = isRTL ? '' : '1rem'
                  e.currentTarget.style.paddingLeft = isRTL ? '1rem' : ''
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingRight = ''
                  e.currentTarget.style.paddingLeft = ''
                }}
              >
                <span className="text-sm font-bold shrink-0 md:w-12 md:pt-1" style={{
                  fontFamily: 'var(--font-frank)',
                  color: 'rgba(198,169,80,0.2)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-300 transition-colors duration-300" style={{
                    fontFamily: 'var(--font-frank)',
                    color: '#F0ECE5',
                  }}>
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-2xl" style={{ color: 'rgba(240,236,229,0.35)' }}>
                    {article.excerpt}
                  </p>
                </div>
                <Arrow
                  size={18}
                  className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                  style={{ color: 'var(--color-primary-400)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
