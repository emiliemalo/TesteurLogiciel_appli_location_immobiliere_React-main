import { useState, useEffect } from 'react'
import Banner from '../components/Banner/Banner'
import Cards from '../components/Cards/Cards'
import backgroundImage from '../assets/background_image.jpg'
import './Home.css'

const API_BASE = '/api'

function Home() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000)

    fetch(`${API_BASE}/properties`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setProperties(data)
        setError(null)
      })
      .catch((err) => setError(err.message || 'Le backend ne répond pas. Lancez-le (ex. Docker sur le port 8080).'))
      .finally(() => {
        clearTimeout(timeoutId)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="home__loading">Chargement des logements…</p>
  if (error) {
    return (
      <p className="home__error">
        Erreur : {error}. Vérifiez que le backend tourne (ex. Docker sur le port 8080).
      </p>
    )
  }

  return (
    <div className="home">
      <Banner
        image={backgroundImage}
        title="Chez vous, partout et ailleurs"
      />
      <div className="home__cards-wrapper">
        <Cards items={properties} />
      </div>
    </div>
  )
}

export default Home
