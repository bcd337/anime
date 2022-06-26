import styled from '@emotion/styled'

export const ContainerIcon = styled.div<{ love: boolean }>`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1rem;
  background: white;
  border-radius: 50%;
  color: ${(props) => props.love ? 'red' : '#999'};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
`
