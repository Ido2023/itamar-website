'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Clock, PhoneCall, Home, Sparkles, Award, UserCheck } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const icons = [Clock, PhoneCall, Home, Sparkles, Award, UserCheck]

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="dot-pattern" />

      <div className="section-container relative z-10">
        <SectionHeading title={t.why.sectionTitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.why.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div
                  className="flex gap-4 p-5 rounded-xl transition-all duration-500 group relative overflow-hidden"
                  style={{ border: '1px solid rgba(198,169,80,0.06)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(15,15,26,0.8)'
                    e.currentTarget.style.borderColor = 'rgba(198,169,80,0.15)'
                    e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(0,0,0,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.borderColor = 'rgba(198,169,80,0.06)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(198,169,80,0.1), rgba(198,169,80,0.03))',
                      border: '1px solid rgba(198,169,80,0.1)',
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--color-primary-400)' }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-cream-50 mb-1" style={{ fontFamily: 'var(--font-frank)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(250,248,240,0.4)' }}>
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
