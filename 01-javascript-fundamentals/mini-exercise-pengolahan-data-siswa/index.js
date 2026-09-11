import { siswa } from './data.js';

// 1. FILTER siswa yang lulus (nilai >= 70)
function siswaLulus(list) {
    return list.filter((s) => s.nilai >= 70);
}

// 2. MAP tambahin status lulus/tidak
function tambahStatus(list) {
    return list.map((s) => ({
        ...s,
        status: s.nilai >= 70 ? "Lulus" : "Tidak Lulus"
    }));
}

// 3. REDUCE hitung rata-rata nilai
function rataRataNilai(list) {
    const total = list.reduce((acc, s) => acc + s.nilai, 0);
    return total / list.length;
}

// 4. FIND nilai tertinggi (looping manual)
function nilaiTertinggi(list) {
    let tertinggi = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i].nilai > tertinggi.nilai) {
            tertinggi = list[i];
        }
    }
    return tertinggi;
}

// ==== PENGGUNAAN ====
console.log("=== Siswa Lulus ===");
console.log(siswaLulus(siswa));

console.log("\n=== Data dengan Status ===");
console.log(tambahStatus(siswa));

console.log("\n=== Rata-rata Nilai ===");
console.log(rataRataNilai(siswa));

console.log("\n=== Nilai Tertinggi ===");
console.log(nilaiTertinggi(siswa));