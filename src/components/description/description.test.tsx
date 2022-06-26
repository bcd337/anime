import { render, screen } from '@testing-library/react'
import Description from './description.component'

describe('<Description />', () => {
  test('It should mount', () => {
    render(<Description desc="" />)
    expect(screen.getByTestId("Description-Container")).toBeInTheDocument()
  })
})
