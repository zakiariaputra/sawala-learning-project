# 02. Fetch API

Materi minggu 3-4 — teknik mengambil data dari *external REST API* menggunakan Web API bawaan JavaScript `fetch()` dengan pendekatan `async`/`await`.

## Yang Dipelajari

- **HTTP Data Fetching**: Mengirimkan HTTP GET request ke endpoint publik (`https://dummyjson.com/products`).
- **Response Stream Parsing**: Mengubah stream mentah dari *HTTP response* menjadi objek JavaScript menggunakan `await response.json()`.
- **Pengolahan Data API**:
  - Menampilkan seluruh daftar produk yang diperoleh dari endpoint menggunakan `.forEach()`.
  - Menyaring produk dengan kriteria harga tertentu (misal: harga `< $100`) menggunakan `.filter()`.
  - Mengimplementasikan pencarian kata kunci produk secara *case-insensitive* menggunakan `.filter()` dan `.includes()`.
- **Error Handling Request**: Membungkus panggilan `fetch` dalam blok `try...catch` untuk menangkap potensi gangguan koneksi jaringan.

## Cara Menjalankan

```bash
node index.js
```

## Catatan

- Pemanggilan `fetch()` mengembalikan *Promise* yang menyelesaikan *Response object*.
- Proses `response.json()` juga bersifat asinkronus dan mengembalikan *Promise*, sehingga wajib dibubuhi kata kunci `await`.
- Selalu periksa struktur JSON kembalian API (seperti properti `.products`) sebelum melakukan manipulasi array.
