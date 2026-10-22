# Final Project - Aplikasi Artikel Sederhana (Next.js + Strapi + MySQL XAMPP)

Proyek ini adalah implementasi **Final Project Milestone 5 (Minggu 9–10)** pada kurikulum Sawala Learning. Aplikasi berupa portal artikel sederhana yang menggabungkan **Next.js App Router** di sisi frontend dan **Strapi Headless CMS** di sisi backend dengan basis data relasional **MySQL** yang dijalankan melalui **XAMPP**.

---

## 1. Struktur Folder Proyek

Sesuai dengan ketentuan dan spesifikasi kurikulum:

```text
05-nextjs-strapi-final-project/
├── frontend-nextjs/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── articles/
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── atoms/
│   │   │   └── Button.tsx
│   │   ├── molecules/
│   │   │   └── ArticleCard.tsx
│   │   └── organisms/
│   │       └── ArticleList.tsx
│   ├── lib/
│   │   └── strapi.ts
│   ├── .env.local
│   ├── package.json
│   └── README.md
├── backend-strapi/
│   ├── config/
│   │   ├── admin.ts
│   │   ├── api.ts
│   │   ├── database.ts
│   │   ├── middlewares.ts
│   │   └── server.ts
│   ├── database/
│   │   └── seed.sql
│   ├── src/
│   │   ├── api/
│   │   │   └── article/
│   │   │       ├── content-types/
│   │   │       │   └── article/
│   │   │       │       └── schema.json
│   │   │       ├── controllers/
│   │   │       │   └── article.ts
│   │   │       ├── routes/
│   │   │       │   └── article.ts
│   │   │       └── services/
│   │   │           └── article.ts
│   │   └── index.ts
│   ├── .env
│   ├── package.json
│   └── README.md
├── CONTRIBUTORS.md
├── TASKS.md
└── README.md
```

---

## 2. Alur Data Lengkap (Data Flow)

Alur perpindahan data dari CMS hingga ke antarmuka pengguna:

```text
Editor / Admin membuat konten di Admin Panel Strapi
                        │
                        ▼
Data tersimpan di Database MySQL XAMPP (database: strapi_db, tabel: articles)
                        │
                        ▼
Strapi mengekspos endpoint REST API: GET /api/articles (format JSON)
                        │
                        ▼
Frontend Next.js mengambil data melalui fetch() di lib/strapi.ts
                        │
                        ▼
Server Component (app/page.tsx atau app/articles/[slug]/page.tsx) memproses data
                        │
                        ▼
Komponen Atomic UI merender tampilan:
Organism (ArticleList) ──► Molecule (ArticleCard) ──► Atom (Button)
```

---

## 3. Prasyarat Sistem

Sebelum menjalankan proyek, pastikan perangkat Anda telah terpasang:
- **Node.js**: Versi `20.x` atau `22.x` (LTS direkomendasikan)
- **XAMPP**: Modul Apache & MySQL

---

## 4. Panduan Menjalankan Proyek

Dua layanan (`backend-strapi` dan `frontend-nextjs`) dijalankan secara bersamaan pada dua jendela terminal terpisah.

### Langkah 1: Persiapan Database MySQL di XAMPP

1. Buka aplikasi **XAMPP Control Panel**.
2. Klik tombol **Start** pada modul **MySQL** (pastikan status berwarna hijau dan port `3306` aktif).
3. Buat database bernama `strapi_db`:
   - Melalui **phpMyAdmin** (`http://localhost/phpmyadmin`): Buat database baru bernama `strapi_db`.
   - Atau lewat terminal / PowerShell:
     ```powershell
     & "C:\xampp\mysql\bin\mysql.exe" -u root -e "CREATE DATABASE IF NOT EXISTS strapi_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
     ```

### Langkah 2: Menjalankan Backend Strapi (Port 1337)

Buka terminal pertama:

```bash
cd 05-nextjs-strapi-final-project/backend-strapi
npm install
npm run develop
```

- **Admin Panel**: `http://localhost:1337/admin`
- **REST API**: `http://localhost:1337/api/articles`

> **Penting (Hak Akses REST API Publik):**
> 1. Masuk ke Admin Panel dan registrasikan akun Admin pertama Anda.
> 2. Buat beberapa artikel di menu **Content Manager → Article**, lalu klik **Save** dan **Publish**.
> 3. Masuk ke **Settings → Users & Permissions plugin → Roles → Public**.
> 4. Pada bagian **Article**, beri tanda centang pada opsi `find` dan `findOne`, lalu klik **Save**.

### Langkah 3: Menjalankan Frontend Next.js (Port 3000)

Buka terminal kedua:

```bash
cd 05-nextjs-strapi-final-project/frontend-nextjs
npm install
npm run dev
```

Buka peramban di:
`http://localhost:3000`

> **Fitur Fallback:** Apabila server Strapi belum dijalankan atau database masih kosong, frontend tetap menampilkan daftar artikel contoh dari `lib/strapi.ts` sehingga demo antarmuka dan penilaian fungsi tetap berjalan lancar.

---

## 5. Pemetaan Materi Silabus Minggu 9–10

| Materi Silabus | Lokasi Implementasi | Penjelasan |
| :--- | :--- | :--- |
| **Next.js App Router: page dan layout** | `frontend-nextjs/app/layout.tsx` & `page.tsx` | Struktur layout bersama (header/footer) dan halaman utama. |
| **Routing** | `frontend-nextjs/app/articles/[slug]/page.tsx` | Dynamic Route `[slug]` untuk halaman detail artikel berdasarkan parameter URL. |
| **Server Component vs Client Component** | `app/page.tsx` (Server) vs `components/*` (Client) | Server Component untuk fetching data di sisi server; Client Component (`'use client'`) untuk filter kategori dan navigasi. |
| **Data Fetching Dasar** | `frontend-nextjs/lib/strapi.ts` | Fungsi `fetch()` dengan Incremental Static Regeneration (`revalidate: 60`). |
| **Atomic Design** | `components/atoms`, `molecules`, `organisms` | Pemisahan komponen ke dalam tingkat `Button`, `ArticleCard`, dan `ArticleList`. |
| **Integrasi Strapi (Content Type & REST API)** | `backend-strapi/src/api/article/` | Content type `Article` dengan endpoint REST `/api/articles`. |
| **Basis Data Relasional MySQL** | `backend-strapi/config/database.ts` | Koneksi ke MySQL XAMPP port 3306 dengan driver `mysql2`. |
| **Environment Variable** | `.env` (backend) & `.env.local` (frontend) | Pengaturan kredensial host, port, database, dan URL API. |
| **Basic Deployment** | Bagian panduan deployment di README | Langkah deployment frontend ke Vercel dan backend ke cloud hosting. |

---

## 6. Kolaborasi Tim & Alur Kerja GitHub

Sesuai ketentuan pengerjaan tim:
- **Task dibagi lewat Issues**: Rincian task issue terdokumentasi di [`TASKS.md`](./TASKS.md).
- **PR Terpisah Tiap Peserta**:
  - `feat/05-backend-strapi`: Dikerjakan oleh kontributor backend (Setup Strapi, MySQL XAMPP, schema article).
  - `feat/05-frontend-nextjs`: Dikerjakan oleh kontributor frontend (Next.js App Router, Atomic Design, data fetching).
- **Review Sebelum Merge**: Menggunakan template PR di `.github/pull_request_template.md`.
- **Kontribusi Terlihat Jelas**: Dicatat secara lengkap di [`CONTRIBUTORS.md`](./CONTRIBUTORS.md).

---

## 7. Panduan Basic Deployment

### Frontend (Next.js) ke Vercel:
1. Hubungkan repository GitHub ke [Vercel](https://vercel.com).
2. Set Root Directory ke `05-nextjs-strapi-final-project/frontend-nextjs`.
3. Tambahkan Environment Variable:
   - `NEXT_PUBLIC_STRAPI_API_URL`: URL publik backend Strapi Anda.
4. Klik **Deploy**.

### Backend (Strapi) ke Cloud (Railway / Render):
1. Siapkan database MySQL di cloud (misalnya Railway MySQL, Aiven, atau PlanetScale).
2. Deploy folder `backend-strapi`.
3. Konfigurasikan environment variables di dashboard cloud hosting (`DATABASE_CLIENT=mysql`, `DATABASE_HOST`, `DATABASE_NAME`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`, `APP_KEYS`, `JWT_SECRET`).
4. Jalankan perintah build `npm run build` dan start `npm run start`.
