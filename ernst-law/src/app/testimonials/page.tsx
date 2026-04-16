'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import SectionFade from '@/components/ui/SectionFade'
import { TESTIMONIALS, TESTIMONIAL_VIDEOS } from '@/lib/constants'
import VideoEmbed from '@/components/ui/VideoEmbed'

export default function TestimonialsPage() {
  const { t, lang, isRTL } = useLanguage()

  return (
    <PageWrapper>
      <SectionFade>
        <div className="section-container pt-16 md:pt-24 pb-10 md:pb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-num">·</span>
            <span className="eyebrow">
              {isRTL ? 'המלצות' : 'Testimonials'}
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
            {t.testimonials.sectionTitle}.
          </h1>
          <p
            className="mt-7 text-base md:text-lg max-w-2xl"
            style={{ color: 'var(--color-ink-mid)', lineHeight: 1.7 }}
          >
            {t.testimonials.sectionSubtitle}
          </p>
        </div>
      </SectionFade>

      <SectionFade>
        <div className="section-container pb-16 md:pb-24">
          <div style={{ borderTop: '1px solid var(--color-rule)' }}>
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-6 py-10 md:py-14"
                style={{ borderBottom: '1px solid var(--color-rule)' }}
              >
                <div className="col-span-12 md:col-span-2">
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
                <blockquote className="col-span-12 md:col-span-10">
                  <p
                    className="font-medium tracking-tight"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-ink)',
                      fontSize: 'clamp(1.2rem, 2vw, 1.75rem)',
                      lineHeight: 1.45,
                      letterSpacing: '-0.005em',
                      fontWeight: 400,
                    }}
                  >
                    {isRTL ? '״' : '“'}
                    {lang === 'he' ? testimonial.textHe : testimonial.textEn}
                    {isRTL ? '״' : '”'}
                  </p>
                  <footer className="mt-6 flex items-center gap-3">
                    <div
                      className="h-px w-8"
                      style={{ background: 'var(--color-accent)' }}
                    />
                    <cite
                      className="not-italic text-sm font-bold tracking-tight"
                      style={{
                        color: 'var(--color-ink)',
                        fontFamily: 'var(--font-frank)',
                      }}
                    >
                      {lang === 'he' ? testimonial.nameHe : testimonial.nameEn}
                    </cite>
                    <span
                      className="text-xs tracking-wider"
                      style={{ color: 'var(--color-ink-soft)' }}
                    >
                      {testimonial.date}
                    </span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </SectionFade>

      {/* Video Testimonials */}
      <SectionFade
        style={{ backgroundColor: 'var(--color-paper-warm)' }}
      >
        <div style={{ borderTop: '1px solid var(--color-rule-strong)' }} />
        <div className="section-container py-20 md:py-28">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-num">·</span>
            <span className="eyebrow">
              {isRTL ? 'המלצות בווידאו' : 'Video Testimonials'}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIAL_VIDEOS.map((video) => (
              <div key={video.id}>
                <div
                  className="overflow-hidden"
                  style={{ border: '1px solid var(--color-rule-strong)' }}
                >
                  <VideoEmbed
                    videoId={video.id}
                    title={lang === 'he' ? video.nameHe : video.nameEn}
                  />
                </div>
                <p
                  className="mt-3 text-sm"
                  style={{
                    color: 'var(--color-ink-mid)',
                    fontFamily: 'var(--font-frank)',
                  }}
                >
                  {lang === 'he' ? video.nameHe : video.nameEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionFade>
    </PageWrapper>
  )
}
