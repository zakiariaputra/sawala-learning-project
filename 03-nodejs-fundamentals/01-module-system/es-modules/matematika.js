function tambah(a, b){
    return a + b;
};

function kurang(a, b){
    return a - b;
};

function rataRata(nilai){
    const jumlah = nilai.reduce((sum, p) => sum + p, 0);
    const nilaiRataRata = jumlah / nilai.length;

    return nilaiRataRata;
};

export {
    tambah,
    kurang,
    rataRata
};
    
