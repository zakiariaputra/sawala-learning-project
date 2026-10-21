function tambah(a, b) {
    return a + b;
};

function kurang(a, b) {
    return a - b;
};

function rataRata(a, b, c) {
    let jumlah = a + b + c;
    let rataRataNilai = jumlah / 3;
    return rataRataNilai;
};

module.exports = {
    tambah,
    kurang,
    rataRata
};