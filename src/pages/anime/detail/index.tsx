import { lazy, Suspense } from 'react'

const Detail = lazy(() => import("./detail.anime"))

export const DetailAnime = () => (
  <Suspense fallback="Loading...">
    <Detail />
  </Suspense>
)

export default DetailAnime
