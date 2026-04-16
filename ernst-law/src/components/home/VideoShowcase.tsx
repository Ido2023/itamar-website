'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { VIDEOS } from '@/lib/constants'
import SectionFade from '@/components/ui/SectionFade'
import VideoEmbed from '@/components/ui/VideoEmbed'

export default function VideoShowcase() {
  const { lang, isRTL } = useLanguage()
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0].id)
  const activeTitle = VIDEOS.find(v => v.id === activeVideo)

  return (
    <SectionFade
      id="videos"
      style={{ backgroundColor: 'var(--color-paper-raised)' }}
      yOffset={32}
    >
      <div style={{ borderTop: '1px solid var(--color-rule)' }} />

      <div className="section-container py-14 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="section-num">VI</span>
              <span className="eyebrow">
                {isRTL ? 'סרטוני מידע' : 'Videos'}
              </span>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2
              className="font-bold tracking-tight max-w-2xl"
              style={{
                fontFamily: 'var(--font-frank)',
                color: 'var(--color-ink)',
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
              }}
            >
              {isRTL
                ? 'סרטוני הסברה מקצועיים בנושאי ירושה, צוואות ומיסוי.'
                : 'Professional explainer videos on inheritance, wills, and taxation.'}
            </h2>
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          style={{ borderTop: '1px solid var(--color-rule)' }}
        >
          <div className="lg:col-span-8 pt-8">
            <div
              className="overflow-hidden"
              style={{ border: '1px solid var(--color-rule-strong)' }}
            >
              <VideoEmbed
                videoId={activeVideo}
                title={activeTitle ? (lang === 'he' ? activeTitle.titleHe : activeTitle.titleEn) : ''}
              />
            </div>
            <p
              className="mt-4 text-sm tracking-wide"
              style={{
                color: 'var(--color-ink-mid)',
                fontFamily: 'var(--font-frank)',
              }}
            >
              {activeTitle && (lang === 'he' ? activeTitle.titleHe : activeTitle.titleEn)}
            </p>
          </div>

          <div
            className="lg:col-span-4 flex flex-col"
            style={{ borderTop: '1px solid var(--color-rule)' }}
          >
            {VIDEOS.map((video, i) => {
              const active = video.id === activeVideo
              return (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video.id)}
                  className="group text-start py-5 transition-colors"
                  style={{
                    borderBottom: '1px solid var(--color-rule)',
                  }}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className="text-xs tracking-wider shrink-0"
                      style={{
                        fontFamily: 'var(--font-frank)',
                        color: active
                          ? 'var(--color-accent)'
                          : 'var(--color-ink-soft)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-sm leading-snug transition-colors"
                      style={{
                        color: active ? 'var(--color-ink)' : 'var(--color-ink-mid)',
                        fontWeight: active ? 600 : 400,
                        fontFamily: 'var(--font-frank)',
                      }}
                    >
                      {lang === 'he' ? video.titleHe : video.titleEn}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </SectionFade>
  )
}
