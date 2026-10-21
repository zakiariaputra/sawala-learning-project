// TYPE & INTERFACE

// ---------- 1. INTERFACE --
interface Produk {
    id: number;
    nama: string;
    kategori: string;
    harga: number;
    stok: number;
}

// Interface opsional & readonly
interface Pengguna {
    readonly id: number;
    nama: string;
    email?: string; // opsional
}

// ---------- 2. TYPE ALIAS --
type Status = "aktif" | "nonaktif" | "pending";

type Alamat = {
    jalan: string;
    kota: string;
    kodePos: string;
};

// ---------- 3. INTERFACE UNTUK FUNCTION --
interface Kalkulator {
    (a: number, b: number): number;
}

// ---------- 4. EXTENDS (PEWARISAN) --
interface ProdukDigital extends Produk {
    ukuranFile: number; // dalam MB
}

// ---------- 5. EXPORT --
export { Produk, Pengguna, Status, Alamat, Kalkulator, ProdukDigital };