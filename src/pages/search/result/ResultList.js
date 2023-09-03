import React from 'react'
import classes from './ResultList.module.css'
import { useContext } from 'react'
import ModalContext from '../../../context/modal-context'
import Modal from '../modal/Modal'
import { createPortal } from 'react-dom'
import { ApiKeyContext } from '../../../context/api-context'

const ResultList = props => {
  console.log(props)
  const API_KEY = useContext(ApiKeyContext).API_KEY
  const modalCtx = useContext(ModalContext)
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
          onClick={modalCtx.showModal.bind(null, movie.id)}
          className={classes.image}
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={movie.name}
        ></img>
      </li>
    )
  })
  const detailUrl = `https://api.themoviedb.org/3/movie/${modalCtx.movieId}?api_key=${API_KEY}&with_network=123&append_to_response=videos`
  return (
    <div>
      <h2 className={classes.title}>Search Result</h2>
      <ul className={classes.container}>{resultListRender}</ul>
      {modalCtx.modalIsShown &&
        createPortal(
          <Modal url={detailUrl}></Modal>,
          document.getElementById('searchPageOverlays')
        )}
    </div>
  )
}
export default ResultList
