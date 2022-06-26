import { screen, render } from '@testing-library/react'
import AnimeControl from './animeControl.component'

describe('<AnimeControl />', () => {
  test('It should have ItemPaging', () => {
    render(<AnimeControl 
      onChangePagingMode={jest.fn()}
      onPageChange={jest.fn()} 
      pageCount={10}
      page={1}
      pagingMode={true}
    />)

    expect(screen.getByTestId("animeControl-ItemPaging")).toBeInTheDocument()
  })

  test('It should not have ItemPaging', () => {
    render(<AnimeControl 
      onChangePagingMode={jest.fn()}
      onPageChange={jest.fn()} 
      pageCount={0}
      page={1}
      pagingMode={true}
    />)

    expect(screen.queryByTestId("animeControl-ItemPaging")).not.toBeInTheDocument()
  })

  test('It should not have ItemPaging with pagingMode=false', () => {
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
