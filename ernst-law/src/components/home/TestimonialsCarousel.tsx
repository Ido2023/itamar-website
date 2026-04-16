'use client'

import { useCallback, useEffect, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { TESTIMONIALS } from '@/lib/constants'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionFade from '@/components/ui/SectionFade'
import useEmblaCarousel from 'embla-carousel-react'

export default function TestimonialsCarousel() {
  const { lang, isRTL } = useLanguage()
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
    const interval = setInterval(() => emblaApi.scrollNext(), 7000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <SectionFade
      id="testimonials"
      yOffset={32}
    >
      <div style={{ borderTop: '1px solid var(--color-rule)' }} />

      <div className="section-container py-14 md:py-32">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="section-num">V</span>
              <span className="eyebrow">
                {isRTL ? 'לקוחות ממליצים' : 'Testimonials'}
              </span>
            </div>
          </div>
          <div className="lg:col-span-9 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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
                ? 'מה אומרים הלקוחות שלנו.'
                : 'What our clients say.'}
            </h2>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 flex items-center justify-center transition-colors"
                style={{
                  border: '1px solid var(--color-rule-strong)',
                  color: 'var(--color-ink)',
                }}
                aria-label="Previous"
              >
                {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 flex items-center justify-center transition-colors"
                style={{
                  border: '1px solid var(--color-rule-strong)',
                  color: 'var(--color-ink)',
                }}
                aria-label="Next"
              >
                {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={emblaRef}
          className="overflow-hidden"
          style={{ borderTop: '1px solid var(--color-rule)' }}
        >
          <div className="flex">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0">
                <blockquote className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-14 md:py-20">
                  <div className="lg:col-span-1 flex items-start">
                    <span
                      style={{
                        fontFamily: 'var(--font-frank)',
                        color: 'var(--color-accent)',
                        fontSize: '4.5rem',
                        lineHeight: 0.7,
                        fontWeight: 700,
                      }}
                    >
                      {isRTL ? '״' : '“'}
                    </span>
                  </div>
                  <div className="lg:col-span-11">
                    <p
                      className="font-medium tracking-tight"
                      style={{
                        fontFamily: 'var(--font-frank)',
                        color: 'var(--color-ink)',
                        fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)',
                        lineHeight: 1.4,
                        letterSpacing: '-0.005em',
                        fontWeight: 400,
                      }}
                    >
                      {lang === 'he' ? testimonial.textHe : testimonial.textEn}
                    </p>
                    <footer className="mt-10 flex items-center gap-4">
                      <div
                        className="h-px w-10"
                        style={{ background: 'var(--color-accent)' }}
                      />
                      <div>
                        <cite
                          className="not-italic text-base font-bold tracking-tight block"
                          style={{
                            color: 'var(--color-ink)',
                            fontFamily: 'var(--font-frank)',
                          }}
                        >
                          {lang === 'he' ? testimonial.nameHe : testimonial.nameEn}
                        </cite>
                        <span
                          className="text-xs tracking-wider mt-1 inline-block"
                          style={{ color: 'var(--color-ink-soft)' }}
                        >
                          {testimonial.date}
                        </span>
                      </div>
                    </footer>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex items-center gap-2 mt-2"
          style={{ borderTop: '1px solid var(--color-rule)' }}
        >
          <div className="flex-1 flex items-center gap-2 pt-5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className="h-1 transition-all duration-500"
                style={{
                  width: i === selectedIndex ? '2.5rem' : '1rem',
                  backgroundColor:
                    i === selectedIndex
                      ? 'var(--color-accent)'
                      : 'var(--color-rule-strong)',
                }}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>
          <span
            className="text-xs tracking-wider pt-5"
            style={{ color: 'var(--color-ink-soft)' }}
          >
            {String(selectedIndex + 1).padStart(2, '0')} /{' '}
            {String(TESTIMONIALS.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </SectionFade>
  )
}
