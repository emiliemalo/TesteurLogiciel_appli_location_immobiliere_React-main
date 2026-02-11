import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer/Footer'

describe('Footer', () => {
  it('renders Kasa logo', () => {
    render(<Footer />)
    const img = screen.getByRole('img', { name: /kasa/i })
    expect(img).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    expect(screen.getByText(/Kasa.*Tous droits réservés/i)).toBeInTheDocument()
  })
})
