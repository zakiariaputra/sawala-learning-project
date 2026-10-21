// data produk
const produk = {
  nama: "Keyboard",
  harga: 250000,
  stok: 5,        // ubah jadi 0 untuk menguji "Stok Habis"
  saldoUser: 300000 // ubah jadi 50000 untuk menguji "Pembayaran Gagal"
};

// --- promise 1: memilih produk (1 detik) ---
function memilihProduk() {
  return new Promise((resolve) => {
    console.log(`\n[1/4] Memilih produk: ${produk.nama}...`);
    setTimeout(() => {
      resolve(produk);
    }, 1000);
  });
}

// --- promise 2: mengecek stok (1 detik) ---
function mengecekStok(dataProduk) {
  return new Promise((resolve, reject) => {
    console.log("[2/4] Mengecek ketersediaan stok...");
    setTimeout(() => {
      if (dataProduk.stok > 0) {
        resolve("→ Stok tersedia");
      } else {
        reject("→ Stok habis");
      }
    }, 1000);
  });
}

// --- promise 3: memproses pembayaran (2 detik) ---
function memprosesPembayaran(dataProduk) {
  return new Promise((resolve, reject) => {
    console.log("[3/4] Memproses pembayaran...");
    setTimeout(() => {
      if (dataProduk.saldoUser >= dataProduk.harga) {
        resolve("→ Pembayaran berhasil");
      } else {
        reject("→ Saldo tidak cukup! Pembayaran gagal");
      }
    }, 2000);
  });
}

// --- fungsi utama (async/await + try...catch) ---
async function simulasiPemesanan() {
  console.log("=== MEMULAI SIMULASI PEMESANAN ===");

  try {
    // 1. memilih produk
    const dataDipilih = await memilihProduk();

    // 2. cek stok
    const hasilStok = await mengecekStok(dataDipilih);
    console.log(hasilStok);

    // 3. proses pembayaran
    const hasilBayar = await memprosesPembayaran(dataDipilih);
    console.log(hasilBayar);

    // 4. output sukses
    console.log("\n[4/4] Pesanan berhasil!");

  } catch (error) {
    // menangkap reject() dari cek stok maupun pembayaran
    console.log(error);
    console.log("\nPesanan gagal!");
  } finally {
    console.log("==================================");
  }
}

// menjalankan simulasi
simulasiPemesanan();
