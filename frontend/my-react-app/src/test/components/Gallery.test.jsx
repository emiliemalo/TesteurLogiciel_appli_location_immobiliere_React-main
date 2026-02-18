import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Gallery from '../../components/Gallery/Gallery'

describe('Gallery', () => {
  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg']

  it('renders nothing when images is empty', () => {
    const { container } = render(<Gallery images={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders first image and counter when multiple images', () => {
    const { container } = render(<Gallery images={images} />)
    const mainImg = container.querySelector('.gallery__img')
    expect(mainImg).toHaveAttribute('src', '/img1.jpg')
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('shows prev/next buttons only when more than one image', () => {
    render(<Gallery images={images} />)
    expect(screen.getByLabelText('Image précédente')).toBeInTheDocument()
    expect(screen.getByLabelText('Image suivante')).toBeInTheDocument()
  })

  it('hides prev/next buttons when single image', () => {
    render(<Gallery images={['/only.jpg']} />)
    expect(screen.queryByLabelText('Image précédente')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Image suivante')).not.toBeInTheDocument()
  })

  it('goes to next image on next click', async () => {
    const user = userEvent.setup()
    render(<Gallery images={images} />)
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
  })

  it('wraps to first image after last (circular)', async () => {
    const user = userEvent.setup()
    render(<Gallery images={images} />)
    await user.click(screen.getByLabelText('Image suivante'))
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Image suivante'))
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('wraps to last image from first on prev (circular)', async () => {
    const user = userEvent.setup()
    render(<Gallery images={images} />)
    await user.click(screen.getByLabelText('Image précédente'))
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
  })

  it('updates main image src when navigating', async () => {
    const user = userEvent.setup()
    const { container } = render(<Gallery images={images} />)
    const mainImg = container.querySelector('.gallery__img')
    expect(mainImg).toHaveAttribute('src', '/img1.jpg')
    await user.click(screen.getByLabelText('Image suivante'))
    expect(mainImg).toHaveAttribute('src', '/img2.jpg')
    await user.click(screen.getByLabelText('Image précédente'))
    expect(mainImg).toHaveAttribute('src', '/img1.jpg')
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
