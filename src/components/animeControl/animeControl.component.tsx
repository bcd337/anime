import ReactPaginate from 'react-paginate'
import { IconPaging, IconScroll, IconDot } from 'assets/svg'
import Arrow from 'components/arrow'
import { Container, Item, ItemPaging } from './animeControl.styled'

const animeControl: React.FC<{ 
  onChangePagingMode: () => void,
  onPageChange: ({ selected }: { selected: number }) => void, 
  pageCount: number, 
  page: number,
  pagingMode: boolean,
}> = ({
  onChangePagingMode,
  onPageChange,
  pageCount,
  page,
  pagingMode,
}) => {
  return (
    <Container>
      <Item active={!pagingMode} onClick={onChangePagingMode} title="Infinite scroll mode">
        <IconScroll />
      </Item>
      <Item active={pagingMode} onClick={onChangePagingMode} title="Pagination mode">
        <IconPaging />
      </Item>
      {pagingMode && pageCount > 0 && (
        <ItemPaging data-testid="animeControl-ItemPaging">
          <ReactPaginate
            breakLabel={<IconDot />}
            nextLabel={<Arrow tail={false} direction="right" />}
            onPageChange={onPageChange}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            forcePage={page}
            pageCount={pageCount}
            previousLabel={<Arrow tail={false} direction="left" />}
          />
        </ItemPaging>
      )}
    </Container>
  )
}

export default animeControl
