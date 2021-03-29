import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import classes from './App.module.css';
import Header from '../Header/Header';
import Post from '../Post/Post';
import Modal from '../UI/Modal/Modal';
import { turnOffModal, turnOnModal } from '../../store/actions/index';
import Button from '../UI/Button/Button';

function App() {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState([
    { title: 'Mountains', url: 'https://www.sunhome.ru/i/wallpapers/87/zolotoe-nebo.xxl.jpg', id: uuidv4() },
    { title: 'Italy', url: 'https://prospedbg.com/wp-content/uploads/2018/02/italy_places.jpg', id: uuidv4() },
    { title: 'USA', url: 'https://data.whicdn.com/images/130405358/original.jpg', id: uuidv4() }]);

  const deletePost = (id) => {
    setPostData((prevData) => prevData.filter((post) => post.id !== id));
  };

  const addPostHandler = (title, url) => {
    setPostData((prevData) => [{ title, url, id: uuidv4() }, ...prevData]);
    dispatch(turnOffModal());
  };

  const openModalHandler = () => {
    dispatch(turnOnModal());
  };

  return (
    <div className={classes.App}>
      <Header />
      <Button variant="newButton" onClick={openModalHandler}>NEW</Button>
      {postData.map((item) => (
        <Post
          url={item.url}
          key={item.id}
          title={item.title}
          id={item.id}
          deletePost={deletePost}
        />
      ))}
      <Modal
        addPostHandler={addPostHandler}
      />
    </div>
  );
}

export default App;
