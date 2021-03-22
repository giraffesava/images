import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Modal.module.css';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';

function Modal() {
  const modalIsOn = useSelector((state) => state.modalReducer.modalIsOn);
  console.log(modalIsOn);
  return (
    <div>
      {modalIsOn && (
      <>
        <Backdrop />
        <div className={classes.Modal}>
          <div className={classes.container}>
            <h1 className={classes.modalText}>New image</h1>
            <input className={classes.modalInput} type="text" placeholder="Title" maxLength="30" />
            <input className={classes.modalInput} type="text" placeholder="URL" />
            <div className={classes.buttonBlock}>
              <Button>CLOSE</Button>
              <Button>ADD</Button>
            </div>
          </div>
        </div>
      </>
      )}
    </div>
  );
}

export default Modal;
