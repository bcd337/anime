import { render, screen, fireEvent } from '@testing-library/react'
import Img from './img.component'

describe('<Header />', () => {
  test('It should mount', () => {
    render(<Img src="" />)
    const image = screen.getByTestId("Image")
    expect(image).toBeInTheDocument()
    fireEvent.load(image)
    fireEvent.error(image)
  })
})
