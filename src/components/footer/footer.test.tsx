import { render, screen } from '@testing-library/react'
import Footer from './footer.component'

describe('<Footer />', () => {
  test('It should mount', () => {
    render(<Footer />)
    expect(screen.getByTestId("Footer")).toBeInTheDocument()
  })
})
