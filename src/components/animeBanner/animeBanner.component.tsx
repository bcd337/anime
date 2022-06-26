import { MouseEventHandler } from 'react'
import { Title, CoverImage } from 'common/interfaces/media.interface'
import { useAllCollectionOfAnime } from 'hooks/useCollection'
import updateCollectionSingleMedia from 'modal/updateCollectionSingleMedia'
import { IconHeart } from 'assets/svg'
import { Container, Card, Image, Button, ContainerButton, ContainerAfterImage, TitleContainer, ContainerIcon } from './animeBanner.styled'

const AnimeBanner: React.FC<{ id: number, src: string, image: CoverImage, title: Title }> = ({ 
  src,
  image,
  title,
  id,
}) => {
  const collectionOfAnime = useAllCollectionOfAnime(id)

  const showTitle = title ? title.romaji || title.english || title.native : ''

  const toogleCollection: MouseEventHandler = async (event) => {
    event.preventDefault()
    
    await updateCollectionSingleMedia(id, {
      id,
      coverImage: image,
      title,
    })
  }

  const labelButton = collectionOfAnime.length === 0 ? 'Add to Collection' : 'Manage Collection' 

  return (
    <Container>
      <Image src={src} />
      <ContainerAfterImage>
        <Card image={image} />
        <ContainerButton onClick={toogleCollection}>
          <Button >{labelButton}</Button>
          <ContainerIcon isLove={collectionOfAnime.length > 0 }><IconHeart /></ContainerIcon>
        </ContainerButton>
      </ContainerAfterImage>
      <TitleContainer>{showTitle}</TitleContainer>
    </Container>
  )
}

export default AnimeBanner
