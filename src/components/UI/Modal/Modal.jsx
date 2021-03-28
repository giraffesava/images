import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { turnOffModal } from '../../../store/actions/index';
import Button from '../Button/Button';

function Modal({ addPostHandler }) {
  const modalIsOn = useSelector((state) => state.modalReducer.modalIsOn);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const turnOffModalHandler = () => {
    dispatch(turnOffModal());
    setUrl('');
    setTitle('');
  };

  const addPostOverallHandler = () => {
    addPostHandler(title, url);
    setUrl('');
    setTitle('');
  };

  return (
    modalIsOn
    && (
    <>
      <Backdrop turnOffModalHandler={turnOffModalHandler} />
      <div className={classes.modal}>
        <div className={classes.container}>
          <h1 className={classes.modalText}>New image</h1>
          <input
            className={classes.modalInput}
            value={title}
            type="text"
            placeholder="Title"
            maxLength="30"
            minLength="3"
            onChange={(e) => setTitle((e.target.value).trimLeft())}
          />
          <input
            className={classes.modalInput}
            value={url}
            type="text"
            minLength="10"
            placeholder="URL"
            onChange={(e) => setUrl((e.target.value).trimLeft())}
          />
          <div className={classes.buttonBlock}>
            <Button variant="closeButton" whatToDo={turnOffModalHandler}>CLOSE</Button>
            <Button
              variant="addButton"
              url={url}
              title={title}
              whatToDo={addPostOverallHandler}
            >
              ADD
            </Button>
          </div>
        </div>
      </div>
    </>
    )
  );
}

Modal.propTypes = {
  addPostHandler: PropTypes.func.isRequired,
};

export default Modal;
