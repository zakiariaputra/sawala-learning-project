const ambilData = new Promise((resolve) => {
	setTimeout(() => {
		resolve("data berhasil diambil!");
	}, 1000);
});
console.log("menungu...");

ambilData
	.then((hasil) => {
		console.log(hasil);
	});
setTimeout(() => { console.log("===== target 1 ==\n"); }, 1005);


const login = new promise((resolve, reject) => {
	setTimeout(() => {
		resolve("login berhasil!")
		reject("login gagal!");
	}, 2000);
});

const login = true;

if (login) {
 	.then((berhasil) => {
	console.log(berhasil);
});
 	.catch ((gagal) => {
		console.log(gagal);
	});
};

