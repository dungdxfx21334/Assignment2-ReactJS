import { createContext } from 'react'
const ModalContext = createContext({
  modalIsShown: false,
  movieId: null, // The trailer of the movie to put on the modal
  showModal: () => {},
  closeModal: () => {}
})

export default ModalContext
