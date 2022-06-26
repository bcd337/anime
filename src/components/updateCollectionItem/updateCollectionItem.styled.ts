import styled from '@emotion/styled'

export const ContainerItem = styled.div<{ colorFill?: boolean }>`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
  background-color: ${(props) => props.colorFill ? 'var(--background-color)' : 'var(--light)'};
  border-radius: 0.4rem;
  position: relative;
  cursor: pointer;
  flex: 1 1 auto;
`

export const ContainerTitle = styled.div`
  flex: 1 1 auto;
`

export const ContainerIcon = styled.div<{ love: boolean }>`
  position: absolute;
  right: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.love ? 'red' : '#999'};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ContainerTrash = styled.div<{ colorFill?: boolean }>`
  height: 2.75rem;
  width: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.colorFill ? 'var(--background-color)' : 'var(--light)'};
  border-radius: 0.4rem;
  cursor: pointer;
`