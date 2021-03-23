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
      <img className={classes.postImg} src={url} alt={title} onError={(e) => { e.target.onerror = null; e.target.src = 'https://res.cloudinary.com/teepublic/image/private/s--NkspL6KL--/t_Preview/b_rgb:ffffff,c_lpad,f_jpg,h_630,q_90,w_1200/v1527296869/production/designs/2723988_2.jpg'; }} />
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
