import { useNavigate, useParams } from 'react-router-dom'
import GrowContainer from 'components/growContainer'
import PageContainer from 'components/pageContainer'
import Title from 'components/title'
import { useAnimeInCollection, renameCollection } from 'hooks/useCollection'
import AnimeCard from 'components/animeCard'
import AnimeList from 'components/animeList'
import { IconEdit } from 'assets/svg'
import createCollectionName from 'modal/createCollectionName'

import { TitleContainer, ContainerLink, ContainerName, ContainerIcon } from './detail.styled'

const Detail = () => {
  const navigate = useNavigate()
  const { name } = useParams()
  const animes = useAnimeInCollection(name || '')

  const onChangeName = async () => {
    if (!name) return
    const newName = await createCollectionName()
    if (!newName) return
    renameCollection(name, newName)
    navigate(`/collection/${newName}`, { replace: true })
  }

  return (
    <PageContainer  title={`Anime Collection - ${name} Collection`}>
      <TitleContainer>
        <Title>
          Detail Collection
        </Title>
      </TitleContainer>
      <ContainerName>
        {name}
        <ContainerIcon title='Edit Collection Name' onClick={onChangeName}>
          <IconEdit />
        </ContainerIcon>
      </ContainerName>
      <GrowContainer>
        <AnimeList>
          {animes.map(({ title, coverImage, id }) =>
            <ContainerLink key={id} to={`/${String(id)}`}>
              <AnimeCard
                id={id}
                shadow={true}
                title={title }
                image={coverImage}
                deleteModeFromCollection={name}
              />
            </ContainerLink>
          )}
        </AnimeList>
      </GrowContainer>
    </PageContainer>
  )
}

export default Detail
