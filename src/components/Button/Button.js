import React from 'react';

import PropTypes from 'prop-types';
import classes from './Button.module.css';

function Button({ children }) {
  const addNewPhotoHandler = () => {
  };

  return (
    <div>
      <button
        className={classes.addButton}
        onClick={addNewPhotoHandler}
        type="button"
      >
        { children }
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
