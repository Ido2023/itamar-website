'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import PracticeAreas from '@/components/home/PracticeAreas'
import ArticlesPreview from '@/components/home/ArticlesPreview'
import ValueProposition from '@/components/home/ValueProposition'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import VideoShowcase from '@/components/home/VideoShowcase'
import CTASection from '@/components/home/CTASection'
import ContactForm from '@/components/home/ContactForm'
import FloatingActions from '@/components/ui/FloatingActions'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PracticeAreas />
        <ArticlesPreview />
        <ValueProposition />
        <WhyChooseUs />
        <TestimonialsCarousel />
        <VideoShowcase />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
