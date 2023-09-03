import React from 'react'
import Detail from '../../browse/detail/Detail'
import classes from './Modal.module.css'

import { useContext } from 'react'
import ModalContext from '../../../context/modal-context'
import Button from '../../../UI/Button'

const Modal = props => {
  const modalCtx = useContext(ModalContext)
  return (
    <div className={classes.container}>
      <div className={classes.backdrop} onClick={modalCtx.closeModal}></div>
      <Detail url={props.url} className={classes.detail}></Detail>
      <Button onClick={modalCtx.closeModal} className={classes.closeBtn}>
        Close
      </Button>
    </div>
  )
}
export default Modal
