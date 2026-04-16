'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { PHONE_TEL, PHONE_NUMBER, WHATSAPP_LINK, CALENDLY_LINK } from '@/lib/constants'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTASection() {
  const { isRTL } = useLanguage()
  const prefersReducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })

  const initial = prefersReducedMotion ? {} : { opacity: 0, y: 24 }
  const animate = inView ? { opacity: 1, y: 0 } : initial

  return (
    <section
      id="cta"
      ref={ref}
      style={{ backgroundColor: 'var(--color-ink-strong)' }}
    >
      <div className="section-container py-20 md:py-40">
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span
                className="text-[0.65rem] md:text-xs tracking-[0.22em] uppercase font-semibold"
                style={{ color: '#A88B7C' }}
              >
                {isRTL ? 'יצירת קשר' : 'Get in Touch'}
              </span>
              <div
                className="flex-1 max-w-[8rem] h-px"
                style={{ background: 'rgba(255,255,255,0.18)' }}
              />
            </div>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-frank)',
                color: 'var(--color-paper)',
                fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              {isRTL ? (
                <>
                  מוכנים להגן
                  <br />
                  על עתיד המשפחה?
                </>
              ) : (
                <>
                  Ready to protect
                  <br />
                  your family&rsquo;s future?
                </>
              )}
            </h2>
            <p
              className="mt-6 md:mt-7 text-base md:text-lg max-w-xl"
              style={{ color: 'rgba(245,241,232,0.65)', lineHeight: 1.65 }}
            >
              {isRTL
                ? 'תיאום שיחת ייעוץ ראשונית ללא התחייבות. השאירו פרטים — נחזור אליכם בתוך יום עסקים אחד.'
                : 'Schedule a free initial consultation. Leave your details — we will be in touch within one business day.'}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 transition-colors"
              style={{
                backgroundColor: 'var(--color-paper)',
                color: 'var(--color-ink)',
                border: '1px solid var(--color-paper)',
                borderRadius: '2px',
                fontFamily: 'var(--font-heebo)',
                fontWeight: 500,
                fontSize: '0.95rem',
              }}
            >
              <span>{isRTL ? 'קביעת פגישה אונליין' : 'Book Online'}</span>
              <span
                className="text-xs tracking-wider"
                style={{ color: 'var(--color-accent)' }}
              >
                ←
              </span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 transition-colors hover:bg-white/5"
              style={{
                color: 'var(--color-paper)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '2px',
                fontFamily: 'var(--font-heebo)',
                fontWeight: 500,
                fontSize: '0.95rem',
              }}
            >
              <span>WhatsApp</span>
              <span className="text-xs" style={{ color: 'rgba(245,241,232,0.6)' }}>
                {isRTL ? 'מענה מהיר' : 'Quick reply'}
              </span>
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 transition-colors hover:bg-white/5"
              style={{
                color: 'var(--color-paper)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '2px',
                fontFamily: 'var(--font-heebo)',
                fontWeight: 500,
                fontSize: '0.95rem',
              }}
            >
              <span>{isRTL ? 'התקשרו עכשיו' : 'Call Now'}</span>
              <span className="text-xs tracking-wider" style={{ color: 'rgba(245,241,232,0.6)' }} dir="ltr">
                {PHONE_NUMBER}
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
