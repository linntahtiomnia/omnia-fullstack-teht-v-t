import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Kurssitiedot App - Task 1.3', () => {
  test('renders course name in h1 element (Header component)', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Half Stack application development')
  })

  test('renders all three course parts using Part component', () => {
    render(<App />)
    const paragraphs = screen.getAllByRole('paragraph')
    
    // Should have paragraphs for: part1+exercises1, part2+exercises2, part3+exercises3, total
    expect(paragraphs.length).toBeGreaterThanOrEqual(4)
    
    // Verify first part
    expect(paragraphs[0]).toHaveTextContent('Fundamentals of React')
    expect(paragraphs[0]).toHaveTextContent('10')
    
    // Verify second part
    expect(paragraphs[1]).toHaveTextContent('Using props to pass data')
    expect(paragraphs[1]).toHaveTextContent('7')
    
    // Verify third part
    expect(paragraphs[2]).toHaveTextContent('State of a component')
    expect(paragraphs[2]).toHaveTextContent('14')
  })

  test('renders total number of exercises', () => {
    render(<App />)
    const totalText = screen.getByText(/Number of exercises/)
    expect(totalText).toHaveTextContent('31') // 10 + 7 + 14
  })
})