'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import {
  PHONE_NUMBER,
  PHONE_TEL,
  WHATSAPP_LINK,
  CALENDLY_LINK,
  EMAIL,
  SOCIAL,
} from '@/lib/constants'

export default function Footer() {
  const { t, isRTL } = useLanguage()
  const year = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/practice-areas', label: t.nav.practiceAreas },
    { href: '/articles', label: t.nav.articles },
    { href: '/contact', label: t.nav.contact },
  ]

  const practiceLinks = [
    { href: '/practice-areas/intergenerational-transfer', label: t.areas.intergenerational.title },
    { href: '/practice-areas/wills', label: t.areas.wills.title },
    { href: '/practice-areas/real-estate-tax', label: t.areas.realEstateTax.title },
    { href: '/practice-areas/power-of-attorney', label: t.areas.poa.title },
    { href: '/practice-areas/prenuptial', label: t.areas.prenuptial.title },
    { href: '/practice-areas/guardianship', label: t.areas.guardianship.title },
  ]

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-paper-warm)',
        borderTop: '1px solid var(--color-rule-strong)',
      }}
    >
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span
                className="text-xl font-bold tracking-tight"
                style={{
                  fontFamily: 'var(--font-frank)',
                  color: 'var(--color-ink)',
                }}
              >
                {isRTL ? 'ארנסט' : 'Ernst'}
              </span>
              <span style={{ color: 'var(--color-accent)' }}>.</span>
              <span
                className="text-[0.7rem] tracking-[0.28em] uppercase"
                style={{ color: 'var(--color-ink-mid)' }}
              >
                {isRTL ? 'משרד עורכי דין' : 'Law Office'}
              </span>
            </Link>
            <p
              className="mt-5 text-sm max-w-sm"
              style={{ color: 'var(--color-ink-mid)', lineHeight: 1.65 }}
            >
              {t.footer.tagline}
            </p>
            <p
              className="mt-4 text-xs tracking-wider"
              style={{ color: 'var(--color-ink-soft)' }}
            >
              Est. 1979 · {isRTL ? 'ירושלים, עין צורים, רמת גן' : 'Jerusalem · Ein Tzurim · Ramat Gan'}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3
              className="text-[0.7rem] tracking-[0.22em] uppercase mb-5"
              style={{ color: 'var(--color-ink-soft)', fontWeight: 600 }}
            >
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--color-ink-body)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice areas */}
          <div className="md:col-span-3">
            <h3
              className="text-[0.7rem] tracking-[0.22em] uppercase mb-5"
              style={{ color: 'var(--color-ink-soft)', fontWeight: 600 }}
            >
              {t.nav.practiceAreas}
            </h3>
            <ul className="space-y-2.5">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--color-ink-body)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3
              className="text-[0.7rem] tracking-[0.22em] uppercase mb-5"
              style={{ color: 'var(--color-ink-soft)', fontWeight: 600 }}
            >
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_TEL}
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-ink)' }}
                  dir="ltr"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-ink-body)' }}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors"
                  style={{ color: 'var(--color-ink-body)' }}
                >
                  {isRTL ? 'קביעת פגישה אונליין' : 'Book Online'}
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-7 flex items-center gap-4">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider transition-colors"
                style={{ color: 'var(--color-ink-mid)' }}
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider transition-colors"
                style={{ color: 'var(--color-ink-mid)' }}
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={SOCIAL.waze}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider transition-colors"
                style={{ color: 'var(--color-ink-mid)' }}
                aria-label="Waze"
              >
                Waze
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--color-rule)' }}>
        <div className="section-container py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-xs" style={{ color: 'var(--color-ink-soft)' }}>
            © {year} {t.footer.firmName}. {t.footer.rights}.
          </p>
          <p
            className="text-xs max-w-2xl"
            style={{ color: 'var(--color-ink-soft)' }}
          >
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
