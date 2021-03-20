import React from 'react';
import classes from './Post.module.css';

function Post() {
  return (
    <div className={classes.post}>
      <div className={classes.postHeader}>
        <h1 className={classes.postName}>Mountains</h1>
        <button type="button" className={classes.postButton}>delete</button>
      </div>
      <img className={classes.postImg} src="https://get.wallhere.com/photo/city-cityscape-night-skyline-skyscraper-evening-bridge-dusk-metropolis-downtown-landmark-metropolitan-area-human-settlement-aerial-photography-90813.jpg" alt="city" />
    </div>
  );
}

export default Post;
