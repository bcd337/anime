import { useState  } from 'react'
import useStateHistory from 'hooks/useStateHistory'
import { useGetAnimes, getAnimesPromise } from 'hooks/anime/useGetAnimes'
import { Media } from 'common/interfaces/media.interface'
import manageCollection from 'modal/manageCollection'

import { IconSortAsc, IconSortDesc } from 'assets/svg'

import PageContainer from 'components/pageContainer'
import ButtonCicle from 'components/buttonCicle'
import AnimeControl from 'components/animeControl'
import AnimeLists from 'components/animeLists'
import Title from 'components/title'

import option from 'common/constant/sort.json'
import { TitleContainer, SortContainer, Select, ButtonManage, ContainerControl, ContainerBody } from './list.styled'

const List = () => { 
  const [pagingMode, setPagingMode] = useStateHistory('pagingMode', true)
  const [page, setPage] = useStateHistory('page', 0)
  const [morePageLoading, setMorePageLoading] = useState(false)
  const [sort, setSort] = useStateHistory('sort', option[0].value)
  const [orderAsc, setOrderAsc] = useStateHistory('orderAsc', false)
  const { loading, error, data, previousData } = useGetAnimes(`${sort}${!orderAsc ? '_DESC' : ''}`, page + 1)
  const [additionalData, setAdditionalData] = useState<Media[]>([])
  const [lastPageAdditional, setLastPageAdditional] = useState(1)
 
  const onLoadNextPage = async (inView: boolean) => {
    if (!inView) return
    if (pagingMode) return
    if (morePageLoading) return

    setMorePageLoading(true)
    const { data: addData } = await getAnimesPromise(`${sort}${!orderAsc ? '_DESC' : ''}`, lastPageAdditional + 1)
    setLastPageAdditional(lastPageAdditional + 1)
    const combine = [...data?.Page.media || [], ...additionalData]

    setAdditionalData([
      ...additionalData,
      ...addData.Page.media.filter(({ id }) => combine.findIndex((v) => v.id === id) < 0),
    ])
    
    setMorePageLoading(false)
  }

  const onSort = ({ target }: React.ChangeEvent<HTMLSelectElement>) => setSort(target.value)
  const onToogleSort = () => {
    setPage(0)
    setOrderAsc(!orderAsc)
  }
  const onPageChange = ({ selected }: { selected: number }) => setPage(selected)
  const onChangePagingMode = async () => {
    setLastPageAdditional(1)
    setAdditionalData([])
    setPage(0)
    setPagingMode(!pagingMode)
  }

  const onManage = () => manageCollection()

  return (
    <>
      <PageContainer title="Anime Collection - Anime List">
        <TitleContainer>
          <Title>
            Anime List
          </Title>
          <ButtonManage onClick={onManage}>Manage Collection</ButtonManage>
          <SortContainer>
            <Select onChange={onSort} value={sort} options={option} />
            <ButtonCicle title={orderAsc ? 'Ascending' : 'Descending'}>
              {orderAsc && <IconSortAsc onClick={onToogleSort} />}
              {!orderAsc && <IconSortDesc onClick={onToogleSort} />}
            </ButtonCicle>
          </SortContainer>
        </TitleContainer>
        <ContainerBody>
          <AnimeLists
            loading={loading}
            error={!!error}
            data={data}
            addData={!pagingMode ? additionalData : []}
            onLoadNextPage={onLoadNextPage}
            pagingMode={pagingMode}
            morePageLoading={morePageLoading}
          />
          {morePageLoading && !pagingMode && "Loading..."}
        </ContainerBody>
      </PageContainer>
      <ContainerControl>
        <AnimeControl
          onPageChange={onPageChange}
          pageCount={(data || previousData)?.Page.pageInfo.lastPage || 0}
          page={page}
          onChangePagingMode={onChangePagingMode}
          pagingMode={pagingMode}
        />
      </ContainerControl>
    </>
  )
}

export default List
