import { screen, render, fireEvent } from '@testing-library/react'
import { CoverImage, Title } from 'common/interfaces/media.interface'
import * as useCollection from 'hooks/useCollection'
import AnimeBanner from './animeBanner.component'

jest.mock('hooks/useCollection')

const coverImage: CoverImage = {
  extraLarge: '',
  large: '',
  medium: '',
  color: 'red',
}

const title: Title = {
  romaji: 'romaji',
  english: 'english',
  native: 'native',
}

describe('<AnimeBanner />', () => {
  beforeEach(() => {
    jest.spyOn(useCollection, 'useAllCollectionOfAnime').mockReturnValue([])
    jest.spyOn(useCollection, 'useAllCollectionName').mockReturnValue(["test"])
  })

  test('It should clickable', async () => {
    render(<AnimeBanner src="" image={coverImage} title={title} id={1} />)

    const ContainerButton = await screen.findByTestId("ContainerButton")

    fireEvent.click(ContainerButton)

    jest.spyOn(useCollection, 'useAllCollectionOfAnime').mockReturnValue(["1", "2"])

    render(<AnimeBanner src="" image={coverImage} title={title} id={1} />)
  })

  test('It should have title romaji', async () => {
    render(<AnimeBanner src="" image={coverImage} title={title} id={1} />)

    await expect(screen.findByTestId("TitleContainer")).resolves.toHaveTextContent(title.romaji)
  })

  test('It should have title english', async () => {
    render(<AnimeBanner src="" image={coverImage} title={{
      ...title,
      romaji: '',
    }} id={1} />)

    await expect(screen.findByTestId("TitleContainer")).resolves.toHaveTextContent(title.english)
  })

  test('It should have title native', async () => {
    render(<AnimeBanner src="" image={coverImage} title={{
      ...title,
      romaji: '',
      english: '',
    }} id={1} />)

    await expect(screen.findByTestId("TitleContainer")).resolves.toHaveTextContent(title.native)

    render(<AnimeBanner src="" image={coverImage} title={{
      ...title,
      romaji: '',
      english: '',
    }} id={1} />)

    render(<AnimeBanner src="" image={coverImage} title={{
      ...title,
      romaji: '',
      english: '',
      native: '',
    }} id={1} />)
  })
})
