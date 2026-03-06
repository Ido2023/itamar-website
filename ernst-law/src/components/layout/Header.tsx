'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Globe, Calendar } from 'lucide-react'
import { PHONE_TEL, CALENDLY_LINK } from '@/lib/constants'

export default function Header() {
  const { lang, t, toggleLanguage, isRTL } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [lang])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/practice-areas', label: t.nav.practiceAreas },
    { href: '/articles', label: t.nav.articles },
    { href: '/videos', label: t.nav.videos },
    { href: '/testimonials', label: t.nav.testimonials },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-2.5' : 'py-4'
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(8,8,15,0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(1.3)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(198,169,80,0.08)' : '1px solid transparent',
        }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(198,169,80,0.4)]"
                style={{
                  fontFamily: 'var(--font-frank)',
                  background: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600))',
                  color: 'var(--color-dark-950)',
                }}
              >
                א
              </div>
              <div className="hidden sm:block">
                <p className="text-base text-cream-50 leading-tight font-semibold tracking-tight" style={{ fontFamily: 'var(--font-frank)' }}>
                  {isRTL ? 'עו"ד איתמר ארנסט' : 'Adv. Itamar Ernst'}
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--color-primary-400)', opacity: 0.7 }}>
                  {isRTL ? 'מאז 1979' : 'Since 1979'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm rounded-lg transition-all duration-300 group"
                  style={{ color: 'rgba(250,248,240,0.6)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary-300)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(250,248,240,0.6)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-all duration-300 cursor-pointer"
                style={{
                  border: '1px solid rgba(198,169,80,0.15)',
                  color: 'var(--color-primary-300)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.35)'; e.currentTarget.style.backgroundColor = 'rgba(198,169,80,0.05)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.15)'; e.currentTarget.style.backgroundColor = 'transparent' }}
                aria-label="Toggle language"
              >
                <Globe size={14} />
                <span className="font-medium text-xs">
                  {lang === 'he' ? 'EN' : 'עב'}
                </span>
              </button>

              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex btn-premium text-xs py-2 px-4"
              >
                <Calendar size={14} />
                <span>{isRTL ? 'קבעו פגישה' : 'Book Meeting'}</span>
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-lg text-cream-200 cursor-pointer transition-colors"
                style={{ }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-20 px-6 pb-8 overflow-y-auto lg:hidden"
            style={{ backgroundColor: 'rgba(8,8,15,0.98)', backdropFilter: 'blur(24px)' }}
          >
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-4 px-4 text-lg text-cream-100 transition-colors duration-300 rounded-xl"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      borderBottom: '1px solid rgba(255,255,255,0.03)',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium w-full text-center text-lg py-4"
                onClick={() => setIsMobileOpen(false)}
              >
                <Calendar size={20} />
                {isRTL ? 'קבעו פגישה' : 'Book Meeting'}
              </a>
              <a
                href={PHONE_TEL}
                className="btn-outline w-full text-center text-base py-3"
                onClick={() => setIsMobileOpen(false)}
              >
                <Phone size={18} />
                {t.nav.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
