//1A. array -> objek -> data nama dan nilai
const siswa = [
    { nama: "Aria", nilai: 85 },
    { nama: "Budi", nilai: 75 },
    { nama: "Citra", nilai: 92 },
    { nama: "Deni", nilai: 67 },
    { nama: "Rizki", nilai: 74 }
];

//2A. latihan menggunakan for standar
for (let i = 0; i < siswa.length; i++) {
    console.log(siswa[i].nama, " - ", siswa[i].nilai);
}; console.log("menggunakan for standar -----\n");

//3A. latihan menggunakan for of
for (const j of siswa) {
    console.log(j.nama);
}; console.log("menggunakan for of -----\n");

//4A. latihan menggunakan forEach
siswa.forEach(k => {
    console.log(`${k.nama} mendapatkan nilai ${k.nilai}`);
}); console.log("menggunakan forEach -----\n");



//5A. latihan menggunakan map()
const namaSiswa = siswa.map(l => l.nama);

console.log(namaSiswa);
console.log("menggunakan map() -----\n");

//6A. latihan menggunakan filter untuk menyaring data nilai yg >= 75 dan map mengambil namanya aja
const siswaLulus = siswa
    .filter(m => m.nilai >= 75)
    .map(l => l.nama);

console.log(siswaLulus);
console.log("menggunakan filter() dan map() -----\n");

//7A. latihan menggunakan find()
const cariSiswa = siswa.find(n => n.nama === "Citra");

console.log(cariSiswa);
console.log("menggunakan find() -----\n");

//8A. latihan menggunakan reduce()
const angka = [10, 20, 30, 40];

const total = angka.reduce((acc, nilai) => {
    return acc + nilai;
}, 0);

console.log(total);
console.log("menggunakan reduce() -----\n");