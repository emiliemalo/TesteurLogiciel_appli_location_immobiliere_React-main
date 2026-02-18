import { useState } from 'react'
import vectorLeft from '../../assets/icons/vector-left.svg'
import vectorRight from '../../assets/icons/vector-right.svg'
import './Carousel.css'

function Carousel({ images }) {
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
    <div className="carousel">
      <img
        src={current}
        alt=""
        className="carousel__img"
      />
      {list.length > 1 && (
        <>
          <button
            type="button"
            className="carousel__btn carousel__btn--prev"
            onClick={goPrev}
            aria-label="Image précédente"
          >
            <img src={vectorLeft} alt="" className="carousel__btn-img" />
          </button>
          <button
            type="button"
            className="carousel__btn carousel__btn--next"
            onClick={goNext}
            aria-label="Image suivante"
          >
            <img src={vectorRight} alt="" className="carousel__btn-img" />
          </button>
          <span className="carousel__counter">
            {index + 1} / {list.length}
          </span>
        </>
      )}
    </div>
  )
}

export default Carousel
