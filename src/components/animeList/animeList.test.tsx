import { screen, render } from '@testing-library/react'
import AnimeList from './animeList.component'

describe('<AnimeList />', () => {
  test('It should mount', () => {
    render(<AnimeList>test</AnimeList>)

    expect(screen.getByTestId("AnimeList-Container")).toBeInTheDocument()
  })
})
