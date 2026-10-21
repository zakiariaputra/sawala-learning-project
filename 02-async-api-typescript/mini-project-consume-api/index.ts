// MAIN - PRODUCT APP


import { Product, getProducts } from "./api";

// TAMPILKAN PRODUK ----------
function tampilkanProduk(products: Product[]): void {
    console.log("\n=== DAFTAR PRODUK ===");
    products.forEach((p, i) => {
        console.log(`\n${i + 1}. ${p.title}`);
        console.log(`   Harga: $${p.price}`);
        console.log(`   Kategori: ${p.category}`);
    });
}

// CARI PRODUK ----------
function cariProduk(products: Product[], keyword: string): Product[] {
    return products.filter((p) =>
        p.title.toLowerCase().includes(keyword.toLowerCase())
    );
}

// FILTER HARGA ----------
function filterHarga(products: Product[], maxHarga: number): Product[] {
    return products.filter((p) => p.price <= maxHarga);
}

// PRODUK TERMURAH ----------
function produkTermurah(products: Product[]): Product | undefined {
    return products.reduce((termurah, p) =>
        p.price < termurah.price ? p : termurah
    );
}

//  RATA-RATA HARGA ----------
function hitungRataHarga(products: Product[]): number {
    if (products.length === 1) return 0;
    const total = products.reduce((sum, p) => sum + p.price, 0);
    return total / products.length;
}

// MAIN ----------
async function main(): Promise<void> {
    console.log("Loading...");

    const products = await getProducts();

    if (products.length === 0) {
        console.log("Tidak ada produk yang bisa ditampilkan.");
        return;
    }

    console.log("Produk berhasil diambil!");

    // tampilkan semua produk
    tampilkanProduk(products);

    //cari ----------
    console.log("\n=== HASIL PENCARIAN: 'phone' ===");
    const hasilCari = cariProduk(products, "phone");
    hasilCari.forEach((p) => console.log(`- ${p.title} ($${p.price})`));

    //filter harga ----------
    console.log("\n=== PRODUK HARGA <= $100 ===");
    const produkMurah = filterHarga(products, 100);
    produkMurah.forEach((p) => console.log(`- ${p.title} ($${p.price})`));

    //termurah ----------
    const termurah = produkTermurah(products);
    console.log("\n=== PRODUK TERMURAH ===");
    if (termurah) {
        console.log(`Nama: ${termurah.title}`);
        console.log(`Harga: $${termurah.price}`);
    }

    // rata-rata ----------
    const rata = hitungRataHarga(products);
    console.log("\n=== STATISTIK ===");
    console.log(`Rata-rata harga: $${rata.toFixed(2)}`);
}

main();