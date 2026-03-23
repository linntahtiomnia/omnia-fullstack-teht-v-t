import { render, screen } from '@testing-library/react'
import App, { EkaKomponentti } from '../App'

describe('App', () => {
  test('renders Hello World! in h1 for task 1.1', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Hello World!')
  })

  test('renders EkaKomponentti with p element for task 1.2', () => {
    render(<App />)
    const paragraph = screen.getByRole('paragraph')
    expect(paragraph).toBeInTheDocument()
  })
})

describe('EkaKomponentti', () => {
  test('takes viesti prop and renders it in a paragraph', () => {
    const testMessage = 'Test viesti'
    render(<EkaKomponentti viesti={testMessage} />)
    const paragraph = screen.getByRole('paragraph')
    expect(paragraph).toHaveTextContent(testMessage)
  })
})