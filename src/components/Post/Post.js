import React from 'react';
import PropTypes from 'prop-types';
import classes from './Post.module.css';

function Post({
  url, title, id, deletePost,
}) {
  return (
    <div className={classes.post}>
      <div className={classes.postHeader}>
        <h1 className={classes.postName}>{title}</h1>
        <button type="button" className={classes.postButtonDelete} onClick={() => deletePost(id)}>delete</button>
      </div>
      <img className={classes.postImg} src={url} alt={title} />
    </div>
  );
}

Post.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;
