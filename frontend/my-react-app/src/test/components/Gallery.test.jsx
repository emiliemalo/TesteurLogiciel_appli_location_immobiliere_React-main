import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Gallery from '../../components/Gallery/Gallery'

describe('Gallery', () => {
  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg']

  it('renders nothing when images is empty', () => {
    const { container } = render(<Gallery images={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders all images from the backend', () => {
    const { container } = render(<Gallery images={images} />)
    const imgs = container.querySelectorAll('.gallery__img')
    expect(imgs).toHaveLength(3)
    expect(imgs[0]).toHaveAttribute('src', '/img1.jpg')
    expect(imgs[1]).toHaveAttribute('src', '/img2.jpg')
    expect(imgs[2]).toHaveAttribute('src', '/img3.jpg')
  })

  it('renders a single image when only one is provided', () => {
    const { container } = render(<Gallery images={['/only.jpg']} />)
    const imgs = container.querySelectorAll('.gallery__img')
    expect(imgs).toHaveLength(1)
    expect(imgs[0]).toHaveAttribute('src', '/only.jpg')
  })

  it('handles images undefined as empty list', () => {
    const { container } = render(<Gallery />)
    expect(container.firstChild).toBeNull()
  })

  it('renders gallery container with class gallery', () => {
    const { container } = render(<Gallery images={images} />)
    expect(container.querySelector('.gallery')).toBeInTheDocument()
  })
})
