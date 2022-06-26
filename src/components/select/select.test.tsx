import { render, screen } from '@testing-library/react'
import Select from './select.component'

describe('<Select />', () => {
  test('It should mount', () => {
    render(<Select onChange={jest.fn()} value="" options={[{ value: "value", label: "label" }]}/>)
    expect(screen.getByTestId("Select")).toBeInTheDocument()
  })
})
