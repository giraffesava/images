import React from 'react';
import PropTypes from 'prop-types';
import classes from './CloseButton.module.css';

function CloseButton({ turnOffModalHandler }) {
  return (
    <div>
      <button
        className={classes.closeButton}
        type="button"
        onClick={turnOffModalHandler}
      >
        CLOSE
      </button>
    </div>
  );
}

CloseButton.propTypes = {
  turnOffModalHandler: PropTypes.func.isRequired,
};

export default CloseButton;
