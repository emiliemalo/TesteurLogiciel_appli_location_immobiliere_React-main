import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Property from '../pages/Property'
import NotFound from '../pages/NotFound'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties/:id" element={<Property />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
