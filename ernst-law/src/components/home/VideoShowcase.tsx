'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { VIDEOS } from '@/lib/constants'
import { Play } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import VideoEmbed from '@/components/ui/VideoEmbed'

export default function VideoShowcase() {
  const { t, lang, isRTL } = useLanguage()
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0].id)
  const activeTitle = VIDEOS.find(v => v.id === activeVideo)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-28 md:py-36 relative overflow-hidden" ref={ref}>
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
                {isRTL ? 'סרטונים' : 'Videos'}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
            >
              {t.videos.sectionTitle}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/videos" className="btn-outline text-sm">
              {isRTL ? 'לכל הסרטונים' : 'View All'}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
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
              <p className="mt-4 text-sm" style={{ color: 'rgba(240,236,229,0.45)', fontFamily: 'var(--font-frank)' }}>
                {activeTitle && (lang === 'he' ? activeTitle.titleHe : activeTitle.titleEn)}
              </p>
            </div>

            {/* Video list */}
            <div className="flex flex-col gap-2.5">
              {VIDEOS.map((video, i) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video.id)}
                  className="flex items-center gap-3 p-3.5 rounded-xl text-start transition-all duration-300 cursor-pointer group"
                  style={{
                    background: video.id === activeVideo
                      ? 'linear-gradient(145deg, rgba(198,169,80,0.08), rgba(198,169,80,0.03))'
                      : 'transparent',
                    border: `1px solid ${video.id === activeVideo ? 'rgba(198,169,80,0.2)' : 'rgba(198,169,80,0.05)'}`,
                  }}
                >
                  <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300" style={{
                    background: video.id === activeVideo ? 'rgba(198,169,80,0.15)' : 'rgba(198,169,80,0.05)',
                    border: '1px solid rgba(198,169,80,0.1)',
                  }}>
                    <Play size={14} style={{ color: 'var(--color-primary-400)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] tracking-wider block mb-0.5" style={{ color: 'rgba(198,169,80,0.4)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm line-clamp-1 block" style={{
                      color: video.id === activeVideo ? 'rgba(240,236,229,0.8)' : 'rgba(240,236,229,0.45)',
                    }}>
                      {lang === 'he' ? video.titleHe : video.titleEn}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
