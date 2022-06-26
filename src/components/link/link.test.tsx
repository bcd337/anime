import { render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Link from './link.styled'

describe('<Link />', () => {
  test('It should mount', () => {
    render(<BrowserRouter><Link to=""/></BrowserRouter>)
  })
})
