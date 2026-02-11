import kasaLogo from '../../assets/logo.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <img src={kasaLogo} alt="Kasa" className="footer__logo" />
      <p className="footer__text">
        © {new Date().getFullYear()} Kasa. Tous droits réservés.
      </p>
    </footer>
  )
}

export default Footer
