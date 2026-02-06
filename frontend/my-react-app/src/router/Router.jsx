import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>À propos</h1>} />
      {/* Ajoutez vos routes ici au fur et à mesure */}
      <Route path="*" element={<h1>Page non trouvée</h1>} />
    </Routes>
  )
}

export default Router
