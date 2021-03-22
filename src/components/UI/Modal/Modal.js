import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Modal.module.css';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';
import { turnOffModal } from '../../../store/actions/index';

function Modal() {
  const modalIsOn = useSelector((state) => state.modalReducer.modalIsOn);
  const dispatch = useDispatch();
  console.log(modalIsOn);

  const turnOffModalHandler = () => {
    dispatch(turnOffModal());
  };

  const addPostHandler = () => {
    dispatch(turnOffModal());
  };
  return (
    <div>
      {!!modalIsOn && (
      <>
        <Backdrop />
        <div className={classes.Modal}>
          <div className={classes.container}>
            <h1 className={classes.modalText}>New image</h1>
            <input className={classes.modalInput} type="text" placeholder="Title" maxLength="30" />
            <input className={classes.modalInput} type="text" placeholder="URL" />
            <div className={classes.buttonBlock}>
              <Button toCloseModal={turnOffModalHandler}>CLOSE</Button>
              <Button toAddPost={addPostHandler}>ADD</Button>
            </div>
          </div>
        </div>
      </>
      )}
    </div>
  );
}

export default Modal;
