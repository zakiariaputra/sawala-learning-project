const namaSiswa = "Aria"; //string
let nilai = 85; //number
let kondisi = nilai >= 75; //boolean
const nomorPeserta = 12345678901234567890n; //bigint
let catatan; //undefined
let nilaiTambahan = null; //null
const idSiswa = Symbol("id"); //symbol
const siswa = {
    kelas: "XII RPL 2",
    jurusan: "Rekayasa Perangkat Lunak"
}; //object


console.log("Nama Siswa : " + namaSiswa);
console.log("Kelas : " + siswa.kelas);
console.log("Jurusan : " + siswa.jurusan);
console.log("Nilai : " + nilai);

console.log("Kondisi : " + kondisi);
console.log("Nomor Peserta : " + nomorPeserta);
console.log("Catatan : " + catatan);
console.log("Nilai Tambahan : " + nilaiTambahan);
console.log("ID : " + String(idSiswa));
