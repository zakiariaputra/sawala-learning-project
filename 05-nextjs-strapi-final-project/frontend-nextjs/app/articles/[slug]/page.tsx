import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticleBySlug, formatTanggal } from '@/lib/strapi';

export const revalidate = 60;

interface ArticleDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Dynamic Metadata untuk halaman detail artikel
 */
export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan',
    };
  }

  return {
    title: `${article.title} | Sawala Articles`,
    description: article.excerpt,
  };
}

/**
 * Halaman Detail Artikel (Server Component dengan Dynamic Routing [slug])
 */
export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container">
      <Link href="/" className="back-link">
        &larr; Kembali ke Daftar Artikel
      </Link>

      <article className="article-detail">
        <span className="article-detail__category">{article.category}</span>
        <h1 className="article-detail__title">{article.title}</h1>

        <div className="article-detail__meta">
          <span>
            Penulis: <strong>{article.authorName}</strong>
          </span>{' '}
          &bull;{' '}
          <time dateTime={article.publishedAt}>
            Dipublikasikan pada: {formatTanggal(article.publishedAt)}
          </time>
        </div>

        <div className="article-detail__content">{article.content}</div>
      </article>
    </div>
  );
}
