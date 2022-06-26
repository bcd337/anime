import { IconHeart, IconTrash } from 'assets/svg'
import { removeCollection } from 'hooks/useCollection'
import { ContainerIcon, ContainerTitle, ContainerItem, Container, ContainerTrash } from './updateCollectionItem.styled'

const UpdateCollectionItem: React.FC<{
  love: boolean,
  onToogle: (name: string) => void,
  name: string,
  colorFill?: boolean,
  deleteAble?: boolean,
}> = ({
  love,
  onToogle,
  name,
  colorFill,
  deleteAble
}) => {
  const onClick = () => onToogle(name)
  const onRemove = () => removeCollection(name)

  return (
    <Container>
      <ContainerItem onClick={onClick} colorFill={colorFill}>
        <ContainerTitle>
          {name}
        </ContainerTitle>
        <ContainerIcon love={love}>
          <IconHeart />
        </ContainerIcon>
      </ContainerItem>
      {deleteAble && <ContainerTrash colorFill={colorFill} onClick={onRemove}><IconTrash /></ContainerTrash>}
    </Container>
  )
}

export default UpdateCollectionItem
