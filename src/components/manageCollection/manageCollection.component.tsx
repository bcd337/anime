import { useState  } from 'react'
import useStateHistory from 'hooks/useStateHistory'
import { useGetAnimes, getAnimesPromise } from 'hooks/anime/useGetAnimes'
import { Media } from 'common/interfaces/media.interface'

import { IconSortAsc, IconSortDesc } from 'assets/svg'

import ManageAnimeLists from 'components/manageAnimeLists'

import option from 'common/constant/sort.json'

import { ApolloProvider } from '@apollo/client'
import apollo from 'common/apollo'

import { SortContainer, Select, Container, ButtonSort } from './manageCollection.styled'

const ManageCollection = () => {
  const [page, setPage] = useStateHistory('page', 0)
  const [morePageLoading, setMorePageLoading] = useState(false)
  const [sort, setSort] = useStateHistory('sort', option[0].value)
  const [orderAsc, setOrderAsc] = useStateHistory('orderAsc', false)
  const { loading, error, data } = useGetAnimes(`${sort}${!orderAsc ? '_DESC' : ''}`, page + 1)
  const [additionalData, setAdditionalData] = useState<Media[]>([])
  const [lastPageAdditional, setLastPageAdditional] = useState(1)
 
  const onLoadNextPage = async (inView: boolean) => {
    if (!inView) return
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

  return (
    <Container>
      <SortContainer>
        <Select onChange={onSort} value={sort} options={option} />
        <ButtonSort title={orderAsc ? 'Ascending' : 'Descending'}>
          {orderAsc && <IconSortAsc onClick={onToogleSort} data-testid="ManageCollection-toogle-sort" />}
          {!orderAsc && <IconSortDesc onClick={onToogleSort} data-testid="ManageCollection-toogle-sort" />}
        </ButtonSort>
      </SortContainer>
      <ManageAnimeLists
        loading={loading}
        error={!!error}
        data={data}
        addData={additionalData}
        onLoadNextPage={onLoadNextPage}
        pagingMode={false}
        morePageLoading={morePageLoading}
      />
      {morePageLoading && "Loading..."}
    </Container>
  )
}

const Wrap = () => <ApolloProvider client={apollo}><ManageCollection /></ApolloProvider>

export default Wrap
