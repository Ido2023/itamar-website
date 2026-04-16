'use client'

import Header from './Header'
import Footer from './Footer'
import FloatingActions from '@/components/ui/FloatingActions'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
