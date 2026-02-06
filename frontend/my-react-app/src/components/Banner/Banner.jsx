import './Banner.css'

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__img" />
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  )
}

export default Banner
