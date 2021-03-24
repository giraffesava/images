import React from 'react';
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.container}>
      <img className={classes.logo} src="./logo.svg" alt="logo" />
      <h1 className={classes.headerText}>Images</h1>
    </div>
  );
}

export default Header;
