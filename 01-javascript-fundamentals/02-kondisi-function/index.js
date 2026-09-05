const namaSiswa = "Aria"; //string
let nilai = 85; //number
let kehadiran = 92; //number

//kondisi fungsi untuk memvalidasi nilai dari 5 kemungkinan
function cekNilai(nilai) {
    if (nilai < 0 || nilai > 100) {
        return ("nilai tidak valid")
    } else if (nilai >= 90) {
        return ("sangat baik");
    } else if (nilai >= 75) {
        return ("lulus");
    } else if (nilai >= 50) {
        return ("remedial");
    } else {
        return ("tidak lulus");
    }
}

//kondisi fungsi untuk memvalidasi kehadiran dari 5 kemungkinan
function cekKehadiran(kehadiran) {
    if (kehadiran < 0 || kehadiran > 116) {
        return ("jumlah hari tidak valid");
    } else if (kehadiran >= 111) {
        return ("sangat rajin");
    } else if (kehadiran >= 86) {
        return ("rajin");
    } else if (kehadiran >= 65) {
        return ("perlu ditingkatkan");
    } else {
        return ("zona merah");
    }
}

//kondisi fungsi untuk memvalidasi kelulusan berdasarkan nilai dan kehadiran
function cekKelulusan(nilai, kehadiran) {
    if (nilai >= 75 && kehadiran >= 80) {
        return ("lulus");
    } else {
        return ("Tidak Lulus");
    }
}

//menampilkan hasil
console.log("Nana Siswa : ", namaSiswa);
console.log("Nilai : ", nilai);
console.log("Status Nilai : ", cekNilai(nilai));
console.log("Kehadiran : ", kehadiran);
console.log("Status Kehadiran : ", cekKehadiran(kehadiran));
console.log("------------------------------------");
console.log("Status Kelulusan : ", cekKelulusan(nilai, kehadiran));