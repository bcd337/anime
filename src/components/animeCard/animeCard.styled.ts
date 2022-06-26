import styled from '@emotion/styled'
import Img from 'components/img'


export const Image = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  background: transparent;
`

export const ContainerImage = styled.div<{ shadow?: boolean }>`
  background-color: ${props => props.color};
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  box-shadow: ${props => props.shadow && '0 0 0.5rem #9d9d9d'};

  ::before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-bottom: 142.85714%;
  }
`

export const TitleContainer = styled.div`
  font-size: small;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-clamp: 2;
`

export const Container = styled.div`
  flex-flow: column;
  width: 100%;
  gap: 0.5rem;
  display: grid;
  grid-template-rows: min-content auto;
  position: relative;
  text-decoration: none;

  :hover {
    --color: red;
  }
`
