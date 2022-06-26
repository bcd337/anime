import styled from '@emotion/styled'
import AnimeCard from 'components/animeCard'
import AnimeBannerImage from 'components/animeBannerImage'
import Btn from 'components/button'

export const Card = styled(AnimeCard)`
  width: 8rem;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  margin: -1.5rem -1.5rem 0 -1.5rem;
  background-color: var(--light);
`
export const Image = styled(AnimeBannerImage)`
  height: 50vw;
  width: 100%;
  max-height: 25vh;
`

export const Button = styled(Btn)`
  width: 100%;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 9.5rem;
  flex: 1 1 auto;
  cursor: pointer;
  gap: 1rem;
`

export const ContainerAfterImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 1rem 1.5rem 1.5rem 1.5rem;
`
export const TitleContainer = styled.span`
  margin: 0 1.5rem 1.5rem 1.5rem;
  font-size: large;
  font-weight: bold;
`
export const ContainerIcon = styled.div<{ isLove: boolean }>`
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  background: ${props =>props.isLove ? 'red' : '#999'};
  border-radius: 0.4rem;
  flex: 0 0 auto;
  color: var(--light);
`