# 03. Error Handling

Materi minggu 3-4 — teknik penanganan kesalahan (*error handling*) pada runtime JavaScript menggunakan struktur `try...catch` serta pembuatan pengecualian kustom (*custom error throwing*).

## Yang Dipelajari

- **Try-Catch Block**: Membungkus eksekusi kode yang berisiko menghasilkan kesalahan agar program tidak berhenti secara mendadak (*graceful degradation*).
- **Validation & Custom Errors**:
  - Menggunakan `throw new Error(...)` untuk menangkap nilai data yang kosong (`null` / `undefined`).
  - Menggunakan `throw new TypeError(...)` untuk menangkap tipe data yang tidak sesuai (misal: umur berupa teks alih-alih angka).
- **Error Inspection**: Mengakses properti `error.message` pada objek penangkap *error* untuk mendapatkan deskripsi detail kesalahan.
- **Iterasi Aman**: Menjalankan perulangan array di mana setiap iterasi memiliki penanganan kesalahan independen sehingga iterasi berikutnya tetap berjalan meski iterasi sebelumnya gagal.

## Cara Menjalankan

```bash
node index.js
```

## Catatan

- Memisahkan blok `try...catch` di dalam perulangan (*loop*) memastikan kesalahan pada satu item tidak menghentikan pemrosesan item-item lainnya.
- `TypeError` digunakan secara spesifik ketika nilai suatu variabel tidak sesuai dengan tipe data yang diharapkan secara operasional.
