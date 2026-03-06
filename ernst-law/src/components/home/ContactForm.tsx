'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Send, CheckCircle, Calendar } from 'lucide-react'
import { PHONE_TEL, PHONE_NUMBER, WHATSAPP_LINK, CALENDLY_LINK } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface FormData {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const { t, isRTL } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const subject = encodeURIComponent(`פנייה מהאתר: ${data.subject}`)
      const body = encodeURIComponent(
        `שם: ${data.name}\nטלפון: ${data.phone}\nמייל: ${data.email}\nנושא: ${data.subject}\n\n${data.message}`
      )
      window.location.href = `mailto:office@ernstlaw.co.il?subject=${subject}&body=${body}`
      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 6000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputBaseStyle: React.CSSProperties = {
    backgroundColor: 'rgba(8,8,15,0.8)',
    border: '1px solid rgba(198,169,80,0.08)',
    color: 'var(--color-cream-50)',
    borderRadius: '0.75rem',
    padding: '0.875rem 1rem',
    width: '100%',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="contact">
      <div className="dot-pattern" />

      <div className="section-container relative z-10">
        <SectionHeading title={t.contact.sectionTitle} subtitle={t.contact.sectionSubtitle} />

        {/* Quick-action buttons */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl transition-all duration-400 group"
              style={{
                background: 'linear-gradient(135deg, rgba(198,169,80,0.08), rgba(198,169,80,0.03))',
                border: '1px solid rgba(198,169,80,0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,169,80,0.35)'
                e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(198,169,80,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(198,169,80,0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{
                background: 'linear-gradient(135deg, rgba(198,169,80,0.15), rgba(198,169,80,0.05))',
                border: '1px solid rgba(198,169,80,0.12)',
              }}>
                <Calendar size={20} style={{ color: 'var(--color-primary-400)' }} />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: '#F0ECE5', fontFamily: 'var(--font-frank)' }}>
                  {isRTL ? 'קביעת פגישה' : 'Book Meeting'}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(198,169,80,0.5)' }}>
                  {isRTL ? 'בחרו זמן שנוח לכם' : 'Choose a convenient time'}
                </p>
              </div>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl transition-all duration-400 group"
              style={{
                background: 'linear-gradient(135deg, rgba(34,197,94,0.06), rgba(34,197,94,0.02))',
                border: '1px solid rgba(34,197,94,0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'
                e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(34,197,94,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" style={{
                background: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.04))',
                border: '1px solid rgba(34,197,94,0.1)',
              }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#4ade80">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.359 0-4.554-.674-6.418-1.837l-.447-.27-2.956.991.991-2.956-.27-.447A9.935 9.935 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: '#F0ECE5', fontFamily: 'var(--font-frank)' }}>
                  WhatsApp
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(74,222,128,0.5)' }}>
                  {isRTL ? 'תגובה מהירה' : 'Quick response'}
                </p>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10 max-w-2xl mx-auto">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, rgba(198,169,80,0.15), transparent)' }} />
          <span className="text-xs tracking-wider" style={{ color: 'rgba(198,169,80,0.35)', fontFamily: 'var(--font-frank)' }}>
            {isRTL ? 'או השאירו פרטים וניצור קשר' : 'Or leave your details'}
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(198,169,80,0.15), transparent)' }} />
        </div>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="premium-card">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle size={48} style={{ color: '#4ade80' }} className="mb-4" />
                    <p className="text-lg font-medium text-cream-50">{t.contact.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        {...register('name', { required: true })}
                        placeholder={t.contact.form.name}
                        style={{
                          ...inputBaseStyle,
                          borderColor: errors.name ? 'rgba(239,68,68,0.5)' : 'rgba(198,169,80,0.08)',
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.4)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(198,169,80,0.05)' }}
                        onBlur={(e) => { if (!errors.name) { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.08)'; e.currentTarget.style.boxShadow = 'none' } }}
                      />
                      <input
                        {...register('phone', { required: true })}
                        placeholder={t.contact.form.phone}
                        type="tel"
                        dir="ltr"
                        style={{
                          ...inputBaseStyle,
                          borderColor: errors.phone ? 'rgba(239,68,68,0.5)' : 'rgba(198,169,80,0.08)',
                          textAlign: isRTL ? 'right' : 'left',
                        }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.4)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(198,169,80,0.05)' }}
                        onBlur={(e) => { if (!errors.phone) { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.08)'; e.currentTarget.style.boxShadow = 'none' } }}
                      />
                    </div>

                    <input
                      {...register('email')}
                      placeholder={t.contact.form.email}
                      type="email"
                      dir="ltr"
                      style={{
                        ...inputBaseStyle,
                        textAlign: isRTL ? 'right' : 'left',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.4)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(198,169,80,0.05)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                    />

                    <select
                      {...register('subject', { required: true })}
                      style={{
                        ...inputBaseStyle,
                        borderColor: errors.subject ? 'rgba(239,68,68,0.5)' : 'rgba(198,169,80,0.08)',
                        appearance: 'none',
                        cursor: 'pointer',
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>{t.contact.form.subject}</option>
                      {t.contact.form.subjects.map((subject, i) => (
                        <option key={i} value={subject} style={{ backgroundColor: '#0a0f1e' }}>
                          {subject}
                        </option>
                      ))}
                    </select>

                    <textarea
                      {...register('message')}
                      placeholder={t.contact.form.message}
                      rows={4}
                      style={{
                        ...inputBaseStyle,
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.4)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(198,169,80,0.05)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-premium w-full text-base py-4"
                      style={{ opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      <Send size={18} />
                      {isSubmitting ? (isRTL ? 'שולח...' : 'Sending...') : t.contact.form.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {t.contact.offices.map((office, i) => (
                <div key={i} className="premium-card">
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-md mb-2.5 inline-block tracking-wider uppercase" style={{
                    background: 'linear-gradient(135deg, rgba(198,169,80,0.1), rgba(198,169,80,0.04))',
                    color: 'var(--color-primary-400)',
                    border: '1px solid rgba(198,169,80,0.1)',
                  }}>
                    {office.type}
                  </span>
                  <h3 className="font-bold text-cream-50 mb-1" style={{ fontFamily: 'var(--font-frank)' }}>
                    {office.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(250,248,240,0.4)' }}>
                    <MapPin size={14} style={{ color: 'var(--color-primary-400)', opacity: 0.6 }} />
                    <span>{office.address}</span>
                  </div>
                </div>
              ))}

              <div className="space-y-2.5">
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300"
                  style={{ border: '1px solid rgba(198,169,80,0.1)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.25)'; e.currentTarget.style.backgroundColor = 'rgba(198,169,80,0.03)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.1)'; e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  <Phone size={16} style={{ color: 'var(--color-primary-400)' }} />
                  <span style={{ color: 'rgba(250,248,240,0.6)' }} className="text-sm" dir="ltr">{PHONE_NUMBER}</span>
                </a>
                <a
                  href="mailto:office@ernstlaw.co.il"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300"
                  style={{ border: '1px solid rgba(250,248,240,0.04)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(198,169,80,0.15)'; e.currentTarget.style.backgroundColor = 'rgba(198,169,80,0.03)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(250,248,240,0.04)'; e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  <Mail size={16} style={{ color: 'var(--color-primary-400)' }} />
                  <span style={{ color: 'rgba(250,248,240,0.6)' }} className="text-sm">office@ernstlaw.co.il</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
