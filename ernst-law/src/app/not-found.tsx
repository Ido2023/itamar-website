'use client'

import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        className="min-h-screen flex items-center"
        style={{ backgroundColor: 'var(--color-paper)' }}
      >
        <div className="section-container py-32 md:py-44">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-6">
              <p
                className="font-bold tracking-tight"
                style={{
                  fontFamily: 'var(--font-frank)',
                  color: 'var(--color-ink-strong)',
                  fontSize: 'clamp(7rem, 18vw, 14rem)',
                  lineHeight: 0.85,
                  letterSpacing: '-0.04em',
                }}
              >
                404
              </p>
            </div>
            <div className="lg:col-span-6">
              <span className="eyebrow">
                הדף לא נמצא
              </span>
              <h1
                className="mt-7 font-bold tracking-tight"
                style={{
                  fontFamily: 'var(--font-frank)',
                  color: 'var(--color-ink)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.1,
                }}
              >
                הכתובת שחיפשתם<br />אינה קיימת.
              </h1>
              <p
                className="mt-5 text-base md:text-lg max-w-md"
                style={{ color: 'var(--color-ink-mid)', lineHeight: 1.7 }}
              >
                ייתכן שהקישור שגוי או שהדף הוסר. אפשר לחזור לדף הבית או ליצור איתנו קשר.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/" className="btn-ink">
                  חזרה לדף הבית
                </Link>
                <Link href="/contact" className="link-arrow">
                  צרו קשר
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
