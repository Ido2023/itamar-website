'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Clock, PhoneCall, Home, Sparkles, Award, UserCheck } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const icons = [Clock, PhoneCall, Home, Sparkles, Award, UserCheck]

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 relative">
      <div className="section-container">
        <SectionHeading title={t.why.sectionTitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-4 p-6 rounded-xl transition-all duration-300"
                     style={{ border: '1px solid rgba(255,255,255,0.03)' }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.backgroundColor = 'rgba(26,26,46,0.5)'
                       e.currentTarget.style.borderColor = 'rgba(198,169,80,0.15)'
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.backgroundColor = 'transparent'
                       e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)'
                     }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(198,169,80,0.08)' }}
                  >
                    <Icon size={22} style={{ color: 'var(--color-primary-400)' }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-cream-50 mb-1" style={{ fontFamily: 'var(--font-frank)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-cream-200/55 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
