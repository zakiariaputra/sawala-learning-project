import type { MouseEvent, ReactNode } from 'react'

interface ModalProps {
  title: string
  children: ReactNode
  onClose: () => void
}

export default function Modal({ title, children, onClose }: ModalProps) {
  function handleClickLuar(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__box" onClick={handleClickLuar}>
        <div className="modal__head">
          <h2 className="modal__title">{title}</h2>
          <button className="modal__close" onClick={onClose} type="button">
            Tutup
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}
