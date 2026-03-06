'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { VIDEOS, TESTIMONIAL_VIDEOS } from '@/lib/constants'
import ScrollReveal from '@/components/ui/ScrollReveal'
import VideoEmbed from '@/components/ui/VideoEmbed'

export default function VideosPage() {
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
              {t.videos.sectionTitle}
            </h1>
            <p className="text-lg text-cream-200/60 max-w-2xl">
              {t.videos.sectionSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Professional Videos */}
      <section className="pb-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VIDEOS.map((video, i) => (
              <ScrollReveal key={video.id} delay={i * 0.08}>
                <div className="premium-card p-4">
                  <VideoEmbed
                    videoId={video.id}
                    title={lang === 'he' ? video.titleHe : video.titleEn}
                  />
                  <p className="mt-3 text-sm text-cream-200/70" style={{ fontFamily: 'var(--font-frank)' }}>
                    {lang === 'he' ? video.titleHe : video.titleEn}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Videos */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-cream-50 mb-8" style={{ fontFamily: 'var(--font-frank)' }}>
              {lang === 'he' ? 'סרטוני המלצות' : 'Testimonial Videos'}
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
