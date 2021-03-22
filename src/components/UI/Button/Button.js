import React from 'react';

import PropTypes from 'prop-types';
import classes from './Button.module.css';

function Button({
  children, whatToDo, deletingPost, closingModal,
}) {
  return (
    <button
      type="button"
      onClick={whatToDo}
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
  deletingPost: false,
  closingModal: false,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  whatToDo: PropTypes.func,
  deletingPost: PropTypes.bool,
  closingModal: PropTypes.bool,
};

export default Button;
