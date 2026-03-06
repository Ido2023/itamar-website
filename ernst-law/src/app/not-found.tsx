'use client'

import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F1923 50%, #16213E 100%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(200,169,110,0.05) 0%, transparent 70%)',
          }}
        />

        <div className="section-container relative z-10 text-center py-24">
          <div className="gold-divider mx-auto mb-6" />
          <p
            className="text-8xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-frank)',
              background: 'linear-gradient(135deg, #C8A96E 0%, #D4BC8A 50%, #A8884E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold text-cream-50 mb-4"
            style={{ fontFamily: 'var(--font-frank)' }}
          >
            הדף לא נמצא
          </h1>
          <p className="text-lg text-cream-200/60 mb-10 max-w-md mx-auto">
            הדף שחיפשתם אינו קיים. ייתכן שהכתובת שגויה או שהדף הועבר.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-premium">
              חזרה לדף הבית
            </Link>
            <Link href="/contact" className="btn-outline">
              צור קשר
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
