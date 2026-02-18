import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Banner from '../../components/Banner/Banner'

describe('Banner', () => {
  it('renders the banner with image', () => {
    const { container } = render(<Banner image="/hero.jpg" />)
    const img = container.querySelector('.banner__img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/hero.jpg')
    expect(img).toHaveClass('banner__img')
  })

  it('renders the title when title prop is provided', () => {
    render(<Banner image="/hero.jpg" title="Chez vous, partout et ailleurs" />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Chez vous, partout et ailleurs'
    )
    expect(screen.getByText('Chez vous, partout et ailleurs')).toHaveClass(
      'banner__title'
    )
  })

  it('does not render the title when title is not provided', () => {
    render(<Banner image="/hero.jpg" />)
    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument()
  })

  it('does not render the title when title is empty string', () => {
    render(<Banner image="/hero.jpg" title="" />)
    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument()
  })

  it('renders banner container with correct class', () => {
    const { container } = render(<Banner image="/img.png" title="Titre" />)
    const banner = container.querySelector('.banner')
    expect(banner).toBeInTheDocument()
    expect(banner).toContainElement(container.querySelector('.banner__img'))
    expect(banner).toContainElement(screen.getByRole('heading'))
  })
})
