// API - AMBIL DATA PRODUK DARI DUMMYJSON

// ---------- TUGAS 1: INTERFACE ----------
export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}

// Response dari API punya struktur { products: [...] }
interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

// ---------- TUGAS 2, 3, 4, 5: getProducts() ----------
export async function getProducts(): Promise<Product[]> {
    const URL = "https://dummyjson.com/products";

    try {
        const response = await fetch(URL);

        // TUGAS 4: cek response.ok
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: ProductsResponse = await response.json();
        return data.products;

    } catch (error) {
        // TUGAS 5: try...catch
        console.log("Gagal mengambil data produk.");
        if (error instanceof Error) {
            console.log("Pesan:", error.message);
        }
        return [];
    }
}