# Daftar Task & GitHub Issues (Final Project)

Daftar task ini digunakan sebagai acuan pembuatan **GitHub Issues** pada proyek tim. Setiap task dikerjakan melalui **Feature Branch** terpisah dan digabungkan melalui **Pull Request (PR)** setelah melalui tahapan code review.

---

## Tabel Pembagian Task

| # | Judul Task | Kategori | Branch / PR | Assignee / Peran | Label | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#1** | Setup Strapi CMS dengan Database MySQL XAMPP | Backend | `feat/05-backend-strapi` | Backend Developer | `backend`, `database` | Selesai |
| **#2** | Pembuatan Content Type `Article` & Konfigurasi REST API | Backend | `feat/05-backend-strapi` | Backend Developer | `backend`, `api` | Selesai |
| **#3** | Pengaturan Hak Akses Public Role (find & findOne) | Backend | `feat/05-backend-strapi` | Backend Developer | `backend`, `security` | Selesai |
| **#4** | Inisialisasi Next.js App Router (Layout & Root Page) | Frontend | `feat/05-frontend-nextjs` | Frontend Developer | `frontend`, `nextjs` | Selesai |
| **#5** | Implementasi Data Fetching Client di `lib/strapi.ts` | Frontend | `feat/05-frontend-nextjs` | Frontend Developer | `frontend`, `integration` | Selesai |
| **#6** | Pembuatan Komponen Atom `Button.tsx` | Frontend | `feat/05-frontend-nextjs` | Frontend Developer | `frontend`, `atomic-design` | Selesai |
| **#7** | Pembuatan Komponen Molecule `ArticleCard.tsx` | Frontend | `feat/05-frontend-nextjs` | Frontend Developer | `frontend`, `atomic-design` | Selesai |
| **#8** | Pembuatan Komponen Organism `ArticleList.tsx` (Filter Interaktif) | Frontend | `feat/05-frontend-nextjs` | Frontend Developer | `frontend`, `atomic-design` | Selesai |
| **#9** | Implementasi Dynamic Routing Halaman Detail `[slug]` | Frontend | `feat/05-frontend-nextjs` | Frontend Developer | `frontend`, `routing` | Selesai |
| **#10** | Dokumentasi README Lengkap, Setup XAMPP, & Alur Data | Docs | `feat/05-nextjs-strapi-final-project` | Technical Writer / All | `documentation` | Selesai |
| **#11** | Code Review Antar Rekan Tim Sebelum Merge PR | Review | All PRs | Reviewer / Timbal Balik | `code-review` | Selesai |

---

## Alur Kerja Kolaborasi GitHub (Workflow)

1. **Pembuatan Issue:**
   - Buka tab **Issues** pada repository GitHub.
   - Buat issue baru sesuai nomor task di atas dengan acceptance criteria jelas.
2. **Pembuatan Branch:**
   - Format penamaan branch: `feat/05-backend-strapi` atau `feat/05-frontend-nextjs`.
3. **Pengerjaan & Commit:**
   - Tulis kode sesuai spesifikasi tugas.
   - Gunakan pesan commit konvensional (misal: `feat(05): ...`).
4. **Pembukaan Pull Request:**
   - Buka PR ke branch utama / integrasi.
   - Gunakan template PR yang tersedia di `.github/pull_request_template.md`.
5. **Code Review:**
   - Minimal 1 rekan tim wajib memberikan persetujuan (Approve) setelah memeriksa fungsionalitas dan kesesuaian arsitektur kode.
6. **Merge & Update Status:**
   - Lakukan merge (squash merge atau merge commit) dan perbarui catatan kontribusi di `CONTRIBUTORS.md`.
