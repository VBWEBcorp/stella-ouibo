import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '@/lib/seo'
import { blogPosts, getAllSlugs, getPostBySlug } from '@/lib/blog-posts'
import BlogPostContent from './blog-post-content'

type Params = Promise<{ slug: string }>

export const revalidate = 3600

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return {}

  const url = `${siteConfig.url}/blog/${post.slug}`

  return {
    title: post.metaTitle || post.title,
    description: (post.metaDescription || post.excerpt).substring(0, 160),
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        { url: post.coverImage, width: 1200, height: 630, alt: post.title },
      ],
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  // Build a list of related posts (same category, exclude current)
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent
        post={post}
        related={related.map((p) => ({
          slug: p.slug,
          title: p.title,
          excerpt: p.excerpt,
          coverImage: p.coverImage,
          category: p.category,
          publishedAt: p.publishedAt,
        }))}
      />
    </>
  )
}
