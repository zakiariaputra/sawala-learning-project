# Mini Exercise: Kalkulator Sederhana

Exercise sederhana untuk mengimplementasikan fungsi matematika dasar dan percabangan dalam JavaScript menggunakan *Function* dan *Switch-Case*.

## Fitur Utama

- **Operasi Aritmatika Dasar**: Mendukung penjumlahan (`+`), pengurangan (`-`), perkalian (`*`), dan pembagian (`/`).
- **Penanganan Pembagian Nol**: Mencegah kesalahan hasil tak hingga dengan memberikan pesan peringatan jika pembagi bernilai `0`.
- **Validasi Operator**: Memberikan tanggapan `"Operator tidak valid"` apabila masukan operator tidak dikenali.

## Cara Menjalankan

```bash
node index.js
```

## Catatan Teknis

- **Switch-Case Statement**: Digunakan untuk mencocokkan jenis operator aritmatika secara bersih dan terstruktur.
- **Defensive Programming**: Memeriksa nilai pembagi sebelum melakukan kalkulasi pembagian untuk menghindari skenario *division by zero*.