interface StatCardProps {
  label: string
  value: string
  hint?: string
  tone?: 'default' | 'success' | 'warning'
}

export default function StatCard({ label, value, hint, tone = 'default' }: StatCardProps) {
  const className = 'stat stat--' + tone

  return (
    <div className={className}>
      <p className="stat__label">{label}</p>
      <p className="stat__value">{value}</p>
      {hint && <p className="stat__hint">{hint}</p>}
    </div>
  )
}
