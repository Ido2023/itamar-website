'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Building2, ShieldCheck, Lightbulb, PiggyBank } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const icons = [Building2, ShieldCheck, Lightbulb, PiggyBank]

export default function ValueProposition() {
  const { t } = useLanguage()

  const items = [
    { title: t.value.oneStopTitle, desc: t.value.oneStopDesc },
    { title: t.value.preventionTitle, desc: t.value.preventionDesc },
    { title: t.value.innovationTitle, desc: t.value.innovationDesc },
    { title: t.value.savingsTitle, desc: t.value.savingsDesc },
  ]

  return (
    <section className="py-20 md:py-28 relative">
      <div className="section-container">
        <SectionHeading title={t.value.sectionTitle} subtitle={t.value.sectionSubtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="premium-card text-center h-full">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{
                      backgroundColor: 'rgba(198,169,80,0.1)',
                      border: '1px solid rgba(198,169,80,0.2)',
                    }}
                  >
                    <Icon size={24} style={{ color: 'var(--color-primary-400)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-cream-50 mb-3" style={{ fontFamily: 'var(--font-frank)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream-200/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
