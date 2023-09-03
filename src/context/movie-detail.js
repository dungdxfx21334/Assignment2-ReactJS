import { createContext } from 'react'

const MovieDetailContext = createContext({
  detailIsShown: false,
  showingMovieId: null,
  showDetail: () => {},
  hideDetail: () => {},
  genre: null // What category to show at.
})

export default MovieDetailContext
