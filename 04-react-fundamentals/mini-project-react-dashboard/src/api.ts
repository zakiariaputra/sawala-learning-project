import { fallbackProducts } from './data'
import type { Product } from './types'

export type DataSource = 'api' | 'local'

export interface ProductResult {
  products: Product[]
  source: DataSource
}

interface ApiProduct {
  id: number
  title: string
  price: number
  category: string
  stock: number
  rating: number
}

interface ApiResponse {
  products: ApiProduct[]
}

const BASE_URL = 'https://dummyjson.com/products/category'
const KATEGORI_DIAMBIL = ['smartphones', 'laptops', 'mens-shirts', 'womens-dresses', 'furniture']
const JUMLAH_PER_KATEGORI = 5
const KURS_USD_IDR = 16000

function formatKategori(mentah: string): string {
  return mentah
    .split('-')
    .map((kata) => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(' ')
}

function keRupiah(hargaUsd: number): number {
  return Math.round(hargaUsd * KURS_USD_IDR)
}

async function ambilSatuKategori(kategori: string): Promise<ApiProduct[]> {
  const url = BASE_URL + '/' + kategori + '?limit=' + JUMLAH_PER_KATEGORI
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Server membalas dengan status ' + response.status)
  }

  const data = (await response.json()) as ApiResponse

  return data.products
}

export async function getProducts(): Promise<ProductResult> {
  try {
    const hasilPerKategori = await Promise.all(KATEGORI_DIAMBIL.map(ambilSatuKategori))

    const products: Product[] = hasilPerKategori.flat().map((item) => ({
      id: item.id,
      title: item.title,
      price: keRupiah(item.price),
      category: formatKategori(item.category),
      stock: item.stock,
      rating: item.rating,
    }))

    return { products, source: 'api' }
  } catch (error) {
    console.error('Gagal mengambil data dari API, memakai data lokal.', error)
    return { products: fallbackProducts, source: 'local' }
  }
}
