import { useGetAnimeDetail } from 'hooks/anime/useGetAnimeDetail'
import PageContainer from 'components/pageContainer'
import AnimeBanner from 'components/animeBanner'
import Arrow from 'components/arrow'
import { useNavigate, useParams } from 'react-router-dom'
import Description from 'components/description'
import CollectionInfo from 'components/collectionInfo'
import AnimeInfo from 'components/animeInfo'
import { ButtonBack, ContainerDetail } from './detail.styled'

const Detail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { loading, error, data } = useGetAnimeDetail(Number(id))

  if (loading) return <p data-testid="Detail-loading">Loading...</p>

  if (error) return <p data-testid="Detail-error">Error :(</p>

  if (!data) return <p data-testid="Detail-no-data">Error : data not found(</p>

  const { title, bannerImage, coverImage, description } = data?.Media

  const showTitle = title ? title.romaji || title.english || title.native : 'Anime'

  const onBack = () => navigate(-1)

  return (
    <PageContainer title={`Anime Collection - ${showTitle}`}>
      <ButtonBack onClick={onBack}>
        <Arrow />
      </ButtonBack>
      <AnimeBanner
        id={Number(id)}
        src={bannerImage}
        image={coverImage }
        title={title}
      />
      <ContainerDetail>
        <CollectionInfo id={Number(id)} />
        <AnimeInfo {...data?.Media} />
        <Description desc={description} />
      </ContainerDetail>
    </PageContainer>
  )
}

export default Detail
