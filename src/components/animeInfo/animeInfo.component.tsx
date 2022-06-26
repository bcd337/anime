import React from 'react'
import { Date } from 'common/interfaces/date.interface'
import { Studio } from 'common/interfaces/media.interface'
import month from 'common/constant/month.json'
import statusData from 'common/constant/status.json'
import seasonData from 'common/constant/season.json'
import { Container, ContainerBody, ContainerTitle, Item, ItemBody, ItemTitle } from './animeInfo.styled'

const AnimeInfo: React.FC<{
  episodes: number,
  format: string,
  duration: number,
  status: "FINISHED" | "RELEASING" | "NOT_YET_RELEASED" | "CANCELLED" | "HIATUS",
  startDate: Date,
  endDate: Date,
  season: "WINTER" | "SPRING" | "SUMMER" | "FALL",
  seasonYear: number,
  averageScore: number,
  popularity: number,
  studios: {
    nodes: Studio[]
  }
  genres: string[],
}> = ({
  episodes,
  format,
  duration,
  status,
  startDate,
  endDate,
  season,
  seasonYear,
  averageScore,
  popularity,
  studios,
  genres,
}) => {
  return (
    <Container>
      <ContainerTitle>Anime Info</ContainerTitle>
      <ContainerBody>
        <Item>
          <ItemTitle>Format</ItemTitle>
          <ItemBody>{format}</ItemBody>
        </Item>
        <Item>
          <ItemTitle>Episodes</ItemTitle>
          <ItemBody>{episodes}</ItemBody>
        </Item>
        <Item>
          <ItemTitle>Episodes Duration</ItemTitle>
          <ItemBody>{duration} mins</ItemBody>
        </Item>
        <Item>
          <ItemTitle>Status</ItemTitle>
          <ItemBody>{statusData[status]}</ItemBody>
        </Item>
        <Item>
          <ItemTitle>Start Date</ItemTitle>
          <ItemBody>{`${month.short[startDate.month]} ${startDate.day}, ${startDate.year}`}</ItemBody>
        </Item>
        <Item>
          <ItemTitle>End Date</ItemTitle>
          <ItemBody>{`${month.short[endDate.month]} ${endDate.day}, ${endDate.year}`}</ItemBody>
        </Item>
        <Item>
          <ItemTitle>Season</ItemTitle>
          <ItemBody>{`${seasonData[season]} ${seasonYear}`}</ItemBody>
        </Item>
        <Item>
          <ItemTitle>Average Score</ItemTitle>
          <ItemBody>{`${averageScore || 0}%`}</ItemBody>
        </Item>
        <Item>
          <ItemTitle>Popularity</ItemTitle>
          <ItemBody>{popularity}</ItemBody>
        </Item>
        <Item>
          <ItemTitle>Studios</ItemTitle>
          <ItemBody data-testid="AnimeInfo-studios">{studios.nodes.map((value) => value.name).join(', ')}</ItemBody>
        </Item>
        <Item>
          <ItemTitle>Genres</ItemTitle>
          <ItemBody>{genres.join(', ')}</ItemBody>
        </Item>
      </ContainerBody>
    </Container>
  )
}

export default AnimeInfo
