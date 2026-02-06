import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Kasa
      </Link>
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Accueil
        </Link>
        <Link to="/about" className="header__link">
          À propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
