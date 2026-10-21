import type { Product } from '../types'
import { formatRupiah } from '../utils'
import Button from './Button'

interface CardProps {
  product: Product
  onTambah: (product: Product) => void
  onLihat: (product: Product) => void
  sudahDiKeranjang: boolean
}

export default function Card({ product, onTambah, onLihat, sudahDiKeranjang }: CardProps) {
  const stokMenipis = product.stock <= 10

  return (
    <article className="card">
      <div className="card__head">
        <span className="card__category">{product.category}</span>
        {stokMenipis && <span className="card__badge">Stok menipis</span>}
      </div>

      <h3 className="card__title">{product.title}</h3>
      <p className="card__price">{formatRupiah(product.price)}</p>
      <p className="card__meta">
        Stok {product.stock} | Rating {product.rating}
      </p>

      <div className="card__actions">
        <Button variant="secondary" onClick={() => onLihat(product)}>
          Detail
        </Button>
        <Button onClick={() => onTambah(product)} disabled={sudahDiKeranjang}>
          {sudahDiKeranjang ? 'Di keranjang' : 'Tambah'}
        </Button>
      </div>
    </article>
  )
}
