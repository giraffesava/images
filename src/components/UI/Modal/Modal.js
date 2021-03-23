import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

function Modal({ children }) {
  return (
    <div>
      <Backdrop />
      <div className={classes.Modal}>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;

/* import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import classes from './Modal.module.css';
import Button from '../Button/Button';
import Backdrop from '../Backdrop/Backdrop';
import { turnOffModal } from '../../../store/actions/index';

function Modal() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
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
            <input
              className={classes.modalInput}
              defaultValue={title}
              type="text"
              placeholder="Title"
              maxLength="30"
              onChange={setTitle}
            />
            <input
              className={classes.modalInput}
              defaultValue={url}
              type="text"
              placeholder="URL"
              onChange={setUrl}
            />
            <div className={classes.buttonBlock}>
              <Button closingModal whatToDo={turnOffModalHandler}>CLOSE</Button>
              <Button whatToDo={addPostHandler}>ADD</Button>
            </div>
          </div>
        </div>
      </>
      )}
    </div>
  );
}

// Modal.propTypes = {
//   getNewPost: PropTypes.func.isRequired,
// };
export default Modal;
*/
