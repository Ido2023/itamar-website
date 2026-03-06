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
    <section className="py-20 md:py-28 relative">
      <div className="section-container">
        <SectionHeading title={t.videos.sectionTitle} subtitle={t.videos.sectionSubtitle} />

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured video */}
            <div className="lg:col-span-2">
              <VideoEmbed
                videoId={activeVideo}
                title={activeTitle ? (lang === 'he' ? activeTitle.titleHe : activeTitle.titleEn) : ''}
                className="shadow-2xl"
              />
              <p className="mt-3 text-sm text-cream-200/60" style={{ fontFamily: 'var(--font-frank)' }}>
                {activeTitle && (lang === 'he' ? activeTitle.titleHe : activeTitle.titleEn)}
              </p>
            </div>

            {/* Video list */}
            <div className="flex flex-col gap-3">
              {VIDEOS.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video.id)}
                  className="flex items-center gap-3 p-3 rounded-xl text-start transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: video.id === activeVideo ? 'rgba(198,169,80,0.1)' : 'transparent',
                    border: `1px solid ${video.id === activeVideo ? 'rgba(198,169,80,0.3)' : 'rgba(255,255,255,0.05)'}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: video.id === activeVideo ? 'rgba(198,169,80,0.2)' : 'rgba(198,169,80,0.05)',
                    }}
                  >
                    <Play size={16} style={{ color: 'var(--color-primary-400)' }} />
                  </div>
                  <span className="text-sm text-cream-200/70 line-clamp-2">
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
