import { screen, render } from '@testing-library/react'
import { CoverImage, Title } from 'common/interfaces/media.interface'
import AnimeCard from './animeCard.component'

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

describe('<AnimeCard />', () => {
  test('It should have title romaji with image medium', () => {
    render(<AnimeCard image={coverImage} title={title} id={1} />)

    expect(screen.getByTestId("AnimeCard-TitleContainer")).toHaveTextContent(title.romaji)
    expect(screen.getByTestId("Image")).toHaveAttribute('src', coverImage.medium)
  })

  test('It should have title english with image medium', () => {
    render(<AnimeCard
      image={{
        ...coverImage,
        medium: '',
      }}
      title={{
        ...title,
        romaji: '',
      }}
      id={1}
    />)

    expect(screen.getByTestId("AnimeCard-TitleContainer")).toHaveTextContent(title.english)
    expect(screen.getByTestId("Image")).toHaveAttribute('src', coverImage.large)
  })

  test('It should have title native', () => {
    render(<AnimeCard
      image={{
        ...coverImage,
        medium: '',
        large: '',
      }}
      title={{
        ...title,
        romaji: '',
        english: '',
      }}
      id={1}
    />)

    expect(screen.getByTestId("AnimeCard-TitleContainer")).toHaveTextContent(title.native)
    expect(screen.getByTestId("Image")).toHaveAttribute('src', coverImage.extraLarge)
  })

  test('It should not have title', () => {
    render(<AnimeCard image={coverImage} shadow={true} />)

    expect(screen.queryByTestId("AnimeCard-TitleContainer")).not.toBeInTheDocument()
  })

  test('It shoul have CollectionAction', () => {
    render(<AnimeCard image={coverImage} shadow={true} title={title} id={1} />)

    expect(screen.getByTestId("CollectionAction")).toBeInTheDocument()
  })

  test('It should have DeleteAction', () => {
    render(<AnimeCard image={coverImage} shadow={true} title={title} id={1} deleteModeFromCollection="deleteModeFromCollection" />)

    expect(screen.getByTestId("DeleteAction")).toBeInTheDocument()
  })
})
