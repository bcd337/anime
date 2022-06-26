import List from "pages/anime/list"
import Detail from "pages/anime/detail"
import ListCollection from 'pages/collection/list'
import DetailCollection from 'pages/collection/detail'

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
