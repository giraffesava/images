import React from 'react';
import PropTypes from 'prop-types';
import classes from './DeleteButton.module.css';

function DeleteButton({ deletePost, id }) {
  return (
    <div>
      <button type="button" className={classes.postButtonDelete} onClick={() => deletePost(id)}>delete</button>
    </div>
  );
}

DeleteButton.propTypes = {
  deletePost: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default DeleteButton;
