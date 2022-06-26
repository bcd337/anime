import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Main from './main.component'

jest.mock('routes', () => [
  {
    path: '/',
    element: ""
  }
])

describe('<Main />', () => {
  test('It should mount', () => {
    render(<BrowserRouter><Main /></BrowserRouter>)
    expect(screen.getByTestId("Main")).toBeInTheDocument()
  })
})
