'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import ValueProposition from '@/components/home/ValueProposition'
import PracticeAreas from '@/components/home/PracticeAreas'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import VideoShowcase from '@/components/home/VideoShowcase'
import ArticlesPreview from '@/components/home/ArticlesPreview'
import CTASection from '@/components/home/CTASection'
import ContactForm from '@/components/home/ContactForm'
import FloatingActions from '@/components/ui/FloatingActions'
import CursorGlow from '@/components/ui/CursorGlow'

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <PracticeAreas />
        <WhyChooseUs />
        <TestimonialsCarousel />
        <VideoShowcase />
        <ArticlesPreview />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
