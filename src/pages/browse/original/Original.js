import React from 'react'
import useFetchMovies from '../../../hooks/useFetchMovies'
import { ApiKeyContext } from '../../../context/api-context'
import MovieDetailContext from '../../../context/movie-detail'
import { useContext } from 'react'
import classes from './Original.module.css'
import Detail from '../detail/Detail.js'

const Original = props => {
  const API_KEY = useContext(ApiKeyContext).API_KEY
  const url = `https://api.themoviedb.org/3//discover/tv?api_key=${API_KEY}&with_network=123`

  const { moviesList, isLoading } = useFetchMovies(url)
  const detailCtx = useContext(MovieDetailContext)

  if (isLoading) {
    // Making sure no code is executed before the movies are successfully retrieved
    return <p>Loading...</p>
  }

  const movieListRender = moviesList.results.map(movie => {
    const posterPath = movie['poster_path']
    return (
      <li key={movie.id} className={classes.item}>
        <img
          //if the id of the clicked movie is identical to the movie id currently stored in the context then
          //it means the movie is clicked for the second time which means we need to close it.
          onClick={
            movie.id === detailCtx.showingMovieId
              ? detailCtx.hideDetail
              : detailCtx.showDetail.bind(null, movie.id, props.genre)
          }
          className={classes.image}
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={movie.name}
        ></img>
      </li>
    )
  })
  const detailUrl = `https://api.themoviedb.org/3/movie/${detailCtx.showingMovieId}?api_key=${API_KEY}&with_network=123&append_to_response=videos`
  return (
    <div>
      <div className={classes.original}>
        <h1 className={classes.header}>Original</h1>
        <ul className={classes.container}>{movieListRender}</ul>
      </div>
      {detailCtx.detailIsShown && detailCtx.genre === props.genre && (
        <Detail url={detailUrl}></Detail>
      )}
    </div>
  )
}
export default Original
