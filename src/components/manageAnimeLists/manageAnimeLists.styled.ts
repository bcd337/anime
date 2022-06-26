import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  flex-flow: column;
`

export const ContainerItem = styled.div`
  flex: 0 0 10rem;
`

export const ContainerCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  background-color: var(--background-color);
  border-radius: 0.4rem;
`

export const ContainerTitle = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  background-color: var(--background-color);
  border-radius: 0.4rem;
`

export const ContainerCollection = styled.div`
  flex: 1 1 auto;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;

  > * { 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`
