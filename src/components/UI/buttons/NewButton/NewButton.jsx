import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './NewButton.module.css';
import { turnOnModal } from '../../../../store/actions/index';

function NewButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={classes.addButton}
        type="button"
        label="NEW"
        onClick={() => dispatch(turnOnModal())}
      >
        NEW
      </button>
    </div>
  );
}

export default NewButton;
