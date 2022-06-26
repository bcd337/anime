import { lazy, Suspense } from 'react'

const Detail = lazy(() => import("./detail.collection"))

export const DetailCollection = () => (
  <Suspense fallback="Loading...">
    <Detail />
  </Suspense>
)

export default DetailCollection
