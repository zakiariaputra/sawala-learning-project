import { hitungDiskon } from './math.js';   //import function hitungDiskon(harga, diskon) dari './math.js'

const baju = hitungDiskon(100000, 20);
console.log("Harga yg telah dipotong: ", baju.hasil);
console.log("Harga yg dipotong: ", baju.potongan);