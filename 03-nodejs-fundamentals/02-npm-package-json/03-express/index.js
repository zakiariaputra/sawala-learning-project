const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("server berjalan di http://localhost:3000")
});

app.get("/", (req, res) => {
    res.send("halo dari express!")
});

app.get("/halo", (req, res) => {
    console.log(req.method)
    console.log(req.url)

    res.send("halo!")
});

// app.get("/barang/:nama", (req, res) => {
//     res.send(`Produk yang dipilih: ${req.params.nama}`)
// });

app.get("/cari", (req, res) => {
    const {nama, kelas} = req.query;

    res.send(`nama: ${req.query.nama} kelas: ${req.query.kelas}`)
});

app.post("/siswa", (req, res) => {
    res.json({
        nama: "cahyo",
        nilai: 80
    });
});