import { screen, render } from '@testing-library/react'
import { Date } from 'common/interfaces/date.interface'
import { Studio } from 'common/interfaces/media.interface'
import AnimeInfo from './animeInfo.component'

const data: Date = {
  year: 2020,
  month: 1,
  day: 10,
}

const studio: Studio[] = [{
  id: 1,
  name: "string",
}]

describe('<AnimeInfo />', () => {
  test('It should have studios', async () => {
    render(<AnimeInfo 
      episodes={1}
      format="format"
      duration={1}
      status="FINISHED"
      startDate={data}
      endDate={data}
      season="WINTER"
      seasonYear={2020}
      averageScore={10}
      popularity={10}
      studios={{
        nodes: studio,
      }}
      genres={["1", "2"]}
    />)

    await expect(screen.findByTestId("AnimeInfo-studios")).resolves.toHaveTextContent("string")
  })

  test('It should not have studios', async () => {
    render(<AnimeInfo 
      episodes={1}
      format="format"
      duration={1}
      status="FINISHED"
      startDate={data}
      endDate={data}
      season="WINTER"
      seasonYear={2020}
      averageScore={0}
      popularity={10}
      studios={{
        nodes: [],
      }}
      genres={["1", "2"]}
    />)

    await expect(screen.findByTestId("AnimeInfo-studios")).resolves.toHaveTextContent("")
  })
})
