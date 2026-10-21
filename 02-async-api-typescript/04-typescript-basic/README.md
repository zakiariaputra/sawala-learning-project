# 04. TypeScript Basic

Materi minggu 3-4 — pengenalan sistem tipe data statis (*static typing*) pada TypeScript menggunakan `interface`, `type alias`, `union types`, dan fitur pewarisan interface.

## Yang Dipelajari

- **Interface Definition**: Mengatur cetak biru struktur objek (`Produk`, `Pengguna`) dengan kriteria properti wajib, opsional (`email?: string`), dan pembatasan baca (`readonly id: number`).
- **Type Alias**:
  - `Status`: Mendefinisikan *Union Type* dengan opsi literal bertipe spesifik (`"aktif" | "nonaktif" | "pending"`).
  - `Alamat`: Membuat aliases untuk tipe data struktur objek terpisah.
- **Interface for Functions**: Mendefinisikan tanda tangan tipe fungsi (`Kalkulator`) untuk menjamin tipe masukan parameter dan kembalian.
- **Interface Inheritance**: Memperluas interface berbasis interface lain menggunakan kata kunci `extends` (`ProdukDigital extends Produk`).
- **Type-Safe Array Operations**: Melakukan operasi `.filter()` dan `.reduce()` pada daftar produk ber-tipe `Produk[]` secara aman dengan jaminan keabsahan properti dari *TypeScript Compiler*.

## Cara Menjalankan

Eksekusi berkas TypeScript secara langsung:

```bash
npx tsx index.ts
```

Atau kompilasi ke JavaScript terlebih dahulu lalu jalankan:

```bash
npx tsc index.ts && node index.js
```

## Catatan

- Pembagian definisi tipe ke file terpisah (`type-interface.ts`) dan meng-importnya (`import { ... } from './type-interface'`) meningkatkan keterbacaan dan kebersihan struktur kode.
- Properti `readonly` mencegah perubahan nilai variabel setelah inisialisasi awal.
- *Union types* membatasi isi nilai variabel hanya pada opsi-opsi yang sudah ditentukan saat kompilasi.
