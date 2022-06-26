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
  test('It should have title romaji with image medium', async () => {
    render(<AnimeCard image={coverImage} title={title} id={1} />)

    await expect(screen.findByTestId("AnimeCard-TitleContainer")).resolves.toHaveTextContent(title.romaji)
    await expect(screen.findByTestId("Image")).resolves.toHaveAttribute('src', coverImage.medium)
  })

  test('It should have title english with image medium', async () => {
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

    await expect(screen.findByTestId("AnimeCard-TitleContainer")).resolves.toHaveTextContent(title.english)
    await expect(screen.findByTestId("Image")).resolves.toHaveAttribute('src', coverImage.large)
  })

  test('It should have title native', async () => {
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

    await expect(screen.findByTestId("AnimeCard-TitleContainer")).resolves.toHaveTextContent(title.native)
    await expect(screen.findByTestId("Image")).resolves.toHaveAttribute('src', coverImage.extraLarge)
  })

  test('It should not have title', async () => {
    render(<AnimeCard image={coverImage} shadow={true} />)

    expect(screen.queryByTestId("AnimeCard-TitleContainer")).not.toBeInTheDocument()
  })

  test('It shoul have CollectionAction', async () => {
    render(<AnimeCard image={coverImage} shadow={true} title={title} id={1} />)

    await expect(screen.findByTestId("CollectionAction")).resolves.toBeInTheDocument()
  })

  test('It should have DeleteAction', async () => {
    render(<AnimeCard image={coverImage} shadow={true} title={title} id={1} deleteModeFromCollection="deleteModeFromCollection" />)

    await expect(screen.findByTestId("DeleteAction")).resolves.toBeInTheDocument()
  })
})
