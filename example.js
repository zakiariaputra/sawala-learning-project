const siswa = [
	{ nama: "Aria", nilai: 95 },
	{ nama: "Budi", nilai: 75 },
	{ nama: "Citra", nilai: 92 },
	{ nama: "Deni", nilai: 67 },
	{ nama: "Rizki", nilai: 74 }
];

const tugas1 = siswa.forEach(p => {
	console.log(p.nama);
});
console.log("tugas 1 =====\n");

const tugas2 = siswa.forEach(p => {
	console.log(p.nama, "-", p.nilai);
});
console.log("tugas 2 =====\n");

const tugas3 = siswa.forEach(p => {
	console.log(p.nama, "mendapatkan nilai", p.nilai);
});
console.log("tugas 3 =====\n");

const tugas4 = siswa.forEach(p => {
	if (p.nilai >= 75) {
		console.log(p.nama, "-", p.nilai, "lulus");
	} else {
		console.log(p.nama, "-", p.nilai, "tidak lulus");
	}
});
console.log("tugas 4 =====\n");

const tugas5 = siswa
	.filter(p => p.nilai >= 75);
console.log(tugas5);
console.log("tugas 5 =====\n");

const tugas6 = siswa
	.filter(p => p.nilai < 75);
console.log(tugas6);
console.log("tugas 6 =====\n");

const tugas7 = siswa
	.filter(p => p.nilai >= 75)
	.forEach(n => { console.log(n.nama); });
console.log("tugas 7 =====\n");


const siswa2 = [
    { nama: "Aria", nilai: 85 },
    { nama: "Budi", nilai: 75 },
    { nama: "Citra", nilai: 92 }
];

const tugas8 = siswa2
	.map(p => {console.log(p.nama);});
console.log("tugas 8 =====\n");

const tugas9 = siswa2.map(p => ({
	nama: p.nama,
	nilai: p.nilai + 5
}));

console.log(tugas9);
console.log("tugas 9 =====\n");

const tugas10 = siswa2.map(p => `${p.nama} mendapatkan nilai ${p.nilai}`);

console.log(tugas10);
console.log("tugas 10 =====\n");


const tugas11 = siswa2
	.find(p => p.nama === "Citra");
console.log(tugas11);
console.log("tugas 11 =====\n");


const tugas12 = siswa
	.find(p => p.nilai === 67);
console.log(tugas12);
console.log("tugas 12 =====\n");


const namaDicari = "Rizki";
	const ketemu = siswa.find(p =>p.nama === namaDicari);
if (ketemu){
	console.log(`${namaDicari} ditemukan!`);
} else {
	console.log("siswa tidak ditmukan!");
} console.log("tugas 13 =====\n");


const produk = [
	{nama: "Keyboard", kategori: "Elektronik", harga: 250000},
	{nama: "Mouse", kategori: "Elektronik", harga: 150000},
	{nama: "Buku Javascript", kategori: "Buku", harga: 80000},
	{nama: "Buku Python", kategori: "Buku", harga: 90000},
	{nama: "Headset", kategori: "Elektronik", harga: 350000}
];

const tugas14 = produk
	.forEach(p => {console.log(`${p.nama} - Rp${p.harga}`);});
console.log("tugas 14 =====\n");

const tugas15 = produk
	.filter(p => p.kategori === "Elektronik");
console.log(tugas15);
console.log("tugas 15 =====\n");


const tugas16 = produk
	.filter(p => p.harga < 200000);
console.log(tugas16);
console.log("tugas 16 =====\n");


const tugas17 = produk
	.find(p => p.nama === "Keyboard");
console.log(tugas17);
console.log("tugas 17 =====\n");



const tugas18 = produk
	.map(p => p.nama);
console.log(tugas18);
console.log("tugas 18 =====\n");


const tugas19 = produk
	.reduce((p, q) => {
	return p + q.harga;
}, 0);
console.log(tugas19);
console.log("tugas 19 =====\n");


const tugas20 = produk
	.filter(a => a.kategori === "Elektronik")
	.reduce((b, c) => {
	return b + c.harga;
}, 0);
console.log(tugas20);
console.log("tugas 20 =====\n");


const tugas21 = produk
	.reduce((p, q) => {if(q.harga > p.harga){
	return q;}
	return p;
});
console.log(tugas21);
console.log("tugas 21 =====\n");


const tugas22 = produk
	.filter(a => a.kategori === "Elektronik")
	.map(b => b.nama);
console.log(tugas22);
console.log("tugas 22 =====\n");


const tugas23 = produk
	.filter(a => a.harga < 200000)
	.map(b => b.nama);
console.log(tugas23);
console.log("tugas 23 =====\n");


const tugas24 = produk
	.filter(p => p.kategori === "Buku")
	.forEach(p => {console.log(`${p.nama} - Rp${p.harga}`);});
console.log("tugas 24 =====\n");


const tugas25 = produk
	.find(p => p.nama === "Keyboard")
if(tugas25){console.log(`Harga ${tugas25.nama}: Rp${tugas25.harga}`);
} else{console.log(`${tugas25.nama} tudak ditemukan`);}
console.log("tugas 25 =====\n");


const mp1 = produk
	.forEach(p => {console.log(`${p.nama} - Rp${p.harga}`);});
console.log("mini proyek 1 =====\n");


const mp2 = produk
	.filter(p => p.kategori === "Elektronik")
	.forEach(p => {console.log(`${p.nama}`);});
console.log("mini proyek 2 =====\n");


const mp3 = produk
	.filter(p => p.harga < 200000);
console.log(mp3);
console.log("mini proyek 3 =====\n");


const keyword = "Keyboard";
const mp4 = produk
	.find(p => p.nama === keyword);
if(mp4){
	console.log(`produk ditemukan! \n ${mp4.nama} - Rp${mp4.harga}`);
} else {console.log(`${keyword} tidak ditemukan`);}
console.log("mini proyek 4 =====\n");


const mp5 = produk
	.reduce((nilai, p) => {
	return nilai + p.harga
}, 0);
console.log(mp5);
console.log("mini proyek 5 =====\n");


const mp6 = produk
	.reduce((nol, p) => {
	if (p.harga > nol.harga){
		return p;
	}
	return nol;
});
console.log(`produk termahal: ${mp6.nama} - Rp${mp6.harga}`);
console.log("mini proyek 6 =====\n");


const angka = [10, 25, 7, 40, 15];

const latA = angka
	.reduce((x, y) => {
if(y > x){
	return y;
}
return x;
});
console.log(latA);
console.log("latihan a =====\n");

const latB = produk
	.reduce((x, y) => {
if(y.harga > x.harga){
	return y;
}
return x;
});
console.log(latB);
console.log("latihan b =====\n");


const latC = produk
	.reduce((x, y) => y.harga > x.harga ? y:x);
console.log(latC);
console.log("latihan c =====\n");


const latihan1 = produk
	.filter(filEle => filEle.kategori === "Elektronik")
	.reduce((accumulator, ttlEle) => {return ttlEle.harga + accumulator;}, 0);
console.log(latihan1);
console.log("latihan 1 =====\n");


const latihan2 = produk
	.reduce((accumulator, terMrhEle) => terMrhEle.harga < accumulator.harga ? terMrhEle : accumulator);
console.log(`${latihan2.nama} - Rp${latihan2.harga}`);
console.log("latihan 2 =====\n");


const latihan3 = produk
	.filter(filHrga => filHrga.harga >= 100000)
	.map(nma => {console.log(nma.nama);});
console.log("latihan 3 =====\n");


const latihanA = produk
	.filter(filBku => filBku.kategori === "Buku")
	.forEach(filBku => {console.log(filBku.nama);});
console.log("latihan a =====\n");

const latiahanB = produk
	.filter(filNma => filNma.harga < 200000)
	.map(filNma => {console.log(filNma.nama);});
console.log("latihan b =====\n");

const latihanC = produk
	.filter(eleTerMhl => eleTerMhl.kategori === "Elektronik")
	.reduce((accumulator, eleTerMhl) => eleTerMhl.harga > accumulator.harga ? eleTerMhl:accumulator);
console.log(latihanC);
console.log("latihan c =====\n");

const latihanD = produk
	.filter(rtPrEle => rtPrEle.kategori === "Elektronik")
	.reduce((accumulator, rtPrEle, _, arrHasilFilter) => {
		return accumulator + (rtPrEle.harga / arrHasilFilter.length);
	}, 0);

console.log(latihanD);
console.log("latihan d =====\n");

