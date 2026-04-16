'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import SectionFade from '@/components/ui/SectionFade'
import { VIDEOS, TESTIMONIAL_VIDEOS } from '@/lib/constants'
import VideoEmbed from '@/components/ui/VideoEmbed'

export default function VideosPage() {
  const { t, lang, isRTL } = useLanguage()

  return (
    <PageWrapper>
      <SectionFade>
        <div className="section-container pt-16 md:pt-24 pb-10 md:pb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-num">·</span>
            <span className="eyebrow">
              {isRTL ? 'סרטונים' : 'Videos'}
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
            {t.videos.sectionTitle}.
          </h1>
          <p
            className="mt-7 text-base md:text-lg max-w-2xl"
            style={{ color: 'var(--color-ink-mid)', lineHeight: 1.7 }}
          >
            {t.videos.sectionSubtitle}
          </p>
        </div>
      </SectionFade>

      <SectionFade>
        <div className="section-container pb-16 md:pb-24">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12"
            style={{ borderTop: '1px solid var(--color-rule)', paddingTop: '3rem' }}
          >
            {VIDEOS.map((video, i) => (
              <div key={video.id}>
                <div
                  className="overflow-hidden"
                  style={{ border: '1px solid var(--color-rule-strong)' }}
                >
                  <VideoEmbed
                    videoId={video.id}
                    title={lang === 'he' ? video.titleHe : video.titleEn}
                  />
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <span
                    className="text-xs tracking-wider"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-ink-soft)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: 'var(--color-ink)',
                      fontWeight: 500,
                    }}
                  >
                    {lang === 'he' ? video.titleHe : video.titleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionFade>

      {/* Testimonial Videos */}
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
