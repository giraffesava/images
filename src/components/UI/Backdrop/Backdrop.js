import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Backdrop.module.css';
import { turnOffModal } from '../../../store/actions/index';

function Backdrop() {
  const dispatch = useDispatch();
  return (
    <div
      role="button"
      aria-label="Mute volume"
      tabIndex={0}
      className={classes.Backdrop}
      onClick={() => dispatch(turnOffModal())}
      onKeyDown={() => dispatch(turnOffModal())}
    />
  );
}

export default Backdrop;
