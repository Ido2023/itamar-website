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
    <section className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, var(--color-dark-950) 0%, rgba(10,12,22,1) 50%, var(--color-dark-950) 100%)',
      }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.3), transparent)',
      }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-12" style={{ background: 'var(--color-primary-400)' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--color-primary-400)' }}>
                {isRTL ? 'תוכן מקצועי' : 'Insights'}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
            >
              {t.articles.sectionTitle}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/articles" className="btn-outline text-sm">
              {isRTL ? 'לכל המאמרים' : 'View All'}
              <Arrow size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Magazine layout — featured + list */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured article — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div
              className="group relative overflow-hidden rounded-2xl p-8 md:p-10 h-full transition-all duration-500"
              style={{
                background: 'linear-gradient(145deg, rgba(12,12,22,0.95), rgba(18,18,32,0.8))',
                border: '1px solid rgba(198,169,80,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,169,80,0.25)'
                e.currentTarget.style.boxShadow = '0 25px 60px -15px rgba(0,0,0,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,169,80,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span className="absolute top-4 font-bold pointer-events-none select-none" style={{
                [isRTL ? 'left' : 'right']: '1.5rem',
                fontSize: '8rem',
                lineHeight: 0.8,
                fontFamily: 'var(--font-frank)',
                color: 'rgba(198,169,80,0.03)',
              }}>
                01
              </span>
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium px-3 py-1 rounded-md inline-block mb-6" style={{
                  background: 'rgba(198,169,80,0.08)',
                  color: 'var(--color-primary-400)',
                  border: '1px solid rgba(198,169,80,0.1)',
                }}>
                  {isRTL ? 'מאמר מומלץ' : 'Featured'}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}>
                  {articles[0].title}
                </h3>
                <p className="text-sm leading-relaxed mb-8 max-w-xl" style={{ color: 'rgba(240,236,229,0.45)' }}>
                  {articles[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all duration-300" style={{ color: 'var(--color-primary-400)' }}>
                  {t.articles.readMore}
                  <Arrow size={14} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Side list — compact stacked cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {articles.slice(1).map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group relative overflow-hidden rounded-xl p-5 flex-1 transition-all duration-500"
                style={{
                  background: 'linear-gradient(145deg, rgba(12,12,22,0.95), rgba(18,18,32,0.8))',
                  border: '1px solid rgba(198,169,80,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198,169,80,0.2)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(198,169,80,0.06)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <span className="text-[10px] uppercase tracking-[0.15em] font-medium mb-3 block" style={{
                  color: 'rgba(198,169,80,0.5)',
                }}>
                  {String(i + 2).padStart(2, '0')}
                </span>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}>
                  {article.title}
                </h3>
                <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'rgba(240,236,229,0.35)' }}>
                  {article.excerpt}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.3), transparent)',
      }} />
    </section>
  )
}
