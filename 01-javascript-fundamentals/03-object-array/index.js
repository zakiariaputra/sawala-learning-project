//1A. latihan membuat object siswa yang punya 5 properti
const siswa = {
    nama: "Aria",
    kelas: "XII RPL 2",
    jurusan: "Rekayasa Perangkat Lunak",
    umur: 17,
    nilai: 85
};
//1B. tampilkan semua data dari objek siswa ke console
console.log(siswa);

//1C. menampilkan data nilai siswa sebelum diubah
console.log("nilai sebelum diubah : ", siswa.nilai);

//1D. mengubah propertii objek
siswa.nilai = 90;

//1E. menampilkan data nilai siswa setelah diubah
console.log("nilai setelah diubah : ", siswa.nilai);
console.log("latihan 1 ==========");
console.log("_");


//2A. latihan membuat array dengan nama variabel hobi yang punya 5 properti
const hobi = [
    "membaca",
    "berenang",
    "bermain gitar",
    "memasak",
    "berkebun"
];

//2B. latihan menampilkan data siswa diconsole
console.log("hobi 1 : ", hobi[0]);
console.log("hobi 2 : ", hobi[1]);
console.log("hobi 3 : ", hobi[2]);
console.log("hobi 4 : ", hobi[3]);
console.log("hobi 5 : ", hobi[4]);
console.log("latihan 2 ==========");
console.log("_");


//3A. latihan membuat array of object
const daftarSiswa = [
    {
        Nama: "Aria",
        Kelas: "XII RPL 2",
        Nilai: 85,
    },
    {
        Nama: "Budi",
        Kelas: "XII RPL 3",
        Nilai: 78,
    },
    {
        Nama: "Citra",
        Kelas: "XII RPL 4",
        Nilai: 92
    }
];

//3B. menampilkan data siswa diconsole
console.log(`Nama: ${daftarSiswa[0].Nama}`);
console.log(`Kelas: ${daftarSiswa[0].Kelas}`);
console.log(`Nilai: ${daftarSiswa[0].Nilai}`);
console.log(`Nama: ${daftarSiswa[1].Nama}`);
console.log(`Kelas: ${daftarSiswa[1].Kelas}`);
console.log(`Nilai: ${daftarSiswa[1].Nilai}`);
console.log(`Nama: ${daftarSiswa[2].Nama}`);
console.log(`Kelas: ${daftarSiswa[2].Kelas}`);
console.log(`Nilai: ${daftarSiswa[2].Nilai}`);

