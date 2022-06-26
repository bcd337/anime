import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Header from './header.component'

describe('<Header />', () => {
  test('It should mount', () => {
    render(<BrowserRouter><Header /></BrowserRouter>)
    expect(screen.getByTestId("Header")).toBeInTheDocument()
  })
})
