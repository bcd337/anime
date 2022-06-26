import CollectionAction from 'components/collectionAction'
import DeleteAction from 'components/deleteAction'
import { Container, TitleContainer, Image, ContainerImage } from './animeCard.styled'
import { Title, CoverImage } from 'common/interfaces/media.interface'

const AnimeCard: React.FC<{ 
  id?: number,
  title?: Title,
  image: CoverImage,
  className?: string,
  shadow?: boolean,
  deleteModeFromCollection?: string,
}> = ({ 
  title, 
  image, 
  className,
  shadow,
  id,
  deleteModeFromCollection = "",
}) => {
  const showTitle = title ? title.romaji || title.english || title.native : ''
  const showImage = image.medium || image.large || image.extraLarge

  const showAction = !!id && !!title
  const actionCollection = showAction && !deleteModeFromCollection
  const actionDelete = showAction && !!deleteModeFromCollection

  return (
    <Container className={className}>
      <ContainerImage color={image.color} shadow={shadow} >
        <Image src={showImage} alt={showTitle} />
        {actionCollection && (
          <CollectionAction
            id={id}
            title={title}
            coverImage={image}
            icon={true}
          />
        )}
        {actionDelete && (
          <DeleteAction
            id={id}
            title={showTitle}
            name={deleteModeFromCollection}
          />
        )}
      </ContainerImage>
      {showTitle && <TitleContainer data-testid="AnimeCard-TitleContainer">{showTitle}</TitleContainer>}
    </Container>
  )
}

export default AnimeCard
