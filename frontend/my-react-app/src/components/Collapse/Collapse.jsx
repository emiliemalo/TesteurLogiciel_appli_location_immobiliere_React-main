import { useState } from 'react'
import './Collapse.css'

function Collapse({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`collapse ${open ? 'collapse--open' : ''}`}>
      <button
        type="button"
        className="collapse__trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="collapse__icon" aria-hidden>▼</span>
      </button>
      {open && (
        <div className="collapse__content collapse__content--open">
          <div className="collapse__content-inner">{children}</div>
        </div>
      )}
    </div>
  )
}

export default Collapse
