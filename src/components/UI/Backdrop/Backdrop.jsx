import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.css';

function Backdrop({ turnOffModalHandler }) {
  return (
    <div
      role="button"
      aria-label="Mute volume"
      tabIndex={0}
      className={classes.backdrop}
      onClick={turnOffModalHandler}
      onKeyDown={turnOffModalHandler}
    />
  );
}

Backdrop.propTypes = {
  turnOffModalHandler: PropTypes.func.isRequired,
};

export default Backdrop;
