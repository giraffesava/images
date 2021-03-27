import React from 'react';
import PropTypes from 'prop-types';
import classes from './AddButton.module.css';

function AddButton({ addPostOverallHandler, url, title }) {
  return (
    <div>
      <button
        disabled={!(url && title)}
        className={classes.addButton}
        type="button"
        onClick={addPostOverallHandler}
      >
        ADD
      </button>
    </div>
  );
}

AddButton.propTypes = {
  addPostOverallHandler: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddButton;
