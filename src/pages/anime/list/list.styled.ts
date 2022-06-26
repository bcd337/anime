import styled from '@emotion/styled'
import SelectElement from 'components/select'

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  white-space: nowrap;
  flex-flow: column;
`
export const SortContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`

export const Select = styled(SelectElement)`
  flex: 1 1 auto;
`

export const ButtonManage = styled.div`
  font-size: 1rem;
  border: none;
  background: white;
  border-radius: 0.4rem;
  height: 2.75rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
