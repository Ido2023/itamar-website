'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Link from 'next/link'
import { Phone, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { PHONE_NUMBER } from '@/lib/constants'
import type { LucideIcon } from 'lucide-react'

interface PracticeAreaDetailProps {
  icon: LucideIcon
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
  icon: Icon,
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

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(198,169,80,0.05) 0%, transparent 50%)' }}
        />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-1 text-sm mb-6 transition-colors duration-300"
              style={{ color: 'var(--color-primary-400)' }}
            >
              <BackArrow size={16} />
              {t.areas.sectionTitle}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(198,169,80,0.1)', border: '1px solid rgba(198,169,80,0.2)' }}
              >
                <Icon size={30} style={{ color: 'var(--color-primary-400)' }} />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50"
                  style={{ fontFamily: 'var(--font-frank)' }}>
                {title}
              </h1>
            </div>

            <p className="text-lg text-cream-200/70 max-w-3xl leading-relaxed">
              {desc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Details */}
              {details.map((paragraph, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <p className="text-base text-cream-200/65 leading-relaxed">{paragraph}</p>
                </ScrollReveal>
              ))}

              {/* CTA */}
              <ScrollReveal delay={0.3}>
                <div className="pt-6">
                  <a href={`tel:${PHONE_NUMBER}`} className="btn-premium">
                    <Phone size={18} />
                    {t.common.bookConsultation}
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Benefits sidebar */}
            <div>
              <ScrollReveal>
                <div className="premium-card">
                  <h3 className="text-lg font-bold text-cream-50 mb-4" style={{ fontFamily: 'var(--font-frank)' }}>
                    {isRTL ? 'יתרונות עיקריים' : 'Key Benefits'}
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                          style={{ backgroundColor: 'rgba(198,169,80,0.15)', color: 'var(--color-primary-400)' }}
                        >
                          {i + 1}
                        </div>
                        <span className="text-sm text-cream-200/65">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
