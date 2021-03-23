import React from 'react';
import PropTypes from 'prop-types';
import classes from './Post.module.css';
import Button from '../UI/Button/Button';

function Post({
  url, title, id, toDelete,
}) {
  return (
    <div className={classes.post}>
      <div className={classes.postHeader}>
        <h1 className={classes.postName}>{title}</h1>
        <Button deletingPost id={id} whatToDo={toDelete}>delete</Button>
        {/* <button type="button" onClick={() => toDelete(id)}>press</button> */}
      </div>
      <img className={classes.postImg} src={url} alt={title} />
    </div>
  );
}

Post.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  toDelete: PropTypes.func.isRequired,
};

export default Post;
