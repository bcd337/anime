import { Page } from "./page.interface"
import { Date } from './date.interface'

export interface Studio {
  id: number
  name: string
}

export interface CoverImage {
  extraLarge: string
  large: string
  medium: string
  color: string
}

export interface Title {
  romaji: string
  english: string
  native: string
}

export interface Media {
  id: number
  coverImage: CoverImage
  title: Title
}

export interface MediaDetail { 
  id: number
  coverImage: CoverImage
  bannerImage: string
  description: string
  title: Title
  episodes: number
  format: string
  duration: number
  status: "FINISHED" | "RELEASING" | "NOT_YET_RELEASED" | "CANCELLED" | "HIATUS"
  startDate: Date
  endDate: Date
  season: "WINTER" | "SPRING" | "SUMMER" | "FALL"
  seasonYear: number
  averageScore: number
  popularity: number
  studios: {
    nodes: Studio[]
  }
  genres: string[]
}

export interface AnimesPage {
  Page: {
    pageInfo: Page
    media: Media[]
  }
}

export interface MediaCollection {
  name: string
  media: Media[]
}
