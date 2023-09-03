import React from 'react'
import useFetchDetail from '../../../hooks/useFetchDetail'
import classes from './Detail.module.css'

const Detail = ({ url, className }) => {
  const { detail: movieDetail, isLoading } = useFetchDetail(url)

  if (isLoading) {
    return <p>Loading...</p>
  }

  const showTrailer = movieDetail.videos.results.length ? true : false
  const movieDetailVideos = showTrailer
    ? movieDetail.videos.results[0]
    : movieDetail['backdrop_path']

  return (
    <div className={`${classes.detail} ${className}`}>
      <div className={classes.detailTexts}>
        <h2>{movieDetail.title}</h2>
        <div className={classes.accessories}>
          <p>Release Date: {movieDetail['release_date']}</p>
          <p>Vote: {movieDetail.vote_average}/10</p>
        </div>
        <p>{movieDetail.overview}</p>
      </div>
      {showTrailer && (
        <iframe
          className={classes.trailer}
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src={`https://www.youtube.com/embed/${movieDetailVideos.key}`}
        ></iframe>
      )}
      {!showTrailer && (
        <img
          className={classes.trailer}
          src={`https://image.tmdb.org/t/p/original${movieDetailVideos}`}
          alt={movieDetail.name}
        ></img>
      )}
    </div>
  )
}

export default Detail
