import { render, screen } from '@testing-library/react'
import App, { Part, Header, Total, Content } from './App'

describe('Required components in tesk 1.3', () => {
    test('Part component exists and is a function', () => {
        expect(Part).toBeDefined()
        expect(typeof Part).toBe('function')
    })

    test('Header component exists and is a function', () => {
        expect(Header).toBeDefined()
        expect(typeof Header).toBe('function')
    })

    test('Total component exists and is a function', () => {
        expect(Total).toBeDefined()
        expect(typeof Total).toBe('function')
    })
})

describe('Component rendering behavior in task 1.3', () => {
    test('Header renders course title in h1', () => {
        render(<Header course="Half Stack application development" />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading).toHaveTextContent('Half Stack application development')
    })

    test('Part renders name and exercises', () => {
        render(<Part part="Test Part" exercises={5} />)
        const text = screen.getByText('Test Part 5')
        expect(text).toBeInTheDocument()
    })

    test('Total renders total exercises text', () => {
        render(<Total total={31} />)
        expect(screen.getByText('Number of exercises 31')).toBeInTheDocument()
    })
})

describe('Content component rendering behavior in task 1.4', () => {
    test('Content component exists and is a function', () => {
        expect(Content).toBeDefined()
        expect(typeof Content).toBe('function')
    })
    test('Content renders three Part components with correct props', () => {
        render(<Content part1="Fundamentals of React" exercises1={10} part2="Using props to pass data" exercises2={7} part3="State of a component" exercises3={14} />)
        expect(screen.getByText('Fundamentals of React 10')).toBeInTheDocument()
        expect(screen.getByText('Using props to pass data 7')).toBeInTheDocument()
        expect(screen.getByText('State of a component 14')).toBeInTheDocument()
    })
})

describe('App renders correctly', () => {
    test('App includes Header, three parts and Total output', () => {
        render(<App />)

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Half Stack application development')
        expect(screen.getByText('Fundamentals of React 10')).toBeInTheDocument()
        expect(screen.getByText('Using props to pass data 7')).toBeInTheDocument()
        expect(screen.getByText('State of a component 14')).toBeInTheDocument()
        expect(screen.getByText('Number of exercises 31')).toBeInTheDocument()
    })
})