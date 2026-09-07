# 04. Looping & Array Methods

Materi minggu 1-2 — teknik perulangan (*looping*) dan penggunaan *higher-order array methods* untuk mengolah serta memanipulasi data array di JavaScript.

## Yang Dipelajari

- **Perulangan Konvensional**:
  - `for` standar: Iterasi array menggunakan indeks penunjuk (`for (let i = 0; i < siswa.length; i++)`)
  - `for...of`: Perulangan yang lebih simpel dan ekspresif untuk mengambil setiap elemen array secara langsung
- **Array Iteration & Transformation Methods**:
  - `forEach()`: Menjalankan fungsi callback untuk setiap elemen array (digunakan saat tidak memerlukan array baru)
  - `map()`: Memetakan/mentransformasi elemen array lama menjadi array baru (misal: mengekstrak daftar nama siswa)
- **Array Searching & Filtering Methods**:
  - `filter()`: Menyaring data berdasarkan kriteria tertentu (misal: nilai `>= 75`) dan dapat digabung (*chaining*) dengan `.map()`
  - `find()`: Mencari elemen pertama yang cocok dengan kondisi pencarian (misal: objek siswa bernama "Citra")
- **Array Reduction**:
  - `reduce()`: Mengakumulasi seluruh elemen array menjadi satu nilai tunggal (misal: menghitung total angka)

## Cara Menjalankan

```bash
node index.js
```

## Catatan

- `forEach()` tidak mengembalikan nilai (*return value* `undefined`), gunakan `map()` jika ingin menghasilkan array baru dari hasil transformasi
- `filter()` mengembalikan array berisi semua elemen yang memenuhi syarat, sedangkan `find()` hanya mengembalikan satu objek/elemen pertama yang cocok
- `reduce()` membutuhkan akumulator (`acc`) dan nilai awal (*initial value*, misal `0`) untuk pengolahan akumulasi nilai
