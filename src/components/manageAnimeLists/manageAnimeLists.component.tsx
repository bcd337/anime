import { useInView } from 'react-intersection-observer'
import AnimeCard from 'components/animeCard'
import { AnimesPage, Media } from 'common/interfaces/media.interface'
import UpdateCollection from 'components/updateCollection'
import { Container, ContainerItem, ContainerCard, ContainerCollection, ContainerTitle } from './manageAnimeLists.styled'

const ManageAnimeLists: React.FC<{
  loading: boolean,
  error: boolean,
  data: AnimesPage | undefined,
  addData?: Media[],
  pagingMode: boolean,
  morePageLoading: boolean,
  onLoadNextPage?: (inView: boolean) => void,
}> = ({ 
  loading,
  error,
  data,
  addData,
  pagingMode,
  morePageLoading,
  onLoadNextPage,
}) => {
  const { ref } = useInView({ threshold: 0, triggerOnce: false, onChange: onLoadNextPage })
  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :(</p>

  if (!data) return <p>data not found(</p>

  return (
    <Container>
      <ContainerTitle>
        <ContainerItem>Anime</ContainerItem>
        <ContainerCollection>Collection</ContainerCollection>
      </ContainerTitle>
      {[...data.Page.media, ...(addData || [])].map(({ title, coverImage, id }) =>
        <ContainerCard key={id}>
          <ContainerItem>
            <AnimeCard
              key={id}
              shadow={false}
              title={title }
              image={coverImage}
            />
          </ContainerItem>
          <ContainerCollection>
            <UpdateCollection id={id} media={{ title, coverImage, id }} create={true} colorFill={false} deleteAble={false} />
          </ContainerCollection>
        </ContainerCard>
      )}
      {!morePageLoading && !pagingMode && <div ref={ref} />}
    </Container>
  )
}

export default ManageAnimeLists
