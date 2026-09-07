
function hitungDiskon(harga, diskon) {
    const diskonPerSeratus = diskon / 100;
    const potongan = harga * diskonPerSeratus;
    const hasil = harga - potongan;

    return {
        diskonPerSeratus: diskonPerSeratus,
        potongan: potongan,
        hasil: hasil
    };
}

export { hitungDiskon };    //export function hitungDiskon(harga, diskon)