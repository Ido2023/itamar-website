'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin, Calendar } from 'lucide-react'
import { PHONE_NUMBER, PHONE_TEL, WHATSAPP_LINK, CALENDLY_LINK } from '@/lib/constants'

export default function Footer() {
  const { t, isRTL } = useLanguage()

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/practice-areas', label: t.nav.practiceAreas },
    { href: '/articles', label: t.nav.articles },
    { href: '/videos', label: t.nav.videos },
    { href: '/testimonials', label: t.nav.testimonials },
    { href: '/contact', label: t.nav.contact },
  ]

  const practiceLinks = [
    { href: '/practice-areas/intergenerational-transfer', label: t.areas.intergenerational.title },
    { href: '/practice-areas/wills', label: t.areas.wills.title },
    { href: '/practice-areas/real-estate-tax', label: t.areas.realEstateTax.title },
    { href: '/practice-areas/power-of-attorney', label: t.areas.poa.title },
    { href: '/practice-areas/prenuptial', label: t.areas.prenuptial.title },
  ]

  return (
    <footer style={{ backgroundColor: 'var(--color-dark-950)' }}>
      {/* Gold accent line */}
      <div className="w-full h-[1px]" style={{ background: 'linear-gradient(to right, transparent, var(--color-primary-400), transparent)' }} />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Firm Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-dark-900 font-bold"
                   style={{ fontFamily: 'var(--font-frank)', background: 'linear-gradient(to bottom right, var(--color-primary-400), var(--color-primary-600))' }}>
                א
              </div>
              <div>
                <p className="font-bold text-cream-50" style={{ fontFamily: 'var(--font-frank)' }}>
                  {t.footer.firmName}
                </p>
              </div>
            </div>
            <p className="text-sm text-cream-200/50 mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                 style={{ border: '1px solid rgba(198,169,80,0.2)', color: 'var(--color-primary-400)' }}>
                <Facebook size={16} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                 style={{ border: '1px solid rgba(198,169,80,0.2)', color: 'var(--color-primary-400)' }}>
                <Youtube size={16} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                 style={{ border: '1px solid rgba(198,169,80,0.2)', color: 'var(--color-primary-400)' }}>
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-cream-50 mb-4" style={{ fontFamily: 'var(--font-frank)' }}>
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream-200/60 transition-colors duration-300 hover:text-primary-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h3 className="font-bold text-cream-50 mb-4" style={{ fontFamily: 'var(--font-frank)' }}>
              {t.nav.practiceAreas}
            </h3>
            <ul className="space-y-2">
              {practiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream-200/60 transition-colors duration-300 hover:text-primary-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-bold text-cream-50 mb-4" style={{ fontFamily: 'var(--font-frank)' }}>
              {t.footer.contactInfo}
            </h3>
            <div className="space-y-3">
              <a href={PHONE_TEL} className="flex items-center gap-3 text-sm text-cream-200/60 transition-colors duration-300 hover:text-primary-300">
                <Phone size={16} className="shrink-0" style={{ color: 'var(--color-primary-400)' }} />
                <span dir="ltr">{PHONE_NUMBER}</span>
              </a>
              <a href="mailto:office@ernstlaw.co.il" className="flex items-center gap-3 text-sm text-cream-200/60 transition-colors duration-300 hover:text-primary-300">
                <Mail size={16} className="shrink-0" style={{ color: 'var(--color-primary-400)' }} />
                <span>office@ernstlaw.co.il</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-cream-200/60">
                <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-primary-400)' }} />
                <span>{isRTL ? 'קיבוץ עין צורים | ירושלים | רמת גן' : 'Kibbutz Ein Tzurim | Jerusalem | Ramat Gan'}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(34,197,94,0.1)',
                  color: '#4ade80',
                  border: '1px solid rgba(34,197,94,0.3)',
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                {t.common.whatsapp}
              </a>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(200,169,110,0.08)',
                  color: 'var(--color-primary-400)',
                  border: '1px solid rgba(200,169,110,0.25)',
                }}
              >
                <Calendar size={15} />
                קבעו פגישה אונליין
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream-200/40">
              © {new Date().getFullYear()} {t.footer.firmName}. {t.footer.rights}.
            </p>
            <p className="text-xs text-cream-200/30 text-center md:text-start max-w-lg">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
