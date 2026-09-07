//1. Destructuring Array

const buah = ["Apel", "Mangga", "Jeruk"];

// const buah1 = buah[0];       ──├
// const buah2 = buah[1];       ──├───> contoh jika tidak menggunakan destructuring
// const buah3 = buah[2];       ──└

const [buah1, buah2, buah3] = buah;    // menggunakan destructing

console.log("Buah ", buah2);
console.log("Destructuring Array -----\n");


//2. Destructuring Object

const siswa = {
    nama: "Aria",
    umur: 17,
    kelas: "XI RPL"
};

// const nama = siswa.nama;  ───├
// const umur = siswa.umur;  ───├──> contoh jika tidak menggunakan destructuring
// const umur = siswa.umur;  ───└

const { nama, umur, kelas } = siswa;   // menggunakan destructing

console.log("Nama Siswa: ", nama);
console.log("Kelas: ", kelas);
console.log("Destructuring Object -----\n");


//3. Spread Operator (array)

const angka1 = [1, 2, 3];

const angka2 = [...angka1, 4, 5];   //"...angka1" nambahin data yg ada didalam array angka1

console.log(angka2);
console.log("Spread Operator -----\n");


//4. Spread Object

const siswaSpread = {
    nama: "Aria",
    umur: 17
};

const siswaSpreadBaru = {
    ...siswa,
    kelas: "XI RPL"
};

console.log(siswaSpreadBaru);
console.log("Spread Object -----\n");
