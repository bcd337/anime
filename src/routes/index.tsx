import List from "pages/anime/list/list.anime"
import Detail from "pages/anime/detail/detail.anime"
import ListCollection from 'pages/collection/list/list.collection'
import DetailCollection from 'pages/collection/detail/detail.collection'

const routes = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <List />,
      },
      {
        path: ':id',
        element: <Detail />,
      },
      {
        index: true,
        path: 'collection',
        element: <ListCollection />,
      },
      {
        path: 'collection/:name',
        element: <DetailCollection />
      }
    ],
  },
]

export default routes
