'use client'

import { useState } from 'react'
import PageWrapper from '@/components/layout/PageWrapper'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from 'lucide-react'
import { PHONE_NUMBER, WHATSAPP_LINK } from '@/lib/constants'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface FormData {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const { t, isRTL } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    console.log('Form data:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: 'rgba(26,26,46,0.6)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'var(--color-cream-50)',
    borderRadius: '0.75rem',
    padding: '0.875rem 1rem',
    width: '100%',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  return (
    <PageWrapper>
      <section className="py-16 md:py-24 relative">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(198,169,80,0.05) 0%, transparent 50%)' }}
        />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="gold-divider mb-4" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream-50 mb-4"
                style={{ fontFamily: 'var(--font-frank)' }}>
              {t.contact.sectionTitle}
            </h1>
            <p className="text-lg text-cream-200/60 max-w-2xl">
              {t.contact.sectionSubtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <div className="premium-card">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle size={48} style={{ color: '#22c55e' }} className="mb-4" />
                    <p className="text-lg font-medium text-cream-50">{t.contact.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        {...register('name', { required: true })}
                        placeholder={t.contact.form.name}
                        style={{
                          ...inputStyle,
                          borderColor: errors.name ? '#ef4444' : 'rgba(255,255,255,0.08)',
                        }}
                      />
                      <input
                        {...register('phone', { required: true })}
                        placeholder={t.contact.form.phone}
                        type="tel"
                        dir="ltr"
                        style={{
                          ...inputStyle,
                          borderColor: errors.phone ? '#ef4444' : 'rgba(255,255,255,0.08)',
                          textAlign: isRTL ? 'right' : 'left',
                        }}
                      />
                    </div>

                    <input
                      {...register('email')}
                      placeholder={t.contact.form.email}
                      type="email"
                      dir="ltr"
                      style={{
                        ...inputStyle,
                        textAlign: isRTL ? 'right' : 'left',
                      }}
                    />

                    <select
                      {...register('subject', { required: true })}
                      style={{
                        ...inputStyle,
                        borderColor: errors.subject ? '#ef4444' : 'rgba(255,255,255,0.08)',
                        appearance: 'none',
                        cursor: 'pointer',
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>{t.contact.form.subject}</option>
                      {t.contact.form.subjects.map((subject, i) => (
                        <option key={i} value={subject} style={{ backgroundColor: 'var(--color-dark-800)' }}>
                          {subject}
                        </option>
                      ))}
                    </select>

                    <textarea
                      {...register('message')}
                      placeholder={t.contact.form.message}
                      rows={6}
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        minHeight: '150px',
                      }}
                    />

                    <button type="submit" className="btn-premium w-full text-base py-4">
                      <Send size={18} />
                      {t.contact.form.submit}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Offices */}
              {t.contact.offices.map((office, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="premium-card">
                    <span
                      className="text-xs font-medium px-2 py-1 rounded-md mb-3 inline-block"
                      style={{
                        backgroundColor: 'rgba(198,169,80,0.1)',
                        color: 'var(--color-primary-400)',
                      }}
                    >
                      {office.type}
                    </span>
                    <h3 className="text-lg font-bold text-cream-50 mb-2" style={{ fontFamily: 'var(--font-frank)' }}>
                      {office.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-cream-200/55">
                      <MapPin size={14} style={{ color: 'var(--color-primary-400)' }} />
                      <span>{office.address}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Contact Methods */}
              <ScrollReveal delay={0.3}>
                <div className="space-y-3">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 premium-card"
                  >
                    <Phone size={20} style={{ color: 'var(--color-primary-400)' }} />
                    <div>
                      <p className="font-medium text-cream-50">{t.common.callUs}</p>
                      <p className="text-sm text-cream-200/60" dir="ltr">{PHONE_NUMBER}</p>
                    </div>
                  </a>
                  <a
                    href="mailto:office@ernstlaw.co.il"
                    className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 premium-card"
                  >
                    <Mail size={20} style={{ color: 'var(--color-primary-400)' }} />
                    <div>
                      <p className="font-medium text-cream-50">{isRTL ? 'דוא"ל' : 'Email'}</p>
                      <p className="text-sm text-cream-200/60">office@ernstlaw.co.il</p>
                    </div>
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(34,197,94,0.08)',
                      border: '1px solid rgba(34,197,94,0.2)',
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#22c55e">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                    <div>
                      <p className="font-medium" style={{ color: '#22c55e' }}>WhatsApp</p>
                      <p className="text-sm text-cream-200/60">{t.common.whatsapp}</p>
                    </div>
                  </a>
                </div>
              </ScrollReveal>

              {/* Hours */}
              <ScrollReveal delay={0.4}>
                <div className="premium-card">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={18} style={{ color: 'var(--color-primary-400)' }} />
                    <h3 className="font-bold text-cream-50" style={{ fontFamily: 'var(--font-frank)' }}>
                      {isRTL ? 'שעות פעילות' : 'Office Hours'}
                    </h3>
                  </div>
                  <div className="space-y-1 text-sm text-cream-200/55">
                    <p>{isRTL ? 'ראשון - חמישי: 09:00 - 18:00' : 'Sun - Thu: 09:00 - 18:00'}</p>
                    <p>{isRTL ? 'שישי: בתיאום מראש' : 'Fri: By appointment'}</p>
                    <p>{isRTL ? 'ניתן לתאם ביקורי בית' : 'Home visits available'}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
