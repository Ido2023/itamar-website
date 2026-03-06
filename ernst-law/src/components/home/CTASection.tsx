'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Calendar, Phone } from 'lucide-react'
import { PHONE_TEL, PHONE_NUMBER, WHATSAPP_LINK, CALENDLY_LINK } from '@/lib/constants'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Layered background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(10,22,40,1) 0%, rgba(26,38,62,0.95) 50%, rgba(10,22,40,1) 100%)',
        }}
      />
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at center, rgba(200,169,110,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Decorative border top + bottom */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200,169,110,0.3), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200,169,110,0.2), transparent)' }}
      />

      <div className="section-container relative z-10 text-center">
        <ScrollReveal>
          <div className="gold-divider mx-auto mb-6" />

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream-50 mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-frank)' }}
          >
            {t.cta.title}
          </h2>
          <p className="text-lg text-cream-200/60 mb-10 max-w-xl mx-auto">
            {t.cta.subtitle}
          </p>

          {/* Three action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary — Calendly */}
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium text-base sm:text-lg w-full sm:w-auto justify-center"
            >
              <Calendar size={20} />
              {t.cta.calendly ?? 'קביעת פגישה אונליין'}
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-base transition-all duration-300 w-full sm:w-auto"
              style={{
                backgroundColor: 'rgba(34,197,94,0.12)',
                color: '#4ade80',
                border: '2px solid rgba(34,197,94,0.3)',
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.359 0-4.554-.674-6.418-1.837l-.447-.27-2.956.991.991-2.956-.27-.447A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              WhatsApp
            </a>

            {/* Phone */}
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-base transition-all duration-300 w-full sm:w-auto"
              style={{
                color: 'rgba(245,240,235,0.8)',
                border: '2px solid rgba(255,255,255,0.1)',
              }}
            >
              <Phone size={20} />
              <span dir="ltr">{PHONE_NUMBER}</span>
            </a>
          </div>

          <p className="text-xs mt-8" style={{ color: 'rgba(200,169,110,0.4)' }}>
            ✦ שיחת ייעוץ ראשונית ללא התחייבות ✦
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
