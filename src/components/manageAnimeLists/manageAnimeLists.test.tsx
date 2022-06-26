import { screen, render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { CoverImage, Title, AnimesPage, Media } from 'common/interfaces/media.interface'
import ManageAnimeLists from './manageAnimeLists.component'

jest.mock('react-intersection-observer', () => ({
  ...jest.requireActual('react-intersection-observer'),
  useInView: () => ({ ref: () => null }),
}))

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

const media: Media = {
  id: 1,
  coverImage: coverImage,
  title: title,
}

const data: AnimesPage = {
  Page: {
    pageInfo: {
      total: 0,
      currentPage: 0,
      lastPage: 0,
      hasNextPage: false,
      perPage: 0,
    },
    media: [{
      ...media,
      id: 2,
    }],
  },
}

describe('<ManageAnimeLists />', () => {
  test('It should render ManageAnimeLists', () => {
    render(<BrowserRouter><ManageAnimeLists 
      loading={false}
      error={false}
      data={data}
      addData={[media]}
      pagingMode={false}
      morePageLoading={false}
      onLoadNextPage={jest.fn()}
    /></BrowserRouter>)

    expect(screen.getByTestId("ManageAnimeLists-Container")).toBeInTheDocument()
  })

  test('It should not render ManageAnimeLists-div with pagingMode', () => {
    render(<BrowserRouter><ManageAnimeLists 
      loading={false}
      error={false}
      data={data}
      addData={undefined}
      pagingMode={true}
      morePageLoading={false}
      onLoadNextPage={jest.fn()}
    /></BrowserRouter>)

    expect(screen.queryByTestId("ManageAnimeLists-div")).not.toBeInTheDocument()
  })

  test('It should not render ManageAnimeLists-div with morePageLoading', () => {
    render(<BrowserRouter><ManageAnimeLists 
      loading={false}
      error={false}
      data={data}
      addData={[]}
      pagingMode={true}
      morePageLoading={false}
      onLoadNextPage={jest.fn()}
    /></BrowserRouter>)

    expect(screen.queryByTestId("ManageAnimeLists-div")).not.toBeInTheDocument()
  })

  test('It should render loading', () => {
    render(<BrowserRouter><ManageAnimeLists 
      loading={true}
      error={false}
      data={data}
      addData={[]}
      pagingMode={false}
      morePageLoading={false}
      onLoadNextPage={jest.fn()}
    /></BrowserRouter>)

    expect(screen.getByTestId("ManageAnimeLists-loading")).toBeInTheDocument()
  })

  test('It should render error', () => {
    render(<BrowserRouter><ManageAnimeLists 
      loading={false}
      error={true}
      data={data}
      addData={[]}
      pagingMode={false}
      morePageLoading={false}
      onLoadNextPage={jest.fn()}
    /></BrowserRouter>)

    expect(screen.getByTestId("ManageAnimeLists-error")).toBeInTheDocument()
  })

  test('It should render no data', () => {
    render(<BrowserRouter><ManageAnimeLists 
      loading={false}
      error={false}
      data={undefined}
      addData={[]}
      pagingMode={false}
      morePageLoading={false}
      onLoadNextPage={jest.fn()}
    /></BrowserRouter>)

    expect(screen.getByTestId("ManageAnimeLists-no-data")).toBeInTheDocument()
  })
})
