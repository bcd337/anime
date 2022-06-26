import { screen, render } from '@testing-library/react'
import AnimeBannerImage from './animeBannerImage.component'

describe('<AnimeBannerImage />', () => {
  test('It should mount', async () => {
    render(<AnimeBannerImage src="" />)

    await expect(screen.findByTestId("Image")).resolves.toBeInTheDocument()
  })
})
