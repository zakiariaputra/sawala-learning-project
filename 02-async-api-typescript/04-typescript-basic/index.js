// MAIN - MENGGUNAKAN TYPE & INTERFACE
// ---------- 1. ARRAY PRODUK --
const produk = [
    { id: 1, nama: "Keyboard", kategori: "Elektronik", harga: 250000, stok: 5 },
    { id: 2, nama: "Buku Tulis", kategori: "Buku", harga: 15000, stok: 20 },
    { id: 3, nama: "Mouse", kategori: "Elektronik", harga: 120000, stok: 8 },
    { id: 4, nama: "Casing HP", kategori: "Aksesoris", harga: 50000, stok: 15 },
    { id: 5, nama: "Buku Gambar", kategori: "Buku", harga: 25000, stok: 10 },
];
// ---------- 2. FILTER --
const elektronik = produk.filter((p) => p.kategori === "Elektronik");
const murah = produk.filter((p) => p.harga < 200000);
const cariBuku = produk.filter((p) => p.nama.includes("Buku"));
console.log("=== Elektronik ===");
console.log(elektronik);
console.log("\n=== Harga < 200000 ===");
console.log(murah);
console.log("\n=== Nama mengandung 'Buku' ===");
console.log(cariBuku);
// ---------- 3. REDUCE (TOTAL NILAI) --
const totalNilai = produk.reduce((total, p) => total + p.harga * p.stok, 0);
console.log("\n=== Total Nilai Barang ===");
console.log(`Total: Rp ${totalNilai.toLocaleString("id-ID")}`);
// ---------- 4. PENGGUNA (readonly & opsional) --
const user = {
    id: 101,
    nama: "Andi",
};
console.log("\n=== Pengguna ===");
console.log(user);
// ---------- 5. STATUS (union type) --
const statusSaya = "aktif";
console.log("\n=== Status ===");
console.log("Status:", statusSaya);
// ---------- 6. ALAMAT (type alias) --
const alamat = {
    jalan: "Jl. Merdeka No. 10",
    kota: "Jakarta",
    kodePos: "10110",
};
console.log("\n=== Alamat ===");
console.log(alamat);
// ---------- 7. KALKULATOR (interface function) --
const tambah = (a, b) => a + b;
console.log("\n=== Kalkulator ===");
console.log("5 + 3 =", tambah(5, 3));
// ---------- 8. PRODUK DIGITAL (extends) --
const ebook = {
    id: 6,
    nama: "E-Book TypeScript",
    kategori: "Buku",
    harga: 75000,
    stok: 999,
    ukuranFile: 12,
};
console.log("\n=== Produk Digital ===");
console.log(ebook);
export {};
