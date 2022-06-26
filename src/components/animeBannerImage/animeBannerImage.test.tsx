import { screen, render } from '@testing-library/react'
import AnimeBannerImage from './animeBannerImage.component'

describe('<AnimeBannerImage />', () => {
  test('It should mount', () => {
    render(<AnimeBannerImage src="" />)

    expect(screen.getByTestId("Image")).toBeInTheDocument()
  })
})
