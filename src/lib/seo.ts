export const siteConfig = {
  name: 'STELLA C',
  fullName: 'Claudia Stella Ceriani',
  tagline: 'Celebrity & Fashion Makeup Artist',
  url: 'https://www.stellamua.it',
  locale: 'fr_FR',
  description:
    'Maquilleuse et coiffeuse italienne basée à Paris. Beauty, mode, tapis rouge et événements VIP. Disponible worldwide.',
  ogImage: 'https://www.stellamua.it/og.png',
  twitterHandle: '@stella.ceriani.mua',
  themeColor: '#0a0a0a',
  phone: '+33 6 35 29 76 89',
  email: 'stella.ceriani.mua@gmail.com',
  instagram: 'https://instagram.com/stella.ceriani.mua',
  address: {
    street: 'Paris',
    city: 'Paris',
    postalCode: '75000',
    country: 'FR',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} · ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/services',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
