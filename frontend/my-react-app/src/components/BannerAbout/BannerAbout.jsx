import './BannerAbout.css'

function BannerAbout({ image }) {
  return (
    <div className="banner-about">
      <img src={image} alt="" className="banner-about__img" />
    </div>
  )
}

export default BannerAbout
