'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Calendar, Phone } from 'lucide-react'
import { PHONE_TEL, PHONE_NUMBER, WHATSAPP_LINK, CALENDLY_LINK } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTASection() {
  const { t, isRTL } = useLanguage()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-32 md:py-44 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(160deg, rgba(5,5,16,1) 0%, rgba(15,20,35,0.98) 40%, rgba(20,28,50,0.95) 60%, rgba(5,5,16,1) 100%)',
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(198,169,80,0.05) 0%, transparent 60%)',
        filter: 'blur(80px)',
      }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(15,52,96,0.3) 0%, transparent 60%)',
        filter: 'blur(80px)',
      }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(198,169,80,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(198,169,80,0.8) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.4), transparent)',
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, rgba(198,169,80,0.3), transparent)',
      }} />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-16" style={{ background: 'linear-gradient(to left, rgba(198,169,80,0.5), transparent)' }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-primary-400)' }} />
              <div className="h-px w-16" style={{ background: 'linear-gradient(to right, rgba(198,169,80,0.5), transparent)' }} />
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-frank)', color: '#F0ECE5' }}
            >
              {t.cta.title}
            </h2>
            <p className="text-lg mb-14" style={{ color: 'rgba(240,236,229,0.4)' }}>
              {t.cta.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
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
                background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.03))',
                color: '#4ade80',
                border: '1px solid rgba(34,197,94,0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)'
                e.currentTarget.style.boxShadow = '0 0 40px rgba(34,197,94,0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
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
                color: 'rgba(240,236,229,0.6)',
                border: '1px solid rgba(240,236,229,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(240,236,229,0.15)'
                e.currentTarget.style.backgroundColor = 'rgba(240,236,229,0.03)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(240,236,229,0.06)'
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Phone size={20} />
              <span dir="ltr">{PHONE_NUMBER}</span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs mt-12 tracking-wider"
            style={{ color: 'rgba(198,169,80,0.25)' }}
          >
            {isRTL ? 'שיחת ייעוץ ראשונית ללא התחייבות' : 'Initial consultation with no obligation'}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
