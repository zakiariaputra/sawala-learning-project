# Mini Project: Consume API with TypeScript

Mini project penutup Milestone 2 (Async API & TypeScript) — mengintegrasikan *Async REST API Fetching*, penanganan kesalahan HTTP, serta pengolahan data produk terstruktur menggunakan *TypeScript*.

## Fitur Utama

- **Definisi Interface API**: Membuat interface `Product` dan `ProductsResponse` (`api.ts`) untuk menjamin tipe data respon API DummyJSON yang *type-safe*.
- **Asynchronous API Wrapper**: Membawa fungsi `getProducts()` yang melakukan request HTTP GET dengan penanganan status jaringan dan validasi `response.ok`.
- **Penanganan Error Terstruktur**: Membungkus request dalam blok `try...catch` dan melakukan pengecekan instance `error instanceof Error`.
- **Pencarian Produk**: Fungsi `cariProduk` untuk menyaring daftar produk berdasarkan kata kunci spesifik secara *case-insensitive*.
- **Filter Harga Produk**: Fungsi `filterHarga` untuk memfilter produk di bawah batas harga maksimum tertentu.
- **Kalkulasi & Analisis Data**:
  - `produkTermurah`: Menentukan item produk dengan harga termurah menggunakan method `.reduce()`.
  - `hitungRataHarga`: Menghitung rata-rata harga seluruh produk secara terkomputasi.
- **Format Output Console**: Menampilkan ringkasan produk, hasil pencarian, filter, produk termurah, dan statistik rata-rata secara rapi.

## Cara Menjalankan

Eksekusi proyek TypeScript secara langsung:

```bash
npx tsx index.ts
```

Atau kompilasi berkas TypeScript dan jalankan output JavaScript:

```bash
npx tsc index.ts && node index.js
```

## Catatan Teknis

- **Pemisahan Modul**: Modul pengambil API (`api.ts`) dipisahkan dari logika presentasi/aplikasi (`index.ts`).
- **Type Annotations & Generics**: Menggunakan `Promise<Product[]>` sebagai tipe kembalian fungsi asinkronus dan `void` pada fungsi tanpa *return value*.
- **Defensive API Checks**: Memeriksa `response.ok` sebelum memanggil `response.json()` untuk menangani *HTTP Error Status Code* (seperti 404 atau 500).
- **TypeScript Narrowing**: Menggunakan `error instanceof Error` saat menangkap kesalahan pada blok `catch` agar pesan *error* dapat diakses secara aman.
