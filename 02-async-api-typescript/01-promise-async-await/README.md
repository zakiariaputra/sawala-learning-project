# 01. Promise & Async/Await

Materi minggu 3-4 — pengenalan pemrograman asinkronus di JavaScript menggunakan `Promise` dan sintaks modern `async`/`await` untuk mengelola alur proses asynchronous berseri.

## Yang Dipelajari

- **Promise Creation**: Membuat *custom promise* menggunakan `new Promise((resolve, reject) => { ... })`.
- **Simulasi Asinkronus**: Memanfaatkan `setTimeout` untuk meniru operasi *I/O delay* (seperti query database atau request jaringan).
- **Async/Await Syntax**: Menyederhanakan penulisan kode asinkronus agar terlihat dan dapat dibaca layaknya kode sinkronus (*synchronous-looking code*).
- **Simulasi Pemesanan Multi-Tahap**:
  1. Memilih produk (`memilihProduk`) — 1 detik delay.
  2. Mengecek ketersediaan stok (`mengecekStok`) — 1 detik delay.
  3. Memproses pembayaran saldo pengguna (`memprosesPembayaran`) — 2 detik delay.
- **Error Handling**: Menangkap kegagalan (`reject`) pada alur proses menggunakan blok `try...catch...finally`.

## Cara Menjalankan

```bash
node index.js
```

## Catatan

- Fungsi yang menggunakan kata kunci `await` wajib ditandai dengan kata kunci `async`.
- `reject()` akan langsung melemparkan alur eksekusi ke dalam blok `catch`, membatalkan langkah-langkah berikutnya secara otomatis.
- Blok `finally` akan selalu dieksekusi di akhir proses, baik simulasi sukses maupun terjadi kesalahan (*error*).
