# Mini Project: Produk List

Mini project penutup Milestone 1 (JavaScript Fundamentals) — mengimplementasikan penyaringan, pencarian, pemetaan, dan kalkulasi data produk menggunakan *Array Methods* (`filter`, `find`, `map`, `reduce`, `forEach`) serta *ES Modules* (`import` / `export`).

## Fitur Utama

- **Pemisahan Data Modul**: Data produk disimpan terpisah pada `data.js` dan di-export menggunakan sintaks ES Module.
- **Filter Kategori**: Menyaring daftar produk berdasarkan kategori tertentu (`filterByKategori`).
- **Cari Produk Spesifik**: Mencari item produk tunggal berdasarkan nama (`cariByNama`).
- **Ekstraksi Nama Produk**: Mengambil array yang hanya berisi daftar nama seluruh produk (`ambilNamaProduk`).
- **Pencarian Kata Kunci**: Pencarian nama produk fleksibel secara *case-insensitive* (`searchProduk`).
- **Kalkulasi Total Harga**: Menghitung jumlah total harga seluruh produk menggunakan `reduce` (`totalHarga`).
- **Format Tampilan**: Menampilkan daftar produk dengan format mata uang Indonesia yang rapi (`toLocaleString('id-ID')`).

## Cara Menjalankan

```bash
node index.js
```

## Catatan Teknis

- Penggunaan **ES Modules** (`import` / `export`) memisahkan struktur data (`data.js`) dari logika bisnis (`index.js`).
- **Immutable Methods**: Method `.filter()` dan `.map()` mengembalikan array baru tanpa merubah data produk asli.
- **Akumulasi Data**: Method `.reduce()` digunakan untuk menjumlahkan harga seluruh produk secara efisien.