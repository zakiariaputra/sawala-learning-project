# Mini Project: React Dashboard

Mini project penutup Milestone 4 (React Fundamentals) — membangun dashboard produk sederhana berbasis **React + TypeScript** dengan ferramenta **Vite**. Fokus pembelajarannya pada materi minggu 7-8: JSX & component, props & state, event handling, conditional & list rendering, serta `useEffect` dasar.

## Fitur Utama

- **Pemisahan Komponen Small**: `Button`, `Card`, `StatCard`, dan `Modal` dibuat sebagai komponen terpisah supaya mudah dipakai ulang.
- **Aliran Data Parent ke Child**: `App` sebagai parent mengirim data produk dan fungsi callback ke `Card`, lalu `Card` meneruskan aksi ke `Button` di dalamnya.
- **State Aplikasi**: `products`, `isLoading`, `source`, `search`, `kategori`, `keranjang`, dan `produkTerpilih` dikelola dengan `useState`.
- **Pencarian & Filter**: pencarian nama produk (live, *case-insensitive*) dan filter kategori yang bisa digabung.
- **List Rendering**: daftar produk dirender dengan `.map()` memakai `key` berupa `id` produk.
- **Conditional Rendering**: tampilan berbeda untuk kondisi *loading*, hasil filter kosong, keranjang kosong, dan modal detail.
- **Event Handling**: `onClick` (tambah/hapus keranjang, buka/tutup modal), `onChange` (input pencarian & select kategori), dan `onSubmit` (form pencarian).
- **Keranjang Sederhana**: produk bisa ditambah satu kali saja, dihapus, dan total belanja dihitung otomatis.
- **Modal Detail**: menampilkan detail produk, bisa ditutup lewat tombol *Tutup* atau tombol `Escape`.
- **`useEffect` untuk Ambil Data**: data diambil dari DummyJSON REST API saat komponen mount, dengan status *loading* dan pesan sumber data (API / data lokal).
- **Fallback Data Lokal**: bila API tidak bisa diakses, aplikasi otomatis memakai data lokal dari `src/data.ts` sehingga demo tetap berjalan.
- **Statistik Dinamis**: total produk, jumlah stok menipis, rata-rata rating, dan nilai total stok dihitung dari hasil filter yang sedang tampil.

## Struktur Folder

```
mini-project-react-dashboard/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── StatCard.tsx
│   ├── api.ts
│   ├── data.ts
│   ├── types.ts
│   ├── utils.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Perintah lain yang tersedia:

```bash
npm run build      # cek tipe data lalu build versi produksi ke folder dist/
npm run preview    # jalankan hasil build versi produksi
npm run typecheck  # cek tipe data TypeScript saja
```

## Topik React yang Dipelajari

| Materi | Penerapan di Proyek |
|--------|---------------------|
| JSX & Component | Seluruh tampilan ditulis dengan JSX, dipecah menjadi beberapa komponen kecil |
| Props & State | `Card` menerima `product` dan callback lewat props, `App` menyimpan seluruh state aplikasi |
| Event Handling | `onClick`, `onChange`, `onSubmit`, dan event `keydown` untuk tombol Escape |
| Conditional Rendering | Percabangan tampilan untuk loading, data kosong, badge stok menipis, dan modal |
| List Rendering | Daftar produk dan isi keranjang dirender dengan `.map()` + `key` |
| `useEffect` Dasar | Fetch data saat mount, cleanup listener keyboard, dan update state setelah data masuk |

## Catatan Teknis

- **TypeScript Ketat**: `strict: true` aktif, seluruh data produk memakai `interface Product` sehingga tidak ada `any` yang lolos.
- **Pemisahan Tanggung Jawab**: `api.ts` menangani komunikasi dengan server, `data.ts` menyimpan data cadangan, `utils.ts` berisi fungsi format, dan komponen hanya menangani tampilan.
- **Konversi Mata Uang**: harga dari DummyJSON satuan USD, dikonversi ke Rupiah memakai kurs tetap `16000` yang diletakkan di satu konstanta `KURS_USD_IDR`.
- **Pengambilan Data per Kategori**: produk diambil dari lima kategori sekaligus memakai `Promise.all` agar dashboard berisi lebih dari satu jenis barang.
- **Penggunaan `key`**: `key` pada list rendering memakai `id` produk supaya React bisa mengenali elemen yang berubah saat filter bekerja.
- **Tampilan Responsif**: layout memakai CSS Grid dengan `auto-fit` / `auto-fill` agar rapi di layar desktop maupun mobile.
