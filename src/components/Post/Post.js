import React from 'react';
import PropTypes from 'prop-types';
import classes from './Post.module.css';
import Button from '../UI/Button/Button';

function Post({ url, title, id }) {
  // const deletePost = id => {

  // }

  return (
    <div className={classes.post} key={id}>
      <div className={classes.postHeader}>
        <h1 className={classes.postName}>{title}</h1>
        <Button deletingPost>delete</Button>
      </div>
      <img className={classes.postImg} src={url} alt={title} />
    </div>
  );
}

Post.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Post;
