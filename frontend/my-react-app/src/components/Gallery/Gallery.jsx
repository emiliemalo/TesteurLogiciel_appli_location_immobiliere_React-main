import { useState } from 'react'
import './Gallery.css'

function Gallery({ images }) {
  const [index, setIndex] = useState(0)
  const list = images?.length ? images : []
  const current = list[index] ?? null

  const goPrev = () => {
    setIndex((i) => (i <= 0 ? list.length - 1 : i - 1))
  }
  const goNext = () => {
    setIndex((i) => (i >= list.length - 1 ? 0 : i + 1))
  }

  if (!list.length) return null

  return (
    <div className="gallery">
      <img
        src={current}
        alt=""
        className="gallery__img"
      />
      {list.length > 1 && (
        <>
          <button
            type="button"
            className="gallery__btn gallery__btn--prev"
            onClick={goPrev}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery__btn gallery__btn--next"
            onClick={goNext}
            aria-label="Image suivante"
          >
            ›
          </button>
          <span className="gallery__counter">
            {index + 1} / {list.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Gallery
