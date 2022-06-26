import { gql, useQuery } from "@apollo/client"
import apollo from 'common/apollo'
import { AnimesPage } from 'common/interfaces/media.interface'

export const GET_ANIMES = gql`
  query GetAnimes($sort: [MediaSort], $page: Int, $perPage: Int ) {
    Page (page: $page, perPage: $perPage) {
      id @client
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (type: ANIME, sort: $sort) {
        id
        coverImage {
          extraLarge
          large
          medium
          color
        }
        title {
          romaji
          native
          english
        }
      }
    }
  }
`

export const useGetAnimes = (sort: string, page: number, perPage: number = 10 ) => 
  useQuery<AnimesPage, { sort: string, page: number, perPage?: number }>(GET_ANIMES, { variables: { sort, page, perPage }})

export const getAnimesPromise = (sort: string, page: number, perPage: number = 10 ) => 
  apollo.query<AnimesPage, { sort: string, page: number, perPage?: number }>({ query: GET_ANIMES, variables: { sort, page, perPage } })
