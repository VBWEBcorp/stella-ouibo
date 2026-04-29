import type { Metadata } from 'next'

import { ServicesContent } from './services-content'
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from '@/components/seo/json-ld'

const description =
  'Red carpet, editorial, fashion week, VIP & private events. Services de maquillage et coiffure de Claudia Stella, Paris & worldwide.'

const services = [
  { title: 'Red Carpet & Premieres', desc: 'Préparation VIP en hôtels de luxe pour le Festival de Cannes, premières et galas internationaux.' },
  { title: 'Editorial & Magazine', desc: 'Direction beauté pour shootings éditoriaux, couvertures magazines et campagnes de mode.' },
  { title: 'Fashion Week & Runway', desc: 'Looks signature pour défilés et présentations couture à Paris, Milan et Londres.' },
  { title: 'VIP & Private Events', desc: 'Service privé pour mariages d\'exception, gala dinners et soirées sur-mesure.' },
]

export const metadata: Metadata = {
  title: 'Services',
  description,
  alternates: { canonical: '/services' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webPageJsonLd('Services', description, '/services'),
    breadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
    ...services.map((s) => serviceJsonLd(s.title, s.desc, '/services')),
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesContent />
    </>
  )
}
