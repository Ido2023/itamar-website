'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { useForm } from 'react-hook-form'
import { Check } from 'lucide-react'
import {
  PHONE_TEL,
  PHONE_NUMBER,
  EMAIL,
  WHATSAPP_LINK,
  CALENDLY_LINK,
} from '@/lib/constants'
import SectionFade from '@/components/ui/SectionFade'

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const subject = encodeURIComponent(
        (isRTL ? 'פנייה מהאתר: ' : 'Inquiry: ') + data.subject
      )
      const body = encodeURIComponent(
        [
          (isRTL ? 'שם: ' : 'Name: ') + data.name,
          (isRTL ? 'טלפון: ' : 'Phone: ') + data.phone,
          (isRTL ? 'מייל: ' : 'Email: ') + (data.email || '—'),
          (isRTL ? 'נושא: ' : 'Subject: ') + data.subject,
          '',
          data.message,
        ].join('\n')
      )
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 6000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionFade
      id="contact"
      yOffset={32}
    >
      <div style={{ borderTop: '1px solid var(--color-rule)' }} />

      <div className="section-container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="section-num">VII</span>
              <span className="eyebrow">
                {isRTL ? 'צרו קשר' : 'Contact'}
              </span>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-frank)',
                color: 'var(--color-ink)',
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.015em',
              }}
            >
              {isRTL ? 'נשמח לשמוע מכם.' : 'We&rsquo;d love to hear from you.'}
            </h2>
            <p
              className="mt-5 text-base md:text-lg max-w-2xl"
              style={{ color: 'var(--color-ink-mid)', lineHeight: 1.7 }}
            >
              {t.contact.sectionSubtitle}
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
          style={{ borderTop: '1px solid var(--color-rule)' }}
        >
          {/* Form */}
          <div className="lg:col-span-7 pt-12">
            {isSubmitted ? (
              <div
                className="flex flex-col items-start gap-4 py-16"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    border: '1px solid var(--color-accent)',
                    color: 'var(--color-accent)',
                  }}
                >
                  <Check size={20} />
                </div>
                <p
                  className="text-xl"
                  style={{
                    fontFamily: 'var(--font-frank)',
                    color: 'var(--color-ink)',
                  }}
                >
                  {t.contact.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FieldLabel label={t.contact.form.name} required>
                    <input
                      {...register('name', { required: true })}
                      placeholder={t.contact.form.name}
                      className="input-field"
                      style={{
                        borderColor: errors.name
                          ? 'var(--color-accent)'
                          : 'var(--color-rule-strong)',
                      }}
                    />
                  </FieldLabel>
                  <FieldLabel label={t.contact.form.phone} required>
                    <input
                      {...register('phone', { required: true })}
                      placeholder={t.contact.form.phone}
                      type="tel"
                      dir="ltr"
                      className="input-field"
                      style={{
                        borderColor: errors.phone
                          ? 'var(--color-accent)'
                          : 'var(--color-rule-strong)',
                        textAlign: isRTL ? 'right' : 'left',
                      }}
                    />
                  </FieldLabel>
                </div>

                <FieldLabel label={t.contact.form.email}>
                  <input
                    {...register('email')}
                    placeholder={t.contact.form.email}
                    type="email"
                    dir="ltr"
                    className="input-field"
                    style={{ textAlign: isRTL ? 'right' : 'left' }}
                  />
                </FieldLabel>

                <FieldLabel label={t.contact.form.subject} required>
                  <select
                    {...register('subject', { required: true })}
                    className="input-field"
                    style={{
                      borderColor: errors.subject
                        ? 'var(--color-accent)'
                        : 'var(--color-rule-strong)',
                      cursor: 'pointer',
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t.contact.form.subject}
                    </option>
                    {t.contact.form.subjects.map((subject, i) => (
                      <option key={i} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </FieldLabel>

                <FieldLabel label={t.contact.form.message}>
                  <textarea
                    {...register('message')}
                    placeholder={t.contact.form.message}
                    rows={5}
                    className="input-field"
                    style={{
                      resize: 'vertical',
                      minHeight: '140px',
                    }}
                  />
                </FieldLabel>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-ink"
                    style={{ opacity: isSubmitting ? 0.6 : 1 }}
                  >
                    {isSubmitting
                      ? isRTL
                        ? 'שולח…'
                        : 'Sending…'
                      : t.contact.form.submit}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div
            className="lg:col-span-5 pt-12 flex flex-col"
            style={{ borderInlineStart: '1px solid var(--color-rule)' }}
          >
            <div className="ps-0 lg:ps-12">
              <h3
                className="text-xs tracking-[0.22em] uppercase mb-6"
                style={{
                  color: 'var(--color-ink-mid)',
                  fontFamily: 'var(--font-heebo)',
                  fontWeight: 600,
                }}
              >
                {isRTL ? 'דרכי יצירת קשר' : 'Direct Channels'}
              </h3>
              <div className="space-y-5 mb-10">
                <ContactLine
                  label={isRTL ? 'טלפון' : 'Phone'}
                  value={PHONE_NUMBER}
                  href={PHONE_TEL}
                  ltr
                />
                <ContactLine
                  label={isRTL ? 'דוא"ל' : 'Email'}
                  value={EMAIL}
                  href={`mailto:${EMAIL}`}
                  ltr
                />
                <ContactLine
                  label="WhatsApp"
                  value={isRTL ? 'שלחו הודעה ←' : 'Send a message ←'}
                  href={WHATSAPP_LINK}
                  external
                />
                <ContactLine
                  label={isRTL ? 'קביעת פגישה' : 'Book Meeting'}
                  value={isRTL ? 'יומן אונליין ←' : 'Online calendar ←'}
                  href={CALENDLY_LINK}
                  external
                />
              </div>

              <h3
                className="text-xs tracking-[0.22em] uppercase mb-6"
                style={{
                  color: 'var(--color-ink-mid)',
                  fontFamily: 'var(--font-heebo)',
                  fontWeight: 600,
                }}
              >
                {isRTL ? 'משרדים' : 'Offices'}
              </h3>
              <ul className="space-y-4">
                {t.contact.offices.map((office, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-4 pb-3"
                    style={{ borderBottom: '1px solid var(--color-rule)' }}
                  >
                    <div>
                      <div
                        className="text-base"
                        style={{
                          fontFamily: 'var(--font-frank)',
                          color: 'var(--color-ink)',
                          fontWeight: 600,
                        }}
                      >
                        {office.name}
                      </div>
                      <div
                        className="text-sm mt-0.5"
                        style={{ color: 'var(--color-ink-mid)' }}
                      >
                        {office.address}
                      </div>
                    </div>
                    <span
                      className="text-[0.65rem] tracking-[0.18em] uppercase shrink-0"
                      style={{ color: 'var(--color-ink-soft)' }}
                    >
                      {office.type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionFade>
  )
}

function FieldLabel({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span
        className="block mb-1.5 text-xs tracking-wider"
        style={{ color: 'var(--color-ink-mid)' }}
      >
        {label}
        {required && (
          <span
            style={{ color: 'var(--color-accent)' }}
            className="ms-1"
          >
            *
          </span>
        )}
      </span>
      {children}
    </label>
  )
}

function ContactLine({
  label,
  value,
  href,
  ltr,
  external,
}: {
  label: string
  value: string
  href: string
  ltr?: boolean
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-baseline justify-between gap-4 pb-3"
      style={{ borderBottom: '1px solid var(--color-rule)' }}
    >
      <span
        className="text-xs tracking-wider"
        style={{ color: 'var(--color-ink-mid)' }}
      >
        {label}
      </span>
      <span
        className="text-base transition-colors group-hover:text-[color:var(--color-accent)]"
        style={{
          color: 'var(--color-ink)',
          fontFamily: 'var(--font-frank)',
          fontWeight: 500,
        }}
        dir={ltr ? 'ltr' : undefined}
      >
        {value}
      </span>
    </a>
  )
}
