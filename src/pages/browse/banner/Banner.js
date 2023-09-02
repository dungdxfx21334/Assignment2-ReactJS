import useFetchMovies from '../../../hooks/useFetchMovies'
import { ApiKeyContext } from '../../../context/api-context'
import { useContext } from 'react'
import React from 'react'
import Button from '../../../UI/Button'
import classes from './Banner.module.css'

const Banner = () => {
  const API_KEY = useContext(ApiKeyContext).API_KEY
  const url = `https://api.themoviedb.org/3//discover/tv?api_key=${API_KEY}&with_network=123`

  const { moviesList, isLoading } = useFetchMovies(url)

  if (isLoading) {
    // Making sure no code is executed before the movies are successfully retrieved
    return <p>Loading...</p>
  }

  const bannerSelectedMovie =
    moviesList.results[
      Math.floor(Math.random() * moviesList.results.length - 1)
    ]

  const backdropPath = `https://image.tmdb.org/t/p/original${bannerSelectedMovie['backdrop_path']}`

  // Make overview text shorter
  const overviewMaxCharacters =
    bannerSelectedMovie.overview.length < 100
      ? bannerSelectedMovie.overview.length
      : 100
  const contractedOverview =
    bannerSelectedMovie.overview.substr(0, overviewMaxCharacters) + '...'

  return (
    <div
      style={{ backgroundImage: `url(${backdropPath})` }}
      className={classes.container}
    >
      <div className={classes.bannerTexts}>
        <h1>{bannerSelectedMovie.name}</h1>
        <div className={classes.buttonGroup}>
          <Button type='button' className={classes.bannerBtn}>
            Play
          </Button>
          <Button type='button' className={classes.bannerBtn}>
            My List
          </Button>
        </div>
        <p className={classes.overview}>{contractedOverview}</p>
      </div>
    </div>
  )
}

export default Banner
