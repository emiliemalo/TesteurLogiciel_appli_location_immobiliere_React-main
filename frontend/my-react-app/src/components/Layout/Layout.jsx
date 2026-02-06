import { Link } from 'react-router-dom'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout__header">
        <Link to="/" className="layout__logo">
          Kasa
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
      <footer className="layout__footer">
        <p>© {new Date().getFullYear()} Kasa. Tous droits réservés.</p>
      </footer>
    </div>
  )
}

export default Layout
