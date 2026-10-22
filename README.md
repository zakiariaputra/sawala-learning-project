# Sawala Learning Project

Repo dokumentasi progress belajar dari ALL Silabus PT. Sawala Inovasi Indonesia 2026 bagian Software Engineer (FE x BE) 2026. Roadmap 5 milestone selama 10 minggu, dari JavaScript fundamentals sampai fullstack Next.js + Strapi.

## Aturan Umum

- Tiap milestone punya folder sendiri dengan prefix angka (01-, 02-, dst) sesuai urutan timeline
- Materi/latihan harian masuk ke sub-folder kecil sesuai topik
- Output wajib tiap milestone masuk folder `mini-project-...` (atau `final-project-...` di milestone terakhir)
- Commit & PR mengikuti struktur folder — 1 folder topik/mini-project = 1 branch/PR
- Tiap folder milestone & mini-project idealnya punya README.md kecil sendiri (apa yang dikerjakan, cara run, catatan dependency)

## Milestone

| # | Folder | Fokus | Minggu |
|---|--------|-------|--------|
| 1 | `01-javascript-fundamentals/` | Fondasi & JavaScript Modern | 1-2 |
| 2 | `02-async-api-typescript/` | Async JS, API & TypeScript | 3-4 |
| 3 | `03-nodejs-fundamentals/` | Node.js Fundamentals | 5-6 |
| 4 | `04-react-fundamentals/` | React Fundamentals | 7-8 |
| 5 | `05-nextjs-strapi-final-project/` | Next.js, Atomic Component & Integrasi Fullstack (Strapi) | 9-10 |

Milestone 5 dipecah jadi `frontend-nextjs/` dan `backend-strapi/` karena final project fullstack.

## Progress

- [x] 01. Variabel & Tipe Data &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;# Minggu 1-2
- [x] 02. Kondisi & Function
- [x] 03. Object & Array
- [x] 04. Looping & Array Methods
- [x] 05. Destructuring & Spread
- [x] 06. ES Modules
- [ ] Mini Project: Produk List
- [x] 12. Next.js App Router & Routing &emsp;&emsp;&emsp;&emsp;&emsp;# Minggu 9-10
- [x] 13. Server Component vs Client Component & Data Fetching
- [x] 14. Atomic Design (atoms / molecules / organisms)
- [x] 15. Integrasi Strapi (content type & REST API) & Environment Variable
- [x] Final Project: Aplikasi Artikel (Next.js + Strapi)

## Cara Menjalankan

Tiap folder berisi file yang bisa langsung dijalankan pakai Node.js:

```bash
node namafolder/namaFile.js
```

Final project Milestone 5 memakai dua service, jalankan di dua terminal:

```bash
# Terminal 1 - backend Strapi (CMS, butuh MySQL XAMPP aktif)
cd 05-nextjs-strapi-final-project/backend-strapi
npm install
npm run develop
```

```bash
# Terminal 2 - frontend Next.js (tampilan artikel)
cd 05-nextjs-strapi-final-project/frontend-nextjs
npm install
npm run dev
```

Buka `http://localhost:3000` untuk melihat daftar artikel. Detail setup ada di README masing-masing folder.