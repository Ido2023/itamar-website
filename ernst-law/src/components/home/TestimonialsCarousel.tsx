'use client'

import { useCallback, useEffect, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { TESTIMONIALS } from '@/lib/constants'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useEmblaCarousel from 'embla-carousel-react'

export default function TestimonialsCarousel() {
  const { t, lang, isRTL } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: isRTL ? 'rtl' : 'ltr',
    align: 'start',
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 6000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const current = TESTIMONIALS[selectedIndex]

  return (
    <section className="relative overflow-hidden" ref={sectionRef} style={{ background: '#0a0c14' }}>
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.15), transparent)' }} />

      <div className="section-container py-24 md:py-32">
        {/* Header with nav */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: 'var(--color-primary-400)' }} />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--color-primary-400)' }}>
                {isRTL ? 'המלצות' : 'Testimonials'}
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
            >
              {t.testimonials.sectionTitle}
            </h2>
          </motion.div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{ border: '1px solid rgba(198,169,80,0.15)', color: 'var(--color-primary-400)' }}
              aria-label="Previous"
            >
              {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{ border: '1px solid rgba(198,169,80,0.15)', color: 'var(--color-primary-400)' }}
              aria-label="Next"
            >
              {isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
            <div className="flex gap-1.5 ms-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className="h-1 rounded-full transition-all duration-500 cursor-pointer"
                  style={{
                    width: i === selectedIndex ? '2rem' : '0.5rem',
                    backgroundColor: i === selectedIndex ? 'var(--color-primary-400)' : 'rgba(198,169,80,0.15)',
                  }}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Large featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-10"
        >
          <blockquote className="relative">
            <span className="absolute -top-4 text-8xl font-bold leading-none pointer-events-none" style={{
              fontFamily: 'Georgia, serif',
              color: 'rgba(198,169,80,0.08)',
              [isRTL ? 'right' : 'left']: 0,
            }}>
              &ldquo;
            </span>
            <p
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed pt-8 mb-8"
              style={{ fontFamily: 'var(--font-frank)', color: 'rgba(240,236,229,0.75)' }}
            >
              {lang === 'he' ? current.textHe : current.textEn}
            </p>
            <footer className="flex items-center gap-4">
              <div className="h-px w-8" style={{ background: 'rgba(198,169,80,0.3)' }} />
              <div>
                <cite className="not-italic font-bold text-base" style={{ color: '#F0ECE5', fontFamily: 'var(--font-frank)' }}>
                  {lang === 'he' ? current.nameHe : current.nameEn}
                </cite>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs" style={{ color: 'rgba(240,236,229,0.3)' }}>{current.date}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: current.rating }).map((_, j) => (
                      <Star key={j} size={12} fill="var(--color-primary-400)" style={{ color: 'var(--color-primary-400)' }} />
                    ))}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </motion.div>

        {/* Small carousel thumbnails */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-2">
                <button
                  onClick={() => emblaApi?.scrollTo(i)}
                  className="w-full text-start py-4 px-5 rounded-xl transition-all duration-300 cursor-pointer"
                  style={{
                    background: i === selectedIndex ? 'rgba(198,169,80,0.04)' : 'transparent',
                    borderBottom: i === selectedIndex
                      ? '2px solid var(--color-primary-400)'
                      : '2px solid transparent',
                  }}
                >
                  <p className="text-xs line-clamp-2 mb-2" style={{
                    color: i === selectedIndex ? 'rgba(240,236,229,0.6)' : 'rgba(240,236,229,0.25)',
                  }}>
                    {lang === 'he' ? testimonial.textHe : testimonial.textEn}
                  </p>
                  <p className="text-xs font-bold" style={{
                    color: i === selectedIndex ? 'var(--color-primary-400)' : 'rgba(240,236,229,0.3)',
                  }}>
                    {lang === 'he' ? testimonial.nameHe : testimonial.nameEn}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.15), transparent)' }} />
    </section>
  )
}
