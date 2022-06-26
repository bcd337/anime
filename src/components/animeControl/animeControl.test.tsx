import { screen, render } from '@testing-library/react'
import AnimeControl from './animeControl.component'

describe('<AnimeControl />', () => {
  test('It should have ItemPaging', async () => {
    render(<AnimeControl 
      onChangePagingMode={jest.fn()}
      onPageChange={jest.fn()} 
      pageCount={10}
      page={1}
      pagingMode={true}
    />)

    await expect(screen.findByTestId("animeControl-ItemPaging")).resolves.toBeInTheDocument()
  })

  test('It should not have ItemPaging', async () => {
    render(<AnimeControl 
      onChangePagingMode={jest.fn()}
      onPageChange={jest.fn()} 
      pageCount={0}
      page={1}
      pagingMode={true}
    />)

    expect(screen.queryByTestId("animeControl-ItemPaging")).not.toBeInTheDocument()
  })

  test('It should not have ItemPaging with pagingMode=false', async () => {
    render(<AnimeControl 
      onChangePagingMode={jest.fn()}
      onPageChange={jest.fn()} 
      pageCount={10}
      page={1}
      pagingMode={false}
    />)

    expect(screen.queryByTestId("animeControl-ItemPaging")).not.toBeInTheDocument()
  })
})
