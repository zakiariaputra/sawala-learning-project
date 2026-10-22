# Frontend Next.js (App Router & Atomic Design)

Bagian frontend untuk Final Project Milestone 5 (Minggu 9-10). Frontend ini dibangun dengan **Next.js App Router**, memisahkan **Server Components** dan **Client Components**, menerapkan arsitektur **Atomic Design**, serta mengonsumsi data dari REST API **Strapi CMS**.

## 1. Prasyarat

- Node.js versi 20.x atau 22.x
- Backend Strapi (port 1337) sudah berjalan, atau menggunakan fallback data jika dijalankan terpisah.

## 2. Konfigurasi Environment (`.env.local`)

Buat atau sesuaikan file `.env.local`:

```env
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
NEXT_PUBLIC_SITE_NAME=Sawala Articles
```

## 3. Menjalankan Frontend

Jalankan perintah berikut di folder `frontend-nextjs`:

```bash
cd 05-nextjs-strapi-final-project/frontend-nextjs
npm install
npm run dev
```

Buka browser di:
`http://localhost:3000`

## 4. Struktur Komponen (Atomic Design)

Aplikasi ini membagi komponen antarmuka ke dalam 3 tingkatan Atomic Design:

- **Atoms (`components/atoms/`)**:
  - `Button.tsx`: Komponen tombol murni yang reusable dengan varian (`primary`, `outline`, `active`).
- **Molecules (`components/molecules/`)**:
  - `ArticleCard.tsx`: Kartu artikel yang menggabungkan judul, badge kategori, tanggal, penulis, dan atom `Button`.
- **Organisms (`components/organisms/`)**:
  - `ArticleList.tsx`: Komponen kompleks yang mengelola filter kategori (menggunakan atom `Button`) dan merender kumpulan molecule `ArticleCard` dalam tata letak grid responsif.

## 5. Server Component vs Client Component

- **Server Components**:
  - `app/layout.tsx`: Kerangka dasar HTML, navbar, dan footer.
  - `app/page.tsx`: Melakukan data fetching artikel dari REST API Strapi di sisi server dengan ISR (`revalidate = 60`).
  - `app/articles/[slug]/page.tsx`: Dynamic route yang mengambil data artikel berdasarkan slug dan merender metadata secara dinamis.
- **Client Components** (`'use client'`):
  - `Button.tsx`: Menangani event click pengguna.
  - `ArticleCard.tsx`: Menangani navigasi ke halaman detail.
  - `ArticleList.tsx`: Mengelola interaktivitas state filter kategori dengan `useState`.
