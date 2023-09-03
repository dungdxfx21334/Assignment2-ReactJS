import { useState } from 'react'
import ModalContext from './modal-context'
import React from 'react'
const ModalContextProvider = props => {
  const [modalIsShown, setModalIsShown] = useState(false)
  const [movieId, setMovieId] = useState(null)
  const closeModalHandler = () => {
    setModalIsShown(false)
  }
  const showModalHandler = movieId => {
    setModalIsShown(true)
    setMovieId(movieId)
  }

  const contextValue = {
    modalIsShown,
    closeModal: closeModalHandler,
    showModal: showModalHandler,
    movieId
  }
  return (
    <ModalContext.Provider value={contextValue}>
      {props.children}
    </ModalContext.Provider>
  )
}
export default ModalContextProvider
