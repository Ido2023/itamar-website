'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { VIDEOS } from '@/lib/constants'
import { Play } from 'lucide-react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import VideoEmbed from '@/components/ui/VideoEmbed'

export default function VideoShowcase() {
  const { t, lang, isRTL } = useLanguage()
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0].id)
  const activeTitle = VIDEOS.find(v => v.id === activeVideo)

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="dot-pattern" />

      <div className="section-container relative z-10">
        <SectionHeading title={t.videos.sectionTitle} subtitle={t.videos.sectionSubtitle} />

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured video */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden" style={{
                border: '1px solid rgba(198,169,80,0.1)',
                boxShadow: '0 20px 60px -15px rgba(0,0,0,0.5)',
              }}>
                <VideoEmbed
                  videoId={activeVideo}
                  title={activeTitle ? (lang === 'he' ? activeTitle.titleHe : activeTitle.titleEn) : ''}
                />
              </div>
              <p className="mt-3 text-sm" style={{ color: 'rgba(250,248,240,0.45)', fontFamily: 'var(--font-frank)' }}>
                {activeTitle && (lang === 'he' ? activeTitle.titleHe : activeTitle.titleEn)}
              </p>
            </div>

            {/* Video list */}
            <div className="flex flex-col gap-2.5">
              {VIDEOS.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video.id)}
                  className="flex items-center gap-3 p-3 rounded-xl text-start transition-all duration-300 cursor-pointer group"
                  style={{
                    backgroundColor: video.id === activeVideo ? 'rgba(198,169,80,0.08)' : 'transparent',
                    border: `1px solid ${video.id === activeVideo ? 'rgba(198,169,80,0.2)' : 'rgba(198,169,80,0.05)'}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: video.id === activeVideo
                        ? 'linear-gradient(135deg, rgba(198,169,80,0.2), rgba(198,169,80,0.08))'
                        : 'rgba(198,169,80,0.04)',
                      border: '1px solid rgba(198,169,80,0.1)',
                    }}
                  >
                    <Play size={14} style={{ color: 'var(--color-primary-400)' }} />
                  </div>
                  <span className="text-sm line-clamp-2" style={{
                    color: video.id === activeVideo ? 'rgba(250,248,240,0.8)' : 'rgba(250,248,240,0.5)',
                  }}>
                    {lang === 'he' ? video.titleHe : video.titleEn}
                  </span>
                </button>
              ))}

              <Link
                href="/videos"
                className="btn-outline text-sm py-2.5 mt-2 w-full text-center"
              >
                {isRTL ? 'לכל הסרטונים' : 'View All Videos'}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
