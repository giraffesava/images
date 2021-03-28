import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Post.module.css';
import Button from '../UI/Button/Button';

function Post({
  url, title, id, deletePost,
}) {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.post}>
        <div className={classes.postHeader}>
          <h1 className={classes.postName}>{title}</h1>
          <Button variant="deleteButton" whatToDo={() => deletePost(id)} id={id}>delete</Button>
        </div>
        <div className={classes.deletePost} onTouchStart={() => setShowOverlay(true)}>
          { showOverlay && (
            <div className={classes.deletePostOverlay} onTouchEnd={() => setShowOverlay(false)}>
              <p onTouchStart={() => deletePost(id)}>delete</p>
            </div>
          )}
          <img
            className={classes.postImg}
            src={url}
            alt={title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif';
              e.target.value = 'error';
            }}
          />
        </div>
      </div>
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
