import styled from '@emotion/styled'

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  white-space: nowrap;
  flex-flow: column;
`

export const ButtonAdd = styled.div`
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

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
  justify-content: center;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
`
