import React from 'react';
import { getArticles } from '@/lib/strapi';
import ArticleList from '@/components/organisms/ArticleList';

// Revalidasi data secara incremental static regeneration (ISR) setiap 60 detik
export const revalidate = 60;

/**
 * Halaman Utama (Server Component)
 * Mengambil data dari REST API Strapi dan meneruskannya ke Organism ArticleList
 */
export default async function HomePage() {
  const articles = await getArticles();

  return (
    <div className="container">
      <div className="page-intro">
        <h1 className="page-intro__title">Daftar Artikel Terbaru</h1>
        <p className="page-intro__desc">
          Artikel dikelola melalui <strong>Strapi CMS</strong> (Database MySQL XAMPP)
          dan disajikan menggunakan <strong>Next.js App Router</strong> dengan arsitektur
          komponen <strong>Atomic Design</strong>.
        </p>
      </div>

      <ArticleList articles={articles} />
    </div>
  );
}
