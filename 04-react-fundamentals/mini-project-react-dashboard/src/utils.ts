export function formatRupiah(nilai: number): string {
  return 'Rp ' + nilai.toLocaleString('id-ID')
}

export function formatAngka(nilai: number): string {
  return nilai.toLocaleString('id-ID')
}

export function formatRating(nilai: number): string {
  return nilai.toFixed(1)
}
