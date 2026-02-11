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
})
