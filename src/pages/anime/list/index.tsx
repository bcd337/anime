import { lazy, Suspense } from 'react'

const List = lazy(() => import("./list.anime"))

export const ListAnime = () => (
  <Suspense fallback="Loading...">
    <List />
  </Suspense>
)

export default ListAnime
