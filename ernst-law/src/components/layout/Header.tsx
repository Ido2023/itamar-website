'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { CALENDLY_LINK, PHONE_TEL, PHONE_NUMBER } from '@/lib/constants'

export default function Header() {
  const { lang, t, toggleLanguage, isRTL } = useLanguage()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsMobileOpen(false) }, [pathname, lang])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/practice-areas', label: t.nav.practiceAreas },
    { href: '/articles', label: t.nav.articles },
    { href: '/contact', label: t.nav.contact },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,padding] duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(245,241,232,0.92)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px) saturate(1.1)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px) saturate(1.1)' : 'none',
          borderBottom: isScrolled
            ? '1px solid var(--color-rule)'
            : '1px solid transparent',
          paddingBlock: isScrolled ? '0.625rem' : '1.125rem',
        }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between gap-6">
            {/* Logo / wordmark */}
            <Link href="/" className="flex items-baseline gap-3 group shrink-0">
              <span
                className="text-xl md:text-[1.4rem] font-bold tracking-tight transition-colors"
                style={{
                  fontFamily: 'var(--font-frank)',
                  color: 'var(--color-ink)',
                }}
              >
                {isRTL ? 'ארנסט' : 'Ernst'}
                <span
                  className="mx-1.5 inline-block"
                  style={{ color: 'var(--color-accent)' }}
                >
                  .
                </span>
                <span
                  className="text-[0.7rem] tracking-[0.28em] uppercase font-medium"
                  style={{
                    color: 'var(--color-ink-mid)',
                    fontFamily: 'var(--font-heebo)',
                  }}
                >
                  {isRTL ? 'משרד עורכי דין' : 'Law Office'}
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm transition-colors duration-300 py-1.5"
                  style={{
                    color: isActive(link.href)
                      ? 'var(--color-ink)'
                      : 'var(--color-ink-mid)',
                    fontWeight: isActive(link.href) ? 500 : 400,
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 inset-x-0 h-px transition-transform origin-center duration-300"
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      transform: isActive(link.href) ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                </Link>
              ))}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Phone (desktop) */}
              <a
                href={PHONE_TEL}
                className="hidden md:inline-flex text-xs tracking-wider"
                style={{ color: 'var(--color-ink-mid)' }}
                dir="ltr"
              >
                {PHONE_NUMBER}
              </a>

              {/* Lang toggle */}
              <button
                onClick={toggleLanguage}
                className="text-xs font-medium tracking-wider px-2 py-1 border-b border-transparent hover:border-current transition-colors"
                style={{ color: 'var(--color-ink-mid)' }}
                aria-label="Toggle language"
              >
                {lang === 'he' ? 'EN' : 'עב'}
              </button>

              {/* CTA */}
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex btn-ink text-[0.8rem] py-2 px-4"
              >
                {isRTL ? 'קביעת פגישה' : 'Book Meeting'}
              </a>

              {/* Mobile menu */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-1.5 -mr-1.5"
                style={{ color: 'var(--color-ink)' }}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 pt-20 px-6 pb-10 overflow-y-auto lg:hidden"
            style={{ backgroundColor: 'var(--color-paper)' }}
          >
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{ borderBottom: '1px solid var(--color-rule)' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-5 text-2xl"
                    style={{
                      fontFamily: 'var(--font-frank)',
                      color: isActive(link.href)
                        ? 'var(--color-accent)'
                        : 'var(--color-ink)',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="btn-ink w-full"
              >
                {isRTL ? 'קביעת פגישה אונליין' : 'Book Meeting Online'}
              </a>
              <a
                href={PHONE_TEL}
                className="btn-ghost w-full"
                onClick={() => setIsMobileOpen(false)}
              >
                <span dir="ltr">{PHONE_NUMBER}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
