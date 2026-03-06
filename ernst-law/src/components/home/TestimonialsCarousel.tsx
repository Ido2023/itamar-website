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

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 6000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section className="py-20 md:py-28 relative" style={{ backgroundColor: 'var(--color-dark-950)' }}>
      <div className="section-container">
        <SectionHeading title={t.testimonials.sectionTitle} subtitle={t.testimonials.sectionSubtitle} />

        <ScrollReveal>
          <div className="relative">
            {/* Carousel */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {TESTIMONIALS.map((testimonial, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                  >
                    <div className="premium-card h-full flex flex-col">
                      {/* Quote icon */}
                      <Quote size={28} className="mb-4" style={{ color: 'var(--color-primary-400)', opacity: 0.3 }} />

                      {/* Text */}
                      <p className="text-sm text-cream-200/70 leading-relaxed flex-1 mb-6">
                        {lang === 'he' ? testimonial.textHe : testimonial.textEn}
                      </p>

                      {/* Footer */}
                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} className="pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-cream-50 text-sm">
                              {lang === 'he' ? testimonial.nameHe : testimonial.nameEn}
                            </p>
                            <p className="text-xs text-cream-200/40">{testimonial.date}</p>
                          </div>
                          <div className="flex gap-0.5">
                            {Array.from({ length: testimonial.rating }).map((_, j) => (
                              <Star key={j} size={14} fill="var(--color-primary-400)" style={{ color: 'var(--color-primary-400)' }} />
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
                backgroundColor: 'rgba(26,26,46,0.9)',
                border: '1px solid rgba(198,169,80,0.2)',
                color: 'var(--color-primary-400)',
              }}
              aria-label="Previous"
            >
              {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 -translate-y-1/2 -end-2 md:-end-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: 'rgba(26,26,46,0.9)',
                border: '1px solid rgba(198,169,80,0.2)',
                color: 'var(--color-primary-400)',
              }}
              aria-label="Next"
            >
              {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: i === selectedIndex ? 'var(--color-primary-400)' : 'rgba(198,169,80,0.2)',
                  width: i === selectedIndex ? '1.5rem' : '0.5rem',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
