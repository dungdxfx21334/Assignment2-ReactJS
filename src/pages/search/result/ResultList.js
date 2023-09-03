import React from 'react'
import classes from './ResultList.module.css'

const ResultList = props => {
  console.log(props)
  if (props.resultList.results.length === 0) {
    return <p className={classes.title}>No movies found</p>
  }
  const resultListRender = props.resultList.results.map(movie => {
    const posterPath = movie['poster_path']
    return (
      <li key={movie.id} className={classes.item}>
        <img
          //if the id of the clicked movie is identical to the movie id currently stored in the context then
          //it means the movie is clicked for the second time which means we need to close it.
          //   onClick={
          //     movie.id === detailCtx.showingMovieId
          //       ? detailCtx.hideDetail
          //       : detailCtx.showDetail.bind(null, movie.id, props.genre)
          //   }
          className={classes.image}
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={movie.name}
        ></img>
      </li>
    )
  })
  return (
    <div>
      <h2 className={classes.title}>Search Result</h2>
      <ul className={classes.container}>{resultListRender}</ul>
    </div>
  )
}
export default ResultList
