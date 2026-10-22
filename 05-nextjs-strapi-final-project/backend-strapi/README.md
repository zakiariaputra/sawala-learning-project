# Backend Strapi CMS (MySQL XAMPP)

Bagian backend untuk Final Project Milestone 5 (Minggu 9-10). Backend ini menggunakan **Strapi** sebagai Headless CMS dengan basis data **MySQL** yang berjalan melalui **XAMPP**.

## 1. Prasyarat

- Node.js versi 20.x atau 22.x
- XAMPP (Apache & MySQL) sudah terpasang di komputer

## 2. Persiapan Database MySQL di XAMPP

1. Buka aplikasi **XAMPP Control Panel**.
2. Klik tombol **Start** pada modul **MySQL** (dan Apache jika ingin membuka phpMyAdmin).
3. Buat database bernama `strapi_db`:
   - Melalui phpMyAdmin (`http://localhost/phpmyadmin`), klik **New** lalu buat database `strapi_db` dengan collation `utf8mb4_general_ci` atau `utf8mb4_unicode_ci`.
   - Atau lewat terminal / Command Prompt:
     ```bash
     C:\xampp\mysql\bin\mysql.exe -u root -e "CREATE DATABASE IF NOT EXISTS strapi_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
     ```

## 3. Konfigurasi Environment (`.env`)

File `.env` sudah disesuaikan dengan konfigurasi standar MySQL XAMPP:

```env
HOST=0.0.0.0
PORT=1337

DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=strapi_db
DATABASE_USERNAME=root
DATABASE_PASSWORD=
DATABASE_SSL=false
```

> **Catatan:** Port default MySQL XAMPP adalah `3306` dan pengguna default adalah `root` tanpa kata sandi (`DATABASE_PASSWORD=`).

## 4. Menjalankan Strapi

Jalankan perintah berikut di dalam folder `backend-strapi`:

```bash
cd 05-nextjs-strapi-final-project/backend-strapi
npm install
npm run develop
```

Setelah server berhasil berjalan:
- **Admin Panel**: `http://localhost:1337/admin`
- **REST API Endpoint**: `http://localhost:1337/api/articles`

## 5. Setup Pengguna Pertama & Hak Akses Public

1. Buka `http://localhost:1337/admin` dan daftarkan akun administrator pertama Anda.
2. Buat beberapa konten artikel melalui menu **Content Manager → Article → Create new entry**, lalu klik **Save** dan **Publish**.
3. Buka hak akses REST API agar frontend dapat membaca artikel tanpa otentikasi login:
   - Masuk ke menu **Settings** (ikon gear di pojok kiri bawah).
   - Di bawah kategori **Users & Permissions Plugin**, pilih **Roles**.
   - Klik role **Public**.
   - Gulir ke bawah ke bagian **Article**, lalu centang:
     - `find` (mengambil daftar artikel)
     - `findOne` (mengambil detail satu artikel)
   - Klik tombol **Save** di pojok kanan atas.
4. Uji coba dengan membuka `http://localhost:1337/api/articles` di browser untuk memastikan response JSON sudah muncul.
