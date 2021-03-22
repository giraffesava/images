import React from 'react';
import classes from './Post.module.css';
import Button from '../UI/Button/Button';

function Post() {
  return (
    <div className={classes.post}>
      <div className={classes.postHeader}>
        <h1 className={classes.postName}>Mountains</h1>
        <Button deletingPost>delete</Button>
      </div>
      <img className={classes.postImg} src="https://get.wallhere.com/photo/city-cityscape-night-skyline-skyscraper-evening-bridge-dusk-metropolis-downtown-landmark-metropolitan-area-human-settlement-aerial-photography-90813.jpg" alt="city" />
    </div>
  );
}

export default Post;
