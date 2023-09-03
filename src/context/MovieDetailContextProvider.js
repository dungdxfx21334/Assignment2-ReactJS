import React from 'react'
import MovieDetailContext from './movie-detail'
import { useState } from 'react'

const MovieDetailContextProvider = props => {
  const [detailIsShown, setDetailIsShown] = useState(false)
  const [showingMovieId, setShowingMovieId] = useState(null) // id of the movie whose details are being shown.
  const [genre, setGenre] = useState(null) // which category to show the detail under.

  const showDetailHandler = (movieId, genre) => {
    setGenre(genre)
    setShowingMovieId(movieId)
    setDetailIsShown(true)
  }

  const hideDetailHandler = () => {
    setShowingMovieId(null)
    setDetailIsShown(false)
    setGenre(null)
  }

  const detailContext = {
    detailIsShown: detailIsShown,
    showingMovieId,
    showDetail: showDetailHandler,
    hideDetail: hideDetailHandler,
    genre: genre
  }

  return (
    <MovieDetailContext.Provider value={detailContext}>
      {props.children}
    </MovieDetailContext.Provider>
  )
}
export default MovieDetailContextProvider
