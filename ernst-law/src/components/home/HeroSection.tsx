'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { CALENDLY_LINK, WHATSAPP_LINK } from '@/lib/constants'

export default function HeroSection() {
  const { t, isRTL } = useLanguage()
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Deep layered background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F1923 40%, #16213E 70%, #0F3460 100%)' }}
      />

      {/* Radial glow — top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 20%, rgba(200,169,110,0.08) 0%, transparent 60%)',
        }}
      />
      {/* Radial glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 80%, rgba(15,52,96,0.6) 0%, transparent 60%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage:
            'linear-gradient(rgba(200,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gold top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200,169,110,0.5), rgba(200,169,110,0.8), rgba(200,169,110,0.5), transparent)' }}
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-12, 12, -12], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 hidden lg:block"
        style={{ [isRTL ? 'left' : 'right']: '2%', opacity: 0.06 }}
      >
        <div
          className="w-40 h-40 rounded-3xl"
          style={{ border: '1px solid rgba(200,169,110,1)' }}
        />
      </motion.div>
      <motion.div
        animate={{ y: [8, -8, 8], rotate: [0, -6, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 hidden lg:block"
        style={{ [isRTL ? 'right' : 'left']: '1%', opacity: 0.04 }}
      >
        <div
          className="w-28 h-28 rounded-full"
          style={{ border: '1px solid rgba(200,169,110,1)' }}
        />
      </motion.div>

      {/* Main content */}
      <div className="section-container relative z-10 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column — Text */}
          <div className={isRTL ? 'lg:order-1' : 'lg:order-2'}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                backgroundColor: 'rgba(200,169,110,0.1)',
                border: '1px solid rgba(200,169,110,0.25)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'var(--color-primary-400)' }}
              />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-primary-300)' }}>
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold leading-[1.05] mb-4"
              style={{ fontFamily: 'var(--font-frank)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              <span style={{ color: '#F5F0EB' }}>{t.hero.title}</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #C8A96E 0%, #D4BC8A 50%, #A8884E 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t.hero.titleHighlight}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl mb-4 font-medium"
              style={{ fontFamily: 'var(--font-frank)', color: 'rgba(212,188,138,0.85)' }}
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base max-w-lg mb-8 leading-relaxed"
              style={{ color: 'rgba(245,240,235,0.65)' }}
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              {/* Primary — Calendly */}
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium text-base sm:text-lg"
              >
                <Calendar size={20} />
                {t.hero.cta}
              </a>
              {/* Secondary — Practice areas */}
              <Link href="/practice-areas" className="btn-outline text-base sm:text-lg">
                {t.hero.ctaSecondary}
                <Arrow size={18} />
              </Link>
            </motion.div>

            {/* Since badge + WhatsApp inline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-10" style={{ backgroundColor: 'rgba(200,169,110,0.3)' }} />
                <span
                  className="text-sm tracking-widest"
                  style={{ fontFamily: 'var(--font-frank)', color: 'rgba(200,169,110,0.55)' }}
                >
                  {t.hero.since}
                </span>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300"
                style={{ color: '#4ade80' }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.359 0-4.554-.674-6.418-1.837l-.447-.27-2.956.991.991-2.956-.27-.447A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right column — Portrait image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: isRTL ? -40 : 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`relative hidden lg:flex justify-center ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {/* Glow ring behind image */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(200,169,110,0.15) 0%, transparent 70%)',
                transform: 'scale(1.1)',
              }}
            />
            {/* Gold border frame */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                border: '1px solid rgba(200,169,110,0.2)',
                transform: 'translate(12px, 12px)',
                borderRadius: '1.5rem',
              }}
            />
            {/* Image container */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: '1.5rem',
                border: '1px solid rgba(200,169,110,0.15)',
                maxWidth: '460px',
                width: '100%',
              }}
            >
              <Image
                src="/images/IMG_2089.png"
                alt="עו״ד איתמר ארנסט"
                width={460}
                height={560}
                className="w-full h-auto object-cover"
                style={{ display: 'block' }}
                priority
              />
              {/* Bottom overlay gradient */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{
                  background: 'linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 100%)',
                }}
              />
              {/* Name badge overlay */}
              <div
                className="absolute bottom-6 left-0 right-0 flex justify-center"
              >
                <div
                  className="px-5 py-2.5 rounded-xl text-center"
                  style={{
                    background: 'rgba(10,22,40,0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(200,169,110,0.25)',
                  }}
                >
                  <p
                    className="text-base font-bold"
                    style={{ fontFamily: 'var(--font-frank)', color: '#F5F0EB' }}
                  >
                    עו&quot;ד איתמר ארנסט
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(200,169,110,0.8)' }}>
                    משרד מוביל בתחומו
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1"
        style={{ color: 'rgba(200,169,110,0.4)' }}
      >
        <span className="text-xs tracking-widest" style={{ fontFamily: 'var(--font-frank)' }}>גלול</span>
        <ChevronDown size={16} />
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--color-dark-900), transparent)' }}
      />
    </section>
  )
}
