import { gql, useQuery } from "@apollo/client"
import { MediaDetail } from 'common/interfaces/media.interface'

const GET_ANIME_DETAIL = gql`
  query GetAnimeDetail($id: Int) {
    Media (id: $id) {
      id 
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      description
      title {
        romaji
        native
        english
      }
      episodes
      genres
      popularity
      averageScore
      duration
      format
      status
      season
      seasonYear
      studios(isMain: true) {
        nodes {
          id
          name
        }
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      seasonYear
    }
  }
`

export const useGetAnimeDetail = (id: number) => useQuery<{ Media: MediaDetail }, { id: number }>(GET_ANIME_DETAIL, { variables: { id }})