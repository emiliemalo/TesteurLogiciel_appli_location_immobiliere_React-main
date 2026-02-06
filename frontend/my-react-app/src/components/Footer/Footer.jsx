import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Kasa. Tous droits réservés.
      </p>
    </footer>
  )
}

export default Footer
