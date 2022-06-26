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

  test('It should clickable', () => {
    render(<AnimeBanner src="" image={coverImage} title={title} id={1} />)

    const ContainerButton = screen.getByTestId("AnimeBanner-ContainerButton")
    expect(ContainerButton).toBeInTheDocument()

    fireEvent.click(ContainerButton)

    jest.spyOn(useCollection, 'useAllCollectionOfAnime').mockReturnValue(["1", "2"])

    render(<AnimeBanner src="" image={coverImage} title={title} id={1} />)
  })

  test('It should have title romaji', () => {
    render(<AnimeBanner src="" image={coverImage} title={title} id={1} />)

    expect(screen.getByTestId("AnimeBanner-TitleContainer")).toHaveTextContent(title.romaji)
  })

  test('It should have title english', () => {
    render(<AnimeBanner src="" image={coverImage} title={{
      ...title,
      romaji: '',
    }} id={1} />)

    expect(screen.getByTestId("AnimeBanner-TitleContainer")).toHaveTextContent(title.english)
  })

  test('It should have title native', () => {
    render(<AnimeBanner src="" image={coverImage} title={{
      ...title,
      romaji: '',
      english: '',
    }} id={1} />)

    expect(screen.getByTestId("AnimeBanner-TitleContainer")).toHaveTextContent(title.native)
  })
})
