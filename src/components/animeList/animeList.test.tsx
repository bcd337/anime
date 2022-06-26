import { screen, render } from '@testing-library/react'
import AnimeList from './animeList.component'

describe('<AnimeList />', () => {
  test('It should mount', async () => {
    render(<AnimeList>test</AnimeList>)

    await expect(screen.findByTestId("AnimeList-Container")).resolves.toBeInTheDocument()
  })
})
