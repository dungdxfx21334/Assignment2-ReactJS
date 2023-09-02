import React from 'react'
import useFetchMovies from '../../../hooks/useFetchMovies'
import { ApiKeyContext } from '../../../context/api-context'
import { useContext } from 'react'
import classes from './Original.module.css'

const Original = () => {
  const API_KEY = useContext(ApiKeyContext).API_KEY
  const url = `https://api.themoviedb.org/3//discover/tv?api_key=${API_KEY}&with_network=123`

  const { moviesList, isLoading } = useFetchMovies(url)

  if (isLoading) {
    // Making sure no code is executed before the movies are successfully retrieved
    return <p>Loading...</p>
  }

  const movieListRender = moviesList.results.map(movie => {
    const posterPath = movie['poster_path']
    return (
      <li key={movie.id} className={classes.item}>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={movie.name}
        ></img>
      </li>
    )
  })

  return (
    <div className={classes.original}>
      <h1 className={classes.header}>Original</h1>
      <ul className={classes.container}>{movieListRender}</ul>
    </div>
  )
}
export default Original
