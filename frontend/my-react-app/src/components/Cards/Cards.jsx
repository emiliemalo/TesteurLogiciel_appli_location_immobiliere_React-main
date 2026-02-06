import { Link } from 'react-router-dom'
import './Cards.css'

function Cards({ items }) {
  return (
    <section className="cards">
      {items?.map((item) => (
        <Link
          key={item.id}
          to={item.url || `/properties/${item.id}`}
          className="cards__item"
        >
          <img
            src={item.cover || item.image}
            alt={item.title || ''}
            className="cards__img"
          />
          <span className="cards__title">{item.title}</span>
        </Link>
      ))}
    </section>
  )
}

export default Cards
