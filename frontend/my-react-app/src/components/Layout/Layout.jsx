import { Link } from 'react-router-dom'
import kasaLogo from '../../assets/logo.png'
import Footer from '../Footer/Footer'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout__header">
        <Link to="/" className="layout__logo">
          <img src={kasaLogo} alt="Kasa" className="layout__logo-img" />
        </Link>
        <nav className="layout__nav">
          <Link to="/" className="layout__nav-link">
            Accueil
          </Link>
          <Link to="/about" className="layout__nav-link">
            À propos
          </Link>
        </nav>
      </header>
      <main className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
