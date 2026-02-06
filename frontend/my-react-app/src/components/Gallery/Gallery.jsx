import './Gallery.css'

function Gallery({ images }) {
  const list = images?.length ? images : []

  if (!list.length) return null

  return (
    <div className="gallery">
      {list.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="gallery__img"
        />
      ))}
    </div>
  )
}

export default Gallery
