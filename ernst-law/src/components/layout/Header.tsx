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

  // Lock body scroll when mobile menu is open
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'py-5'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(15,15,26,0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-dark-900 font-bold text-xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(201,169,110,0.4)]"
                   style={{ fontFamily: 'var(--font-frank)', background: 'linear-gradient(to bottom right, var(--color-primary-400), var(--color-primary-600))' }}>
                א
              </div>
              <div className="hidden sm:block">
                <p className="text-lg text-cream-50 leading-tight" style={{ fontFamily: 'var(--font-frank)' }}>
                  {isRTL ? 'עו"ד איתמר ארנסט' : 'Adv. Itamar Ernst'}
                </p>
                <p className="text-xs" style={{ color: 'var(--color-primary-400)', opacity: 0.8 }}>
                  {isRTL ? 'מאז 1979' : 'Since 1979'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm rounded-lg transition-colors duration-300"
                  style={{ color: 'var(--color-cream-200)', opacity: 0.8 }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary-300)'; e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-cream-200)'; e.currentTarget.style.opacity = '0.8' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 cursor-pointer"
                style={{
                  border: '1px solid rgba(198,169,80,0.2)',
                  color: 'var(--color-primary-300)',
                }}
                aria-label="Toggle language"
              >
                <Globe size={16} />
                <span className="font-medium">
                  {lang === 'he' ? 'EN' : 'עב'}
                </span>
              </button>

              {/* Calendly CTA */}
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex btn-premium text-sm py-2.5 px-5"
              >
                <Calendar size={16} />
                <span>קבעו פגישה</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-lg text-cream-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24 px-6 pb-8 overflow-y-auto lg:hidden"
            style={{ backgroundColor: 'rgba(15,15,26,0.98)', backdropFilter: 'blur(16px)' }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-4 px-4 text-xl text-cream-100 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-frank)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
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
                קבעו פגישה
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
