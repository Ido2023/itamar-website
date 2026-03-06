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
    align: 'center',
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
    <section className="py-28 md:py-36 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, var(--color-dark-950) 0%, rgba(10,12,22,1) 50%, var(--color-dark-950) 100%)',
      }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.3), transparent)',
      }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-12" style={{ background: 'var(--color-primary-400)' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'var(--color-primary-400)' }}>
              {isRTL ? 'המלצות' : 'Testimonials'}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
          >
            {t.testimonials.sectionTitle}
          </motion.h2>
        </div>

        {/* Featured quote — large */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12"
        >
          <div
            className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, rgba(12,12,22,0.95), rgba(18,18,32,0.8))',
              border: '1px solid rgba(198,169,80,0.1)',
            }}
          >
            {/* Large quote mark */}
            <span className="absolute top-6 font-bold pointer-events-none select-none" style={{
              [isRTL ? 'left' : 'right']: '2rem',
              fontSize: '10rem',
              lineHeight: 0.7,
              fontFamily: 'Georgia, serif',
              color: 'rgba(198,169,80,0.04)',
            }}>
              &ldquo;
            </span>

            <div className="relative z-10">
              <p
                className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl"
                style={{ color: 'rgba(240,236,229,0.7)', fontFamily: 'var(--font-frank)' }}
              >
                {lang === 'he' ? current.textHe : current.textEn}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-bold text-lg" style={{ color: '#F0ECE5', fontFamily: 'var(--font-frank)' }}>
                    {lang === 'he' ? current.nameHe : current.nameEn}
                  </p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(240,236,229,0.3)' }}>{current.date}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: current.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="var(--color-primary-400)" style={{ color: 'var(--color-primary-400)' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel — small cards as navigation */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {TESTIMONIALS.map((testimonial, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-2"
                >
                  <button
                    onClick={() => emblaApi?.scrollTo(i)}
                    className="w-full text-start p-5 rounded-xl transition-all duration-500 cursor-pointer"
                    style={{
                      background: i === selectedIndex
                        ? 'linear-gradient(145deg, rgba(198,169,80,0.08), rgba(198,169,80,0.03))'
                        : 'rgba(12,12,22,0.5)',
                      border: `1px solid ${i === selectedIndex ? 'rgba(198,169,80,0.25)' : 'rgba(198,169,80,0.05)'}`,
                    }}
                  >
                    <p className="text-sm line-clamp-2 mb-3" style={{
                      color: i === selectedIndex ? 'rgba(240,236,229,0.7)' : 'rgba(240,236,229,0.35)',
                    }}>
                      {lang === 'he' ? testimonial.textHe : testimonial.textEn}
                    </p>
                    <p className="text-xs font-bold" style={{
                      color: i === selectedIndex ? '#F0ECE5' : 'rgba(240,236,229,0.5)',
                    }}>
                      {lang === 'he' ? testimonial.nameHe : testimonial.nameEn}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{
                border: '1px solid rgba(198,169,80,0.15)',
                color: 'var(--color-primary-400)',
              }}
              aria-label="Previous"
            >
              {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{
                border: '1px solid rgba(198,169,80,0.15)',
                color: 'var(--color-primary-400)',
              }}
              aria-label="Next"
            >
              {isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
            <div className="flex gap-1.5 ms-2">
              {TESTIMONIALS.map((_, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{
                    width: i === selectedIndex ? '2rem' : '0.5rem',
                    backgroundColor: i === selectedIndex ? 'var(--color-primary-400)' : 'rgba(198,169,80,0.15)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.3), transparent)',
      }} />
    </section>
  )
}
