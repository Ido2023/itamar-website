'use client'

import { useCallback, useEffect, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { TESTIMONIALS } from '@/lib/constants'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import useEmblaCarousel from 'embla-carousel-react'

export default function TestimonialsCarousel() {
  const { t, lang, isRTL } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState(0)

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

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--color-dark-950)' }}>
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="grid-pattern" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none" style={{
        background: 'radial-gradient(ellipse, rgba(198,169,80,0.03) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div className="section-container relative z-10">
        <SectionHeading title={t.testimonials.sectionTitle} subtitle={t.testimonials.sectionSubtitle} />

        <ScrollReveal>
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {TESTIMONIALS.map((testimonial, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2.5"
                  >
                    <div className="premium-card h-full flex flex-col">
                      <Quote size={24} className="mb-4" style={{ color: 'var(--color-primary-400)', opacity: 0.2 }} />
                      <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'rgba(250,248,240,0.55)' }}>
                        {lang === 'he' ? testimonial.textHe : testimonial.textEn}
                      </p>
                      <div className="pt-4" style={{ borderTop: '1px solid rgba(198,169,80,0.08)' }}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-cream-50 text-sm">
                              {lang === 'he' ? testimonial.nameHe : testimonial.nameEn}
                            </p>
                            <p className="text-xs" style={{ color: 'rgba(250,248,240,0.3)' }}>{testimonial.date}</p>
                          </div>
                          <div className="flex gap-0.5">
                            {Array.from({ length: testimonial.rating }).map((_, j) => (
                              <Star key={j} size={12} fill="var(--color-primary-400)" style={{ color: 'var(--color-primary-400)' }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -translate-y-1/2 -start-2 md:-start-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: 'rgba(8,8,15,0.9)',
                border: '1px solid rgba(198,169,80,0.15)',
                color: 'var(--color-primary-400)',
                backdropFilter: 'blur(8px)',
              }}
              aria-label="Previous"
            >
              {isRTL ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 -translate-y-1/2 -end-2 md:-end-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: 'rgba(8,8,15,0.9)',
                border: '1px solid rgba(198,169,80,0.15)',
                color: 'var(--color-primary-400)',
                backdropFilter: 'blur(8px)',
              }}
              aria-label="Next"
            >
              {isRTL ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className="h-1.5 rounded-full transition-all duration-500 cursor-pointer"
                style={{
                  backgroundColor: i === selectedIndex ? 'var(--color-primary-400)' : 'rgba(198,169,80,0.15)',
                  width: i === selectedIndex ? '2rem' : '0.375rem',
                  boxShadow: i === selectedIndex ? '0 0 10px rgba(198,169,80,0.3)' : 'none',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
