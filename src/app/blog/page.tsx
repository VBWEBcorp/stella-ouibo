import type { Metadata } from 'next'

import { siteConfig } from '@/lib/seo'
import { blogPosts } from '@/lib/blog-posts'
import BlogPageContent from './blog-page-content'

export const revalidate = 3600

const settings = {
  enabled: true,
  title: 'Journal',
  description:
    'Coulisses, méthode et inspirations. Notes éditoriales sur le maquillage de mode, célébrités, mariage et masterclass.',
  eyebrow: 'Blog',
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: settings.title,
    description: settings.description,
    openGraph: {
      type: 'website',
      title: settings.title,
      description: settings.description,
      url: `${siteConfig.url}/blog`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: settings.title,
      description: settings.description,
    },
    alternates: {
      canonical: '/blog',
    },
  }
}

export default async function BlogPage() {
  const posts = blogPosts
    .slice()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: settings.title,
    description: settings.description,
    url: `${siteConfig.url}/blog`,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.slice(0, 20).map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${siteConfig.url}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPageContent
        settings={settings}
        posts={posts.map((p) => ({
          slug: p.slug,
          title: p.title,
          excerpt: p.excerpt,
          coverImage: p.coverImage,
          category: p.category,
          author: p.author,
          publishedAt: p.publishedAt,
        }))}
      />
    </>
  )
}
