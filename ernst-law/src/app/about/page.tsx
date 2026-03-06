'use client'

import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import ScrollReveal from '@/components/ui/ScrollReveal'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Award, Users, Star } from 'lucide-react'
import { CALENDLY_LINK } from '@/lib/constants'

export default function AboutPage() {
  const { t, isRTL } = useLanguage()

  const stats = [
    { icon: Award, value: 45, suffix: '+', label: t.about.stats.yearsLabel },
    { icon: Users, value: 1000, suffix: '+', label: t.about.stats.familiesLabel },
    { icon: Star, value: 5, suffix: '.0', label: t.about.stats.ratingLabel },
  ]

  return (
    <PageWrapper>
      {/* Hero section */}
      <section className="pt-16 pb-10 md:pt-24 md:pb-12 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(200,169,110,0.06) 0%, transparent 50%)' }}
        />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="gold-divider mb-4" />
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream-50 mb-4"
              style={{ fontFamily: 'var(--font-frank)' }}
            >
              {t.about.sectionTitle}
            </h1>
            <p className="text-lg max-w-xl" style={{ color: 'rgba(245,240,235,0.6)' }}>
              משרד בוטיק ואיכותי עם ניסיון של למעלה מ-45 שנה
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          {/* Two-column layout: portrait + text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 lg:mb-24">
            {/* Portrait image */}
            <ScrollReveal>
              <div className="relative">
                {/* Gold offset frame */}
                <div
                  className="absolute rounded-3xl"
                  style={{
                    inset: 0,
                    border: '1px solid rgba(200,169,110,0.2)',
                    transform: isRTL ? 'translate(-12px, 12px)' : 'translate(12px, 12px)',
                  }}
                />
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(200,169,110,0.12)',
                  }}
                >
                  <Image
                    src="/images/IMG_2089.png"
                    alt="עו״ד איתמר ארנסט"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                    style={{ display: 'block' }}
                  />
                  {/* Bottom overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24"
                    style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.6), transparent)' }}
                  />
                </div>

                {/* Stats cards overlapping bottom */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {stats.map((stat, i) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={i}
                        className="text-center p-3 rounded-xl"
                        style={{
                          background: 'rgba(26,38,52,0.8)',
                          border: '1px solid rgba(200,169,110,0.15)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <Icon size={16} className="mx-auto mb-1" style={{ color: 'var(--color-primary-400)' }} />
                        <p
                          className="text-lg font-bold leading-none"
                          style={{ fontFamily: 'var(--font-frank)', color: '#F5F0EB' }}
                        >
                          <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(200,169,110,0.7)' }}>
                          {stat.label}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Text content */}
            <div className="space-y-5">
              <ScrollReveal>
                <p className="text-lg text-cream-200/70 leading-relaxed">{t.about.p1}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-lg text-cream-200/70 leading-relaxed">{t.about.p2}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-cream-200/70 leading-relaxed">{t.about.p3}</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-lg text-cream-200/70 leading-relaxed">{t.about.p4}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium"
                  >
                    <Calendar size={18} />
                    {isRTL ? 'קבעו פגישת ייעוץ' : 'Schedule Consultation'}
                  </a>
                  <Link href="/practice-areas" className="btn-outline">
                    {t.nav.practiceAreas}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Second row — illustration + highlight text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Highlight text */}
            <ScrollReveal className={isRTL ? 'lg:order-1' : 'lg:order-2'}>
              <div>
                <div className="gold-divider mb-5" />
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-frank)', color: '#F5F0EB' }}
                >
                  גישה אישית, מקצועיות ללא פשרות
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(245,240,235,0.65)' }}>
                  משרד עו&quot;ד ארנסט הוקם בשנת 1979 ומאז ועד היום שמר על אותה גישה: ליווי אישי, הקשבה אמיתית
                  לצרכי הלקוח, ופתרונות יצירתיים ומותאמים לכל מקרה.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(245,240,235,0.65)' }}>
                  המשרד מתמחה בהעברה בין-דורית של נכסים — תחום הדורש שילוב ייחודי של מומחיות בדיני ירושה,
                  מיסוי מקרקעין, ייפוי כוח מתמשך ודיני משפחה תחת קורת גג אחת.
                </p>
                {/* Offices list */}
                <div className="space-y-3">
                  {[
                    { name: 'משרד ראשי', addr: 'קיבוץ עין צורים' },
                    { name: 'ירושלים', addr: 'הר חוצבים' },
                    { name: 'מרכז', addr: 'רמת גן — מתחם הבורסה' },
                  ].map((office, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ border: '1px solid rgba(200,169,110,0.12)' }}
                    >
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: 'var(--color-primary-400)' }}
                      />
                      <span className="text-sm font-semibold" style={{ color: '#F5F0EB' }}>{office.name}</span>
                      <span className="text-sm" style={{ color: 'rgba(245,240,235,0.5)' }}>—</span>
                      <span className="text-sm" style={{ color: 'rgba(245,240,235,0.6)' }}>{office.addr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Illustration image */}
            <ScrollReveal className={isRTL ? 'lg:order-2' : 'lg:order-1'}>
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(200,169,110,0.1)',
                  background: 'rgba(26,38,52,0.4)',
                }}
              >
                <Image
                  src="/images/IMG_2088.jpeg"
                  alt="עו״ד איתמר ארנסט — ספריית משפט"
                  width={580}
                  height={460}
                  className="w-full h-auto object-cover"
                  style={{ display: 'block' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
