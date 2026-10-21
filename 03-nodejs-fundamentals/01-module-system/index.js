//Import produk dari data.js
const dataProduk = require('./data');
//import matematika
const {tambah, kurang, rataRata} = require('./matematika');
const perhitungan = require('./matematika');
//import eksperimen
const eksperimen = require('./eksperimen');


//console.log() seluruh produk
console.log(dataProduk);

//Cari produk bernama "Mouse" menggunakan .find()
const cariProduk = dataProduk.find((p) => p.nama === "mouse");
    //tampilkan hasilnya
    console.log(cariProduk)

console.log(tambah(10, 5));
console.log(kurang(10, 5));
console.log(rataRata(80, 90, 70));

console.log(perhitungan.tambah(10, 5));
// 15

console.log(perhitungan.kurang(10, 5));
// 5

console.log(perhitungan.rataRata(80, 90, 70));
// 80

console.log(eksperimen)