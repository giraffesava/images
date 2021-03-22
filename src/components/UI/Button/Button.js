import React from 'react';

import PropTypes from 'prop-types';
// import classes from './Button.module.css';

function Button({
  children, whatToDo, toCloseModal, toAddPost,
}) {
  return (
    <button
      type="button"
      onClick={toCloseModal || whatToDo || toAddPost}
    >
      { children }
    </button>
  );
}

Button.defaultProps = {
  whatToDo: undefined,
  toCloseModal: undefined,
  toAddPost: undefined,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  whatToDo: PropTypes.func,
  toCloseModal: PropTypes.func,
  toAddPost: PropTypes.func,
  // styling: PropTypes.string,
};

export default Button;
