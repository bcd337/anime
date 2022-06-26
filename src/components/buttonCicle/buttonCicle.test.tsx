import { screen, render } from '@testing-library/react'
import ButtonCicle from './buttonCicle.component'

describe('<ButtonCicle />', () => {
  test('It should mount', () => {
    render(<ButtonCicle>test</ButtonCicle>)

    expect(screen.getByTestId("ButtonCicle-Container")).toBeInTheDocument()
  })
})
