/* eslint-disable
jsx-a11y/click-events-have-key-events,
jsx-a11y/control-has-associated-label,
jsx-a11y/interactive-supports-focus */

import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.css';

function Backdrop({ turnOffModalHandler }) {
  return (
    <div
      role="button"
      className={classes.backdrop}
      onClick={turnOffModalHandler}
    />
  );
}

Backdrop.propTypes = {
  turnOffModalHandler: PropTypes.func.isRequired,
};

export default Backdrop;
