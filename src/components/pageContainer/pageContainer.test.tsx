import { render, screen } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import PageContainer from './pageContainer.component'

describe('<PageContainer />', () => {
  test('It should mount', () => {
    render(<HelmetProvider><PageContainer title="">test</PageContainer></HelmetProvider>)
    expect(screen.getByTestId("PageContainer")).toBeInTheDocument()
  })
})
