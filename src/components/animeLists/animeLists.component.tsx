import { useInView } from 'react-intersection-observer'
import AnimeCard from 'components/animeCard'
import AnimeList from 'components/animeList'
import { AnimesPage, Media } from 'common/interfaces/media.interface'
import { ContainerLink } from './animeLists.styled'
import { LegacyRef } from 'react'

const AnimeLists: React.FC<{
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
  const { ref } = useInView({ threshold: 0, triggerOnce: false, onChange: onLoadNextPage, initialInView: true })

  const re: LegacyRef<HTMLDivElement | null> = (r) => {
    ref(r)
  }
  if (loading) return <p data-testid="AnimeLists-loading">Loading...</p>

  if (error) return <p data-testid="AnimeLists-error">Error :(</p>

  if (!data) return <p data-testid="AnimeLists-no-data">data not found(</p>

  return (
    <AnimeList>
      {[...data.Page.media, ...(addData || [])].map(({ title, coverImage, id }) =>
        <ContainerLink key={id} to={String(id)}>
          <AnimeCard
            id={id}
            shadow={true}
            title={title }
            image={coverImage}
          />
        </ContainerLink>
      )}
      {!morePageLoading && !pagingMode && <div ref={re} data-testid="AnimeLists-div" />}
    </AnimeList>
  )
}

export default AnimeLists
