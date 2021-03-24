import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './App.module.css';
import Header from '../Header/Header';
import Post from '../Post/Post';
import Modal from '../UI/Modal/Modal';
import { turnOnModal, turnOffModal } from '../../store/actions/index';

function App() {
  /* POST */

  const dispatch = useDispatch();
  const [postData, setPostData] = useState([
    { title: 'Mountains', url: 'https://www.sunhome.ru/i/wallpapers/87/zolotoe-nebo.xxl.jpg', id: 234424 },
    { title: 'Italy', url: 'https://prospedbg.com/wp-content/uploads/2018/02/italy_places.jpg', id: 764588 },
    { title: 'USA', url: 'https://data.whicdn.com/images/130405358/original.jpg', id: 125678 }]);

  const deletePost = (id) => {
    setPostData(postData.filter((post) => post.id !== id));
  };

  const posts = postData.map((item) => (
    <Post
      url={item.url}
      key={item.id}
      title={item.title}
      id={item.id}
      deletePost={deletePost}
    />
  ));

  /* MODAL */

  const addPostHandler = (title, url) => {
    const id = Math.round(Math.random() * 1000000);
    setPostData([{ title, url, id }, ...postData]);
    dispatch(turnOffModal());
  };

  return (
    <div className={classes.App}>
      <Header />
      <button
        className={classes.addButton}
        type="button"
        onClick={() => dispatch(turnOnModal())}
      >
        NEW
      </button>
      {posts}
      <Modal
        addPostHandler={addPostHandler}
      />
    </div>
  );
}

export default App;
