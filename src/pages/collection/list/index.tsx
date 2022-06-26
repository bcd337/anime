import { lazy, Suspense } from 'react'

const List = lazy(() => import("./list.collection"))

export const ListCollection = () => (
  <Suspense fallback="Loading...">
    <List />
  </Suspense>
)

export default ListCollection
