import type { Metadata } from 'next'

import { CtaSection } from '@/components/sections/cta-section'
import { HeroSection } from '@/components/sections/hero-section'
import { SelectedWork } from '@/components/sections/selected-work'
import { ServicesPreview } from '@/components/sections/services-preview'
import { SignatureSection } from '@/components/sections/signature-section'
import { StorySection } from '@/components/sections/story-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ValuesMarquee } from '@/components/sections/values-marquee'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SignatureSection />
      <SelectedWork />
      <ServicesPreview />
      <StorySection />
      <ValuesMarquee />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
