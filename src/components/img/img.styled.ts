import styled from '@emotion/styled'

export const ContainerImage = styled.div`
  background: linear-gradient(180deg, var(--light) 40%, var(--shadow-dark));
`

export const Image = styled.img<{ load: boolean }>`
  object-fit: cover;
  background: linear-gradient(180deg, var(--light) 40%, var(--shadow-dark));
  opacity: ${(props) => props.load ? 1 : 0};
  height: 100%;
  width: 100%;
`

export const ImageError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color);
  background: linear-gradient(180deg, var(--light) 40%, var(--shadow-dark));
`