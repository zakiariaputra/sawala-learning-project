const data = [
    { nama: "Andi", umur: 25 },
    { nama: "Budi", umur: "dua puluh" },
    { nama: null, umur: 30 },
    { nama: "Deri", umur: 28 },
];

for (let i = 0; i < data.length; i++) {
    try {
        if (!data[i].nama) {
            throw new Error(`nama kosong di data ke-${i + 1}`);
        }
        if (typeof data[i].umur !== "number") {
            throw new TypeError(`umur harus angka di data ke-${i + 1}`);
        }
        console.log(`${data[i].nama} - ${data[i].umur} tahun`);
    } catch (error) {
        console.log("terjadi error!");
        console.log("pesan:", error.message);
    }
}