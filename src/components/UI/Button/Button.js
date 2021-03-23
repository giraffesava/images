import React from 'react';

import PropTypes from 'prop-types';
import classes from './Button.module.css';

function Button({
  children, whatToDo, deletingPost, closingModal, id,
}) {
  return (
    <button
      key={id}
      type="button"
      onClick={() => whatToDo(id)}
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
  id: undefined,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  whatToDo: PropTypes.func,
  deletingPost: PropTypes.bool,
  closingModal: PropTypes.bool,
  id: PropTypes.number,
};

export default Button;
