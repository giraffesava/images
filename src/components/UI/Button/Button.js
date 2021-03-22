import React from 'react';

import PropTypes from 'prop-types';
import classes from './Button.module.css';

function Button({
  children, whatToDo, toCloseModal, toAddPost, deletingPost, closingModal,
}) {
  return (
    <button
      type="button"
      onClick={toCloseModal || whatToDo || toAddPost}
      className={[classes.addButton,
        deletingPost ? classes.postButtonDelete : null,
        closingModal ? classes.moduleButtonClose : null].join(' ')}
    >
      { children }
    </button>
  );
}

Button.defaultProps = {
  whatToDo: undefined,
  toCloseModal: undefined,
  toAddPost: undefined,
  deletingPost: false,
  closingModal: false,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  whatToDo: PropTypes.func,
  toCloseModal: PropTypes.func,
  toAddPost: PropTypes.func,
  deletingPost: PropTypes.bool,
  closingModal: PropTypes.bool,
  // styling: PropTypes.string,
};

export default Button;
