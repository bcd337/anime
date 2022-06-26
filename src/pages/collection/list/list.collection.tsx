import GrowContainer from 'components/growContainer'
import PageContainer from 'components/pageContainer'
import Title from 'components/title'
import createCollectionName from 'modal/createCollectionName'
import { addCollection, useCollection } from 'hooks/useCollection'
import CollectionListItem from 'components/collectionListItem'

import { TitleContainer, ButtonAdd, ContainerList } from './list.styled'

const List = () => {
  const collection = useCollection()
  const onAdd = async () => {
    const name = await createCollectionName()
    if (!name) return
    addCollection(name)
  }

  return (
    <PageContainer title="Anime Collection - Collection List">
      <TitleContainer>
        <Title>
          Collection List
        </Title>
        <ButtonAdd onClick={onAdd}>Add Collection</ButtonAdd>
      </TitleContainer>
      <GrowContainer>
        <ContainerList>
          {collection.map(({ name, media }) => <CollectionListItem key={name} name={name} media={media} />)}
        </ContainerList>
      </GrowContainer>
    </PageContainer>
  )
}

export default List
