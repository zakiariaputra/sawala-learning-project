# Catatan Kontribusi Peserta (Final Project)

Dokumentasi ini mencatat kontribusi setiap peserta / kelompok dalam pengerjaan Final Project Milestone 5 (Minggu 9–10) agar pembagian tugas, branch kerja, dan riwayat Pull Request terlihat jelas dan transparan.

---

## Tabel Kontribusi Peserta

| Nama Peserta | Peran / Bagian | Branch Kerja | Pull Request | Reviewer | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Zaki Ari Saputra** | Fullstack & Frontend Specialist | `feat/05-frontend-nextjs` | PR #2 (Frontend Next.js & Atomic Design) | Peer Reviewer | Selesai (Merged) |
| **Kontributor Tim Backend** | Backend & Database Engineer | `feat/05-backend-strapi` | PR #1 (Strapi CMS & MySQL XAMPP) | Zaki Ari Saputra | Selesai (Merged) |

---

## Rincian Pekerjaan Tiap Bagian

### 1. Tim Backend (`feat/05-backend-strapi`)
- Inisialisasi Strapi v5 Headless CMS.
- Konfigurasi driver `mysql2` dan koneksi database MySQL XAMPP (`strapi_db`) pada `config/database.ts`.
- Pembuatan schema content type `Article` (`title`, `slug`, `excerpt`, `content`, `category`, `authorName`).
- Setup controller, router, service, dan penyediaan skrip seed database SQL (`database/seed.sql`).
- Dokumentasi setup backend dan konfigurasi hak akses Public role di `backend-strapi/README.md`.

### 2. Tim Frontend (`feat/05-frontend-nextjs`)
- Inisialisasi Next.js dengan App Router (`app/layout.tsx` dan `app/page.tsx`).
- Penerapan metodologi Atomic Design:
  - **Atom**: `components/atoms/Button.tsx` (komponen tombol reusable).
  - **Molecule**: `components/molecules/ArticleCard.tsx` (kartu artikel dengan navigasi).
  - **Organism**: `components/organisms/ArticleList.tsx` (daftar kartu dengan filter kategori interaktif).
- Pembuatan Dynamic Route `app/articles/[slug]/page.tsx` dengan dynamic metadata.
- Integrasi data fetching ke REST API Strapi di `lib/strapi.ts` dengan ISR (`revalidate: 60`) dan mekanisme fallback data offline.
- Styling modern dan responsif menggunakan Vanilla CSS (`app/globals.css`).

### 3. Integrasi & Dokumentasi (`feat/05-nextjs-strapi-final-project`)
- Penggabungan kode backend dan frontend melalui alur Pull Request.
- Penulisan panduan komprehensif alur data, setup MySQL XAMPP, dan deployment di `README.md`.
- Pembuatan template Pull Request dan pelacakan issue di `TASKS.md`.
