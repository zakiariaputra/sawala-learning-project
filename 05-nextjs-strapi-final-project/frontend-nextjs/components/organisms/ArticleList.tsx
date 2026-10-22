'use client';

import React, { useState } from 'react';
import type { Article } from '@/lib/strapi';
import ArticleCard from '../molecules/ArticleCard';
import Button from '../atoms/Button';

export interface ArticleListProps {
  articles: Article[];
}

/**
 * Organism: ArticleList
 * Menggabungkan atom Button (filter kategori) dan molecule ArticleCard dalam layout grid interaktif
 */
export default function ArticleList({ articles }: ArticleListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  // Menentukan daftar kategori unik dari data artikel
  const categories = ['Semua', ...Array.from(new Set(articles.map((a) => a.category)))];

  // Menyaring artikel sesuai kategori yang dipilih
  const filteredArticles =
    selectedCategory === 'Semua'
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <section className="article-list-section">
      <div className="filter-bar">
        <span className="filter-bar__label">Filter Kategori:</span>
        <div className="filter-bar__buttons">
          {categories.map((cat) => (
            <Button
              key={cat}
              label={cat}
              variant="outline"
              active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            />
          ))}
        </div>
      </div>

      <div className="article-count-info">
        Menampilkan {filteredArticles.length} artikel
        {selectedCategory !== 'Semua' && ` pada kategori "${selectedCategory}"`}:
      </div>

      {filteredArticles.length === 0 ? (
        <div className="empty-state">
          <p>Belum ada artikel yang tersedia untuk kategori ini.</p>
        </div>
      ) : (
        <div className="article-grid">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
