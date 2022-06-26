import styled from '@emotion/styled'
import SelectElement from 'components/select'
import ButtonCicle from 'components/buttonCicle'

export const SortContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  width: 100%;
`

export const Select = styled(SelectElement)`
  flex: 1 1 auto;
  background-color: var(--background-color);
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  gap: 1rem;
`

export const ButtonSort =  styled(ButtonCicle)`
  background-color: var(--background-color);
`
