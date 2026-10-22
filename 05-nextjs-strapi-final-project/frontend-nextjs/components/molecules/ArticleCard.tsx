'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import type { Article } from '@/lib/strapi';
import { formatTanggal } from '@/lib/strapi';
import Button from '../atoms/Button';

export interface ArticleCardProps {
  article: Article;
}

/**
 * Molecule: ArticleCard
 * Menggabungkan atom Button dengan informasi artikel (judul, excerpt, kategori, penulis, tanggal)
 */
export default function ArticleCard({ article }: ArticleCardProps) {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/articles/${article.slug}`);
  };

  return (
    <article className="article-card">
      <div className="article-card__header">
        <span className="article-card__badge">{article.category}</span>
        <time className="article-card__date" dateTime={article.publishedAt}>
          {formatTanggal(article.publishedAt)}
        </time>
      </div>

      <h2 className="article-card__title" onClick={handleReadMore}>
        {article.title}
      </h2>

      <p className="article-card__excerpt">{article.excerpt}</p>

      <div className="article-card__footer">
        <span className="article-card__author">
          Ditulis oleh: <strong>{article.authorName}</strong>
        </span>
        <Button
          label="Baca Selengkapnya →"
          onClick={handleReadMore}
          variant="outline"
        />
      </div>
    </article>
  );
}
