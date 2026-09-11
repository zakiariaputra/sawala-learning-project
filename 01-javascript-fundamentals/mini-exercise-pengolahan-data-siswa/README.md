# Mini Exercise: Pengolahan Data Siswa

Exercise latihan pengolahan data array of objects siswa menggunakan *Array Methods* (`filter`, `map`, `reduce`), struktur perulangan (*loops*), dan modularisasi kode (*ES Modules*).

## Fitur Utama

- **Pemisahan Modul Data**: Data siswa dipisahkan di file `data.js` dan diekspor menggunakan sintaks ES Modules (`export`).
- **Filter Siswa Lulus**: Menyaring daftar siswa yang memperoleh nilai `>= 70` menggunakan method `filter`.
- **Penambahan Status Lulus**: Memetakan (*mapping*) daftar siswa dan menambahkan properti `status` ("Lulus" / "Tidak Lulus") menggunakan method `map` dan *spread operator* (`...`).
- **Kalkulasi Rata-rata Nilai**: Menghitung rata-rata nilai seluruh siswa menggunakan method `reduce`.
- **Pencarian Nilai Tertinggi**: Menentukan siswa dengan nilai tertinggi menggunakan perulangan `for`.

## Cara Menjalankan

```bash
node index.js
```

## Catatan Teknis

- **ES Modules**: Menggunakan sintaks `import` dan `export` untuk menjaga struktur kode modular.
- **Array Higher-Order Functions**: Memanfaatkan `.filter()`, `.map()`, dan `.reduce()` untuk manipulasi data secara deklaratif dan imutabel.
- **Spread Operator**: Digunakan saat *mapping* untuk mempertahankan properti objek asli sambil menyisipkan properti baru.