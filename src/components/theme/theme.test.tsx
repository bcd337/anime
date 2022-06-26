import { render } from '@testing-library/react'
import Theme from './theme.component'

describe('<Theme />', () => {
  test('It should mount', () => {
    render(<Theme>test</Theme>)
  })
})
