// 02-fetch-api/index.js

const API_URL = 'https://dummyjson.com/products';

async function main() {
  try {
    // tahap 1: memanggil fetch() untuk mendapatkan objek response dari server
    const response = await fetch(API_URL);

    // tahap 2: mengubah stream response menjadi javaScript object yang bisa kita olah
    const data = await response.json();

    // data produk dari dummyjson berada di dalam properti .products yang bertipe Array
    const products = data.products;

    console.log("=== PRODUCT APP ===");
    console.log("1. Semua produk");
    console.log("2. Produk di bawah $100");
    console.log("3. Cari produk\n");

    // fitur 1 — semua produk (menggunakan forEach)
    console.log("--- 1. SEMUA PRODUK ---");
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.title} - $${product.price}`);
    });
    console.log("\n");


    // fitur 2 — produk murah (menggunakan filter < 100)
    console.log("--- 2. PRODUK DI BAWAH $100 ---");
    const cheapProducts = products.filter(product => product.price < 100);
    cheapProducts.forEach((product, index) => {
      console.log(`${index + 1}. ${product.title} - $${product.price}`);
    });
    console.log("\n");


    // fitur 3 — Cari produk (menggunakan filter & includes)
    const keyword = "phone"; // nilai pencarian langsung di kode
    console.log(`--- 3. CARI PRODUK (Kata kunci: "${keyword}") ---`);

    const searchResults = products.filter(product =>
      product.title.toLowerCase().includes(keyword.toLowerCase())
    );

    if (searchResults.length === 0) {
      console.log(`Produk dengan kata kunci "${keyword}" tidak ditemukan.`);
    } else {
      searchResults.forEach((product, index) => {
        console.log(`${index + 1}. ${product.title} - $${product.price}`);
      });
    }

  } catch (error) {
    console.error("Terjadi error saat mengambil data:", error);
  }
}

// jalankan program
main();
