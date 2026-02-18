import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Collapse from '../../components/Collapse/Collapse'

describe('Collapse', () => {
  it('renders with title and is closed by default', () => {
    render(
      <Collapse title="Test titre">
        <p>Contenu</p>
      </Collapse>
    )
    expect(screen.getByText('Test titre')).toBeInTheDocument()
    expect(screen.queryByText('Contenu')).not.toBeInTheDocument()
  })

  it('opens on click and shows content', async () => {
    const user = userEvent.setup()
    render(
      <Collapse title="Ouvrir">
        <p>Contenu visible</p>
      </Collapse>
    )
    await user.click(screen.getByText('Ouvrir'))
    expect(screen.getByText('Contenu visible')).toBeInTheDocument()
  })

  it('closes when clicked again', async () => {
    const user = userEvent.setup()
    render(
      <Collapse title="Toggle">
        <p>Contenu</p>
      </Collapse>
    )
    const button = screen.getByText('Toggle')
    await user.click(button)
    expect(screen.getByText('Contenu')).toBeInTheDocument()
    await user.click(button)
    expect(screen.queryByText('Contenu')).not.toBeInTheDocument()
  })

  it('has aria-expanded false when closed', () => {
    render(
      <Collapse title="Titre">
        <p>Contenu</p>
      </Collapse>
    )
    const button = screen.getByRole('button', { name: /titre/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('has aria-expanded true when open', async () => {
    const user = userEvent.setup()
    render(
      <Collapse title="Titre">
        <p>Contenu</p>
      </Collapse>
    )
    const button = screen.getByRole('button', { name: /titre/i })
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('applies collapse--open class when open', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Collapse title="Ouvrir">
        <p>Contenu</p>
      </Collapse>
    )
    const wrapper = container.querySelector('.collapse')
    expect(wrapper).not.toHaveClass('collapse--open')
    await user.click(screen.getByText('Ouvrir'))
    expect(wrapper).toHaveClass('collapse--open')
  })

  it('renders content in collapse__content-inner', async () => {
    const user = userEvent.setup()
    const { container } = render(
      <Collapse title="Titre">
        <span data-testid="inner">Enfant</span>
      </Collapse>
    )
    await user.click(screen.getByText('Titre'))
    const inner = container.querySelector('.collapse__content-inner')
    expect(inner).toBeInTheDocument()
    expect(inner).toHaveTextContent('Enfant')
  })
})
