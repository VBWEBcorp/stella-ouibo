import type { Metadata } from 'next'

import { CtaSection } from '@/components/sections/cta-section'
import { GalleryCarousel } from '@/components/sections/gallery-carousel'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesPreview } from '@/components/sections/services-preview'
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
      <ValuesMarquee />
      <StorySection />
      <ServicesPreview />
      <GalleryCarousel />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
