'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { TESTIMONIALS, TESTIMONIAL_VIDEOS } from '@/lib/constants'
import ScrollReveal from '@/components/ui/ScrollReveal'
import VideoEmbed from '@/components/ui/VideoEmbed'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsPage() {
  const { t, lang } = useLanguage()

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
              {t.testimonials.sectionTitle}
            </h1>
            <p className="text-lg text-cream-200/60 max-w-2xl">
              {t.testimonials.sectionSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="pb-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="premium-card h-full flex flex-col">
                  <Quote size={28} className="mb-4" style={{ color: 'var(--color-primary-400)', opacity: 0.3 }} />
                  <p className="text-base text-cream-200/70 leading-relaxed flex-1 mb-6">
                    {lang === 'he' ? testimonial.textHe : testimonial.textEn}
                  </p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} className="pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-cream-50">
                          {lang === 'he' ? testimonial.nameHe : testimonial.nameEn}
                        </p>
                        <p className="text-xs text-cream-200/40">{testimonial.date}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, j) => (
                          <Star key={j} size={16} fill="var(--color-primary-400)" style={{ color: 'var(--color-primary-400)' }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-cream-50 mb-8" style={{ fontFamily: 'var(--font-frank)' }}>
              {lang === 'he' ? 'המלצות בווידאו' : 'Video Testimonials'}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIAL_VIDEOS.map((video, i) => (
              <ScrollReveal key={video.id} delay={i * 0.08}>
                <div className="premium-card p-4">
                  <VideoEmbed
                    videoId={video.id}
                    title={lang === 'he' ? video.nameHe : video.nameEn}
                  />
                  <p className="mt-3 text-sm text-cream-200/60">
                    {lang === 'he' ? video.nameHe : video.nameEn}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
