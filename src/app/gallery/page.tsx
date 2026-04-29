import type { Metadata } from 'next'

import { connectDB } from '@/lib/db'
import { GallerySettings, GalleryImage } from '@/models/Gallery'
import { siteConfig } from '@/lib/seo'
import GalleryContent from './gallery-content'

export const revalidate = 3600

const defaultSettings = {
  enabled: true,
  title: 'Selected works.',
  description:
    'Sélection de travaux récents : éditorial, tapis rouge, fashion week et événements VIP.',
  eyebrow: 'Portfolio',
  heroImage:
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1920&q=85',
}

const fallbackImages = [
  {
    _id: '1',
    title: 'Red Lips · Signature',
    description: 'Editorial · Vogue China · Ritz Paris',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '2',
    title: 'Smoky Eye',
    description: 'Beauty close-up · Harcourt Paris',
    category: 'Beauty',
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '3',
    title: 'Backstage Cannes',
    description: 'Festival de Cannes · 5e édition',
    category: 'Red Carpet',
    imageUrl: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '4',
    title: 'Couture Glow',
    description: 'Fashion Week Paris',
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '5',
    title: 'Nude Shades',
    description: 'Beauty session · natural light',
    category: 'Beauty',
    imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '6',
    title: 'Portrait',
    description: 'Harcourt Magazine · VIP hairstyle',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '7',
    title: 'Premiere Glam',
    description: 'Red Carpet · Spring 2025',
    category: 'Red Carpet',
    imageUrl: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '8',
    title: 'Editorial Cover',
    description: 'Magazine · editorial direction',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '9',
    title: 'Runway',
    description: 'Backstage Fashion Week Paris',
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '10',
    title: 'Cannes Carpet',
    description: 'Festival de Cannes · Premiere',
    category: 'Red Carpet',
    imageUrl: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '11',
    title: 'Soft Glam',
    description: 'Wedding & private event',
    category: 'Bridal',
    imageUrl: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1100&q=85',
  },
  {
    _id: '12',
    title: 'Pure Beauty',
    description: 'Skincare & natural finish',
    category: 'Beauty',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1100&q=85',
  },
]

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: defaultSettings.title,
    description: defaultSettings.description,
    openGraph: {
      type: 'website',
      title: defaultSettings.title,
      description: defaultSettings.description,
      url: `${siteConfig.url}/gallery`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: defaultSettings.heroImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultSettings.title,
      description: defaultSettings.description,
      images: [defaultSettings.heroImage],
    },
    alternates: {
      canonical: '/gallery',
    },
  }
}

export default async function GalleryPage() {
  let settings: any = defaultSettings
  let images: any[] = fallbackImages

  try {
    await connectDB()
    const [settingsDoc, imagesDocs] = await Promise.all([
      GallerySettings.findOne().lean(),
      GalleryImage.find({ active: true })
        .sort({ order: 1 })
        .select('title description imageUrl category')
        .limit(60)
        .lean(),
    ])

    if (settingsDoc) settings = { ...defaultSettings, ...settingsDoc }
    if (imagesDocs && (imagesDocs as any[]).length > 0) {
      images = (imagesDocs as any[]).map((img) => ({
        ...img,
        _id: String(img._id),
      }))
    }
  } catch {
    // Fallback gracieux — utilise les images par défaut
  }

  return <GalleryContent initialSettings={settings as any} initialImages={images as any} />
}
