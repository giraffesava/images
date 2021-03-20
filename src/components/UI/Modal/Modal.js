import React from 'react';
import classes from './Modal.module.css';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';

function Modal() {
  return (
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
  );
}

export default Modal;
