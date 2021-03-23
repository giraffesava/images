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
