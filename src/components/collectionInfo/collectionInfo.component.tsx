
import React from 'react'
import { useAllCollectionOfAnime } from 'hooks/useCollection'
import CollectionInfoItem from 'components/collectionInfoItem'
import { color } from 'helpers/color'
import { ColorPercentage } from 'common/interfaces/color.interface'
import { Container, ContainerBody, ContainerTitle } from './collectionInfo.styled'

const configColor: ColorPercentage[] = [
  {
    percentage: 0,
    color: { r: 61, g: 180, b: 242 }
  },
  { 
    percentage: 0.5,
    color: { r: 61, g: 242, b: 81 }
  },
  {
    percentage: 1,
    color: { r: 242, g: 61, b: 61 }
  }
]

const CollectionInfo: React.FC<{ id: number }> = ({ id }) => {
  const collection = useAllCollectionOfAnime(id)

  if (collection.length === 0) return null

  return (
    <Container>
      <ContainerTitle>Collection Info</ContainerTitle>
      <ContainerBody>
        {collection.map((name, i, arr) => <CollectionInfoItem name={name} key={name} color={color(configColor, (i + 1) / arr.length * 100)}/>)}
      </ContainerBody>
    </Container>
  )
}

export default CollectionInfo
