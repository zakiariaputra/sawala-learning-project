export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  authorName: string;
  publishedAt: string;
}

interface StrapiEntry {
  id: number;
  attributes?: Record<string, any>;
  [key: string]: any;
}

interface StrapiApiResponse {
  data: StrapiEntry[];
}

const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

// Data artikel cadangan (fallback) jika server Strapi belum berjalan
const FALLBACK_ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Memahami Next.js App Router dan Server Components',
    slug: 'memahami-nextjs-app-router',
    excerpt:
      'Pelajari bagaimana App Router mempermudah struktur routing dan pemisahan Server vs Client Components di Next.js.',
    content:
      'Next.js dengan App Router memperkenalkan paradigma baru dalam membangun aplikasi web modern. Komponen secara bawaan merupakan Server Component yang dieksekusi di server, menghemat ukuran JavaScript bundle di browser pengguna. Ketika kita membutuhkan interaktivitas seperti state atau event handler, kita cukup menambahkan direktif "use client" pada komponen tersebut.',
    category: 'Tutorial',
    authorName: 'Putra',
    publishedAt: '2026-10-20T08:00:00.000Z',
  },
  {
    id: 2,
    title: 'Integrasi Strapi Headless CMS dengan Database MySQL XAMPP',
    slug: 'integrasi-strapi-mysql-xampp',
    excerpt:
      'Panduan praktis menghubungkan Strapi v5 ke database lokal MySQL menggunakan XAMPP untuk kemudahan pengembangan.',
    content:
      'Strapi adalah salah satu Headless CMS open-source paling populer. Dengan mengintegrasikan Strapi bersama database MySQL di XAMPP, kita dapat mengelola konten artikel melalui admin panel yang nyaman dan menyediakan REST API standar yang siap dikonsumsi oleh Next.js.',
    category: 'Teknologi',
    authorName: 'Aria',
    publishedAt: '2026-10-21T09:30:00.000Z',
  },
  {
    id: 3,
    title: 'Penerapan Atomic Design pada Aplikasi Web Modern',
    slug: 'penerapan-atomic-design',
    excerpt:
      'Membagi arsitektur UI menjadi Atoms, Molecules, dan Organisms untuk kode yang modular dan mudah diuji.',
    content:
      'Metodologi Atomic Design membagi komponen antarmuka ke dalam beberapa tingkat: Atom (elemen dasar seperti Button), Molecule (kombinasi beberapa atom seperti ArticleCard), dan Organism (bagian antarmuka kompleks seperti ArticleList yang mengelola filter dan daftar kartu). Pendekatan ini membuat komponen sangat terorganisir dan reusable.',
    category: 'Web Development',
    authorName: 'Putra',
    publishedAt: '2026-10-22T10:15:00.000Z',
  },
  {
    id: 4,
    title: 'Kolaborasi Tim dengan Git Feature Branch dan Pull Request',
    slug: 'kolaborasi-tim-git-pull-request',
    excerpt:
      'Best practice pembagian task via GitHub Issues, PR terpisah tiap anggota, serta code review sebelum merge.',
    content:
      'Dalam pengerjaan proyek tim, pemisahan tugas menggunakan GitHub Issues dan pembuatan Feature Branch terpisah untuk setiap anggota kelompok mencegah timbulnya merge conflict yang rumit. Setiap peserta mengajukan Pull Request (PR) dan melakukan code review sebelum digabungkan ke branch utama.',
    category: 'Opini',
    authorName: 'Aria',
    publishedAt: '2026-10-22T11:00:00.000Z',
  },
];

/**
 * Normalisasi data dari Strapi (mendukung struktur Strapi v4 dan Strapi v5)
 */
function normalizeStrapiArticle(item: StrapiEntry): Article {
  const fields = item.attributes ? item.attributes : item;

  return {
    id: item.id,
    title: fields.title || 'Tanpa Judul',
    slug: fields.slug || `artikel-${item.id}`,
    excerpt: fields.excerpt || '',
    content: fields.content || '',
    category: fields.category || 'Umum',
    authorName: fields.authorName || 'Anonim',
    publishedAt: fields.publishedAt || item.publishedAt || new Date().toISOString(),
  };
}

/**
 * Mengambil seluruh daftar artikel dari REST API Strapi
 */
export async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${STRAPI_BASE_URL}/api/articles?populate=*`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Gagal memuat artikel (Status HTTP: ${res.status})`);
    }

    const json: StrapiApiResponse = await res.json();

    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
      console.warn('Data Strapi kosong, menampilkan artikel cadangan.');
      return FALLBACK_ARTICLES;
    }

    return json.data.map(normalizeStrapiArticle);
  } catch (error) {
    console.warn(
      'Strapi offline atau belum terisi, menggunakan fallback articles untuk demo UI:',
      error instanceof Error ? error.message : error
    );
    return FALLBACK_ARTICLES;
  }
}

/**
 * Mengambil detail satu artikel berdasarkan slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const url = `${STRAPI_BASE_URL}/api/articles?filters[slug][$eq]=${encodeURIComponent(
      slug
    )}&populate=*`;

    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Gagal memuat artikel dengan slug: ${slug}`);
    }

    const json: StrapiApiResponse = await res.json();

    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
      const fallback = FALLBACK_ARTICLES.find((a) => a.slug === slug);
      return fallback || null;
    }

    return normalizeStrapiArticle(json.data[0]);
  } catch (error) {
    console.warn(
      `Strapi offline, mencari di fallback articles untuk slug "${slug}":`,
      error instanceof Error ? error.message : error
    );
    const fallback = FALLBACK_ARTICLES.find((a) => a.slug === slug);
    return fallback || null;
  }
}

/**
 * Format tanggal dalam format bahasa Indonesia
 */
export function formatTanggal(dateString: string): string {
  if (!dateString) return '-';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
