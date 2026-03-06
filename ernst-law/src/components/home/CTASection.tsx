'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Calendar, Phone } from 'lucide-react'
import { PHONE_TEL, PHONE_NUMBER, WHATSAPP_LINK, CALENDLY_LINK } from '@/lib/constants'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(160deg, rgba(5,5,16,1) 0%, rgba(15,20,35,0.98) 40%, rgba(20,28,50,0.95) 60%, rgba(5,5,16,1) 100%)',
      }} />

      {/* Animated gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
        width: '800px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(198,169,80,0.06) 0%, transparent 60%)',
        filter: 'blur(60px)',
      }} />

      {/* Grid pattern */}
      <div className="grid-pattern" />

      {/* Top + bottom dividers */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="section-container relative z-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, rgba(198,169,80,0.5), transparent)' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-primary-400)' }} />
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, rgba(198,169,80,0.5), transparent)' }} />
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream-50 mb-4 leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-frank)' }}
          >
            {t.cta.title}
          </h2>
          <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: 'rgba(250,248,240,0.4)' }}>
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium text-base sm:text-lg w-full sm:w-auto justify-center"
            >
              <Calendar size={20} />
              {t.cta.calendly ?? 'קביעת פגישה אונליין'}
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-base transition-all duration-400 w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.04))',
                color: '#4ade80',
                border: '1px solid rgba(34,197,94,0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(34,197,94,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.25)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.359 0-4.554-.674-6.418-1.837l-.447-.27-2.956.991.991-2.956-.27-.447A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              WhatsApp
            </a>

            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-base transition-all duration-400 w-full sm:w-auto"
              style={{
                color: 'rgba(250,248,240,0.7)',
                border: '1px solid rgba(250,248,240,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(250,248,240,0.2)'
                e.currentTarget.style.backgroundColor = 'rgba(250,248,240,0.03)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(250,248,240,0.08)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <Phone size={20} />
              <span dir="ltr">{PHONE_NUMBER}</span>
            </a>
          </div>

          <p className="text-xs mt-10 tracking-wider" style={{ color: 'rgba(198,169,80,0.3)' }}>
            שיחת ייעוץ ראשונית ללא התחייבות
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
