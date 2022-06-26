import React from "react"
import { Container, Grid } from './animeList.styled'

const AnimeList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Grid>
        {children}
      </Grid>
    </Container>
  )
}

export default AnimeList
