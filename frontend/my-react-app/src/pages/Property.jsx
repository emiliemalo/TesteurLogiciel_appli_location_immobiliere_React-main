import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel'
import Collapse from '../components/Collapse/Collapse'
import NotFound from './NotFound'
import './Property.css'

const API_BASE = '/api'

function Property() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!id) {
      setNotFound(true)
      setLoading(false)
      return
    }
    fetch(`${API_BASE}/properties/${id}`)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true)
          return null
        }
        if (!res.ok) throw new Error('Erreur')
        return res.json()
      })
      .then((data) => {
        if (data) setProperty(data)
        setLoading(false)
      })
      .catch(() => {
        setNotFound(true)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p className="property__loading">Chargement…</p>
  if (notFound || !property) return <NotFound />

  return (
    <div className="property">
      <Carousel images={property.pictures} />
      <div className="property__header">
        <div>
          <h1 className="property__title">{property.title}</h1>
          <p className="property__location">{property.location}</p>
        </div>
        {property.tags && (
          <ul className="property__tags">
            {property.tags.map((tag) => (
              <li key={tag} className="property__tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="property__collapses">
        <Collapse title="Description">
          <p>{property.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {property.equipments?.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Property
