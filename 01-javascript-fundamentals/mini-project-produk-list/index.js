import { produk } from './data.js';

// 1. FILTER by kategori
function filterByKategori(list, kategori) {
    return list.filter((p) => p.kategori === kategori);
}

// 2. FIND by nama
function cariByNama(list, nama) {
    return list.find((p) => p.nama === nama);
}

// 3. MAP ambil nama aja
function ambilNamaProduk(list) {
    return list.map((p) => p.nama);
}

// 4. SEARCH by keyword (case-insensitive)
function searchProduk(list, keyword) {
    return list.filter((p) =>
        p.nama.toLowerCase().includes(keyword.toLowerCase())
    );
}

// 5. REDUCE total harga
function totalHarga(list) {
    return list.reduce((acc, p) => acc + p.harga, 0);
}

// helper buat nampilin hasil rapi
function tampilkanProduk(list) {
    list.forEach((p) => console.log(`- ${p.nama} (${p.kategori}) - Rp${p.harga.toLocaleString('id-ID')}`));
}

// ==== PENGGUNAAN ====

console.log("=== Produk kategori Elektronik ===");
tampilkanProduk(filterByKategori(produk, "Elektronik"));

console.log("\n=== Cari produk 'Keyboard' ===");
console.log(cariByNama(produk, "Keyboard"));

console.log("\n=== Semua nama produk ===");
console.log(ambilNamaProduk(produk));

console.log("\n=== Search 'buku' ===");
tampilkanProduk(searchProduk(produk, "buku"));

console.log("\n=== Total harga semua produk ===");
console.log(`Rp${totalHarga(produk).toLocaleString('id-ID')}`);