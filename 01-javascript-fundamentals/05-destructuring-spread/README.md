# 05. Destructuring & Spread Operator

Materi minggu 1-2 — pengenalan fitur ES6 *Destructuring Assignment* (Array & Object) dan *Spread Operator* (`...`) untuk mengekstrak dan memanipulasi data JavaScript modern secara efisien.

## Yang Dipelajari

- **Destructuring Array**: Membongkar elemen array ke dalam variabel terpisah secara ringkas berdasarkan urutan indeks (`const [buah1, buah2, buah3] = buah`)
- **Destructuring Object**: Mengekstrak nilai properti dari objek ke dalam variabel berdasarkan nama kunci (*key*) properti (`const { nama, umur, kelas } = siswa`)
- **Spread Operator pada Array**: Menggabungkan atau memperluas elemen array ke dalam array baru (`[...angka1, 4, 5]`)
- **Spread Operator pada Object**: Menyalin properti objek dan menambahkan/memperbarui properti baru secara imutabel (`{ ...siswa, kelas: "XI RPL" }`)

## Cara Menjalankan

```bash
node index.js
```
## Catatan

- **Destructuring Array** berpatokan pada urutan indeks elemen
- **Destructuring Object** berpatokan pada pencocokan nama kunci (*key*) properti
- **Spread Operator (`...`)** membuat salinan data (*shallow copy*), membantu menjaga imutabilitas data
