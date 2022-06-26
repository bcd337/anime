import { ChangeEvent, useState } from 'react'
import { useAllCollectionOfAnime, useAllCollectionName, addMediaToCollection, removeMediaFromCollection, addCollection, isDuplicate } from 'hooks/useCollection'
import { Media } from 'common/interfaces/media.interface'
import UpdateCollectionItem from 'components/updateCollectionItem'
import MySwal from 'modal'
import { Container, CreateContainer, CreateInput, CreateButton } from './updateCollection.styled'

const UpdateCollection: React.FC<{
  id: string | number,
  media: Media,
  create?: boolean,
  colorFill?: boolean,
  deleteAble?: boolean,
}> = ({
  id,
  media,
  create = true,
  colorFill,
  deleteAble,
}) => {
  const collectionNames = useAllCollectionName()
  const tempCollectionOfAnime = useAllCollectionOfAnime(id)
  const [name, setName] = useState('')

  const love = (collectionName: string) => tempCollectionOfAnime.findIndex(v => v === collectionName) >= 0

  const onToogle = (collectionName: string) => {
    const isLove = tempCollectionOfAnime.findIndex((v) => v === collectionName) >= 0
    if (isLove) {
      removeMediaFromCollection(collectionName, id)
      return
    }

    addMediaToCollection(collectionName, media)
  }

  const onCreateCollection = () => {
    if (!name) return
    if (isDuplicate(name)) {
      MySwal.showValidationMessage('Collection name must unique')
      return
    }
    addCollection(name)
    setName('')
  }

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <Container>
      {collectionNames.map((collectionName) => (
        <UpdateCollectionItem
          key={collectionName}
          love={love(collectionName)}
          onToogle={onToogle}
          name={collectionName}
          colorFill={colorFill}
          deleteAble={deleteAble}
        />
      ))}
      {create && (
        <CreateContainer colorFill={colorFill}>
          <CreateInput onChange={changeName} value={name} placeholder="- Collection Name -" data-testid="UpdateCollection-CreateInput"/>
          <CreateButton onClick={onCreateCollection} colorFill={colorFill} data-testid="UpdateCollection-CreateButton">Create</CreateButton>
        </CreateContainer>
      )}
    </Container>
  )
}

export default UpdateCollection
