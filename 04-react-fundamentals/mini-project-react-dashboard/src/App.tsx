import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { getProducts } from './api'
import type { DataSource } from './api'
import Button from './components/Button'
import Card from './components/Card'
import Modal from './components/Modal'
import StatCard from './components/StatCard'
import type { Product } from './types'
import { formatAngka, formatRupiah, formatRating } from './utils'

export default function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [source, setSource] = useState<DataSource>('api')
  const [search, setSearch] = useState('')
  const [kategori, setKategori] = useState('Semua')
  const [keranjang, setKeranjang] = useState<Product[]>([])
  const [produkTerpilih, setProdukTerpilih] = useState<Product | null>(null)

  useEffect(() => {
    let masihAktif = true

    async function ambilData() {
      setIsLoading(true)
      const hasil = await getProducts()

      if (!masihAktif) {
        return
      }

      setProducts(hasil.products)
      setSource(hasil.source)
      setIsLoading(false)
    }

    ambilData()

    return function bersihkan() {
      masihAktif = false
    }
  }, [])

  useEffect(() => {
    if (produkTerpilih === null) {
      return
    }

    function tekanEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setProdukTerpilih(null)
      }
    }

    window.addEventListener('keydown', tekanEscape)

    return function bersihkan() {
      window.removeEventListener('keydown', tekanEscape)
    }
  }, [produkTerpilih])

  const daftarKategori = ['Semua'].concat(
    Array.from(new Set(products.map((product) => product.category))),
  )

  const produkTersaring = products.filter((product) => {
    const cocokSearch = product.title.toLowerCase().includes(search.toLowerCase())
    const cocokKategori = kategori === 'Semua' || product.category === kategori
    return cocokSearch && cocokKategori
  })

  const totalNilaiStok = produkTersaring.reduce(
    (total, product) => total + product.price * product.stock,
    0,
  )

  const jumlahStokMenipis = produkTersaring.filter((product) => product.stock <= 10).length

  const totalRating = produkTersaring.reduce((total, product) => total + product.rating, 0)
  const rataRating = produkTersaring.length === 0 ? 0 : totalRating / produkTersaring.length

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function tambahKeranjang(product: Product) {
    setKeranjang(keranjang.concat(product))
  }

  function hapusKeranjang(product: Product) {
    setKeranjang(keranjang.filter((item) => item.id !== product.id))
  }

  function sudahDiKeranjang(product: Product): boolean {
    return keranjang.some((item) => item.id === product.id)
  }

  function resetFilter() {
    setSearch('')
    setKategori('Semua')
  }

  const totalBelanja = keranjang.reduce((total, product) => total + product.price, 0)

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1 className="header__title">Dashboard Produk</h1>
          <p className="header__subtitle">
            Mini project Milestone 4 - React Fundamentals (Sawala Learning)
          </p>
        </div>
        <div className="header__badge">
          {source === 'api' ? 'Data dari DummyJSON API' : 'Data lokal (API tidak tersedia)'}
        </div>
      </header>

      <section className="stats">
        <StatCard
          label="Total Produk"
          value={formatAngka(produkTersaring.length)}
          hint="dari hasil filter"
        />
        <StatCard
          label="Stok Menipis"
          value={formatAngka(jumlahStokMenipis)}
          hint="stok 10 ke bawah"
          tone="warning"
        />
        <StatCard label="Rata-rata Rating" value={formatRating(rataRating)} hint="skala 5.0" />
        <StatCard
          label="Nilai Stok"
          value={formatRupiah(totalNilaiStok)}
          hint="harga x stok"
          tone="success"
        />
      </section>

      <section className="toolbar">
        <form className="toolbar__search" onSubmit={handleSubmit}>
          <input
            className="toolbar__input"
            type="search"
            placeholder="Cari nama produk..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button type="submit">Cari</Button>
        </form>

        <label className="toolbar__filter">
          <span className="toolbar__label">Kategori</span>
          <select
            className="toolbar__select"
            value={kategori}
            onChange={(event) => setKategori(event.target.value)}
          >
            {daftarKategori.map((namaKategori) => (
              <option key={namaKategori} value={namaKategori}>
                {namaKategori}
              </option>
            ))}
          </select>
        </label>

        <Button variant="secondary" onClick={resetFilter}>
          Reset Filter
        </Button>
      </section>

      <section className="keranjang">
        <h2 className="keranjang__title">Keranjang ({keranjang.length})</h2>

        {keranjang.length === 0 ? (
          <p className="keranjang__kosong">Keranjang masih kosong.</p>
        ) : (
          <ul className="keranjang__list">
            {keranjang.map((product) => (
              <li className="keranjang__item" key={product.id}>
                <span className="keranjang__nama">{product.title}</span>
                <span className="keranjang__harga">{formatRupiah(product.price)}</span>
                <button
                  className="keranjang__hapus"
                  onClick={() => hapusKeranjang(product)}
                  type="button"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="keranjang__total">Total belanja: {formatRupiah(totalBelanja)}</p>
      </section>

      <section className="produk">
        {isLoading && <p className="produk__status">Memuat data produk...</p>}

        {!isLoading && produkTersaring.length === 0 && (
          <div className="produk__status produk__status--kosong">
            <p>Tidak ada produk yang cocok dengan filter saat ini.</p>
            <Button onClick={resetFilter}>Reset Filter</Button>
          </div>
        )}

        {!isLoading && produkTersaring.length > 0 && (
          <div className="produk__grid">
            {produkTersaring.map((product) => (
              <Card
                key={product.id}
                product={product}
                onTambah={tambahKeranjang}
                onLihat={setProdukTerpilih}
                sudahDiKeranjang={sudahDiKeranjang(product)}
              />
            ))}
          </div>
        )}
      </section>

      {produkTerpilih !== null && (
        <Modal title={produkTerpilih.title} onClose={() => setProdukTerpilih(null)}>
          <p className="detail__baris">Kategori: {produkTerpilih.category}</p>
          <p className="detail__baris">Harga: {formatRupiah(produkTerpilih.price)}</p>
          <p className="detail__baris">Sisa stok: {produkTerpilih.stock}</p>
          <p className="detail__baris">Rating: {formatRating(produkTerpilih.rating)} / 5</p>
        </Modal>
      )}

      <footer className="footer">
        <p>Belajar React + TypeScript - Sawala Learning Project 2026</p>
      </footer>
    </div>
  )
}
