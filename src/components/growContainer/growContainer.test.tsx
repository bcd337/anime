import { render } from '@testing-library/react'
import GrowContainer from './growContainer.styled'

describe('<GrowContainer />', () => {
  test('It should mount', () => {
    render(<GrowContainer />)
  })
})
