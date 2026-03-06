'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Building2, ShieldCheck, Lightbulb, PiggyBank } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const icons = [Building2, ShieldCheck, Lightbulb, PiggyBank]
const accents = [
  'rgba(198,169,80,0.12)',
  'rgba(100,180,255,0.10)',
  'rgba(168,136,78,0.12)',
  'rgba(80,200,120,0.10)',
]

export default function ValueProposition() {
  const { t } = useLanguage()

  const items = [
    { title: t.value.oneStopTitle, desc: t.value.oneStopDesc },
    { title: t.value.preventionTitle, desc: t.value.preventionDesc },
    { title: t.value.innovationTitle, desc: t.value.innovationDesc },
    { title: t.value.savingsTitle, desc: t.value.savingsDesc },
  ]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="dot-pattern" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 50% at 50% 0%, rgba(198,169,80,0.04) 0%, transparent 100%)',
      }} />

      <div className="section-container relative z-10">
        <SectionHeading title={t.value.sectionTitle} subtitle={t.value.sectionSubtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="premium-card text-center h-full group">
                  {/* Accent glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                    background: `radial-gradient(circle at 50% 0%, ${accents[i]} 0%, transparent 70%)`,
                  }} />

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 relative transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${accents[i]}, transparent)`,
                      border: '1px solid rgba(198,169,80,0.15)',
                    }}
                  >
                    <Icon size={24} style={{ color: 'var(--color-primary-400)' }} />
                  </div>
                  <h3 className="text-lg font-bold text-cream-50 mb-3 relative" style={{ fontFamily: 'var(--font-frank)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed relative" style={{ color: 'rgba(250,248,240,0.45)' }}>
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
