# 06. ES Modules

Materi minggu 1-2 — pengenalan fitur ES6 *ES Modules* (`import` & `export`) untuk memisahkan logika program ke dalam modul-modul terpisah agar kode lebih rapi, terstruktur, dan dapat digunakan kembali (*reusable*).

## Yang Dipelajari

- **Exporting Module**: Menggunakan sintaks `export { ... }` pada `math.js` untuk mengekspor fungsi (misal `hitungDiskon`) agar bisa diakses dari luar berkas.
- **Importing Module**: Menggunakan sintaks `import { ... } from './math.js'` pada `index.js` untuk mengimpor fungsi dari modul lain.
- **Penerapan ES Modules**: Memisahkan fungsi logika kalkulasi diskon (`math.js`) dan mengeksekusinya di berkas utama (`index.js`).

## Cara Menjalankan

```bash
node index.js
```

## Catatan

- **Named Exports**: Menggunakan tanda kurung kurawal `{ hitungDiskon }` saat meng-export dan meng-import untuk memastikan nama identifikasi modul sesuai.
- Ekstensi file (`.js`) wajib disertakan dalam sintaks `import` saat menggunakan ES Modules secara native pada path relatif (misal `./math.js`).
- Penggunaan modul mempermudah pemeliharaan kode (*maintainability*), pembagian tanggung jawab (*separation of concerns*), serta pengujian (*testing*).