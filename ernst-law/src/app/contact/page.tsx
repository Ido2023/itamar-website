'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import SectionFade from '@/components/ui/SectionFade'
import ContactForm from '@/components/home/ContactForm'

export default function ContactPage() {
  const { t, isRTL } = useLanguage()

  return (
    <PageWrapper>
      <SectionFade>
        <div className="section-container pt-16 md:pt-24 pb-10 md:pb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-num">·</span>
            <span className="eyebrow">
              {isRTL ? 'צרו קשר' : 'Contact'}
            </span>
          </div>
          <h1
            className="font-bold tracking-tight max-w-3xl"
            style={{
              fontFamily: 'var(--font-frank)',
              color: 'var(--color-ink)',
              fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            {t.contact.sectionTitle}.
          </h1>
          <p
            className="mt-7 text-base md:text-lg max-w-2xl"
            style={{ color: 'var(--color-ink-mid)', lineHeight: 1.7 }}
          >
            {t.contact.sectionSubtitle}
          </p>
        </div>
      </SectionFade>

      <ContactForm />
    </PageWrapper>
  )
}
