import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import './globals.css';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'abc Articles';

export const metadata: Metadata = {
  title: `${siteName} | Portal Artikel Strapi & Next.js`,
  description:
    'Aplikasi artikel sederhana dengan Next.js App Router dan Strapi Headless CMS (MySQL XAMPP).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <header className="site-header">
          <div className="container site-header__inner">
            <Link href="/" className="site-header__logo">
              {siteName}
            </Link>
            <nav className="site-header__nav">
              <Link href="/">Beranda</Link>
            </nav>
          </div>
        </header>

        <main className="main-content">{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p>
              Final Project abc Learning 2026 &bull; Dibangun dengan Next.js App
              Router & Strapi CMS (MySQL)
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
