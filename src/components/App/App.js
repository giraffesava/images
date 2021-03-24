import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './App.module.css';
import Header from '../Header/Header';
import Post from '../Post/Post';
import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';
import { turnOffModal, turnOnModal } from '../../store/actions/index';

function App() {
  const dispatch = useDispatch();
  const modalIsOn = useSelector((state) => state.modalReducer.modalIsOn);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  /* POST */

  const [postData, setPostData] = useState([
    { title: 'Mountains', url: 'https://www.sunhome.ru/i/wallpapers/87/zolotoe-nebo.xxl.jpg', id: 234424 },
    { title: 'Italy', url: 'https://prospedbg.com/wp-content/uploads/2018/02/italy_places.jpg', id: 764588 },
    { title: 'Italy', url: 'https://i.pinimg.com/736x/7b/5d/e2/7b5de2ef9df8a5010b428beaf1d7fe3e.jpg', id: 125678 }]);

  const deletePost = (id) => {
    setPostData(postData.filter((post) => post.id !== id));
  };

  const turnOnModalHandler = () => {
    dispatch(turnOnModal());
    setUrl('');
    setTitle('');
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
  const turnOffModalHandler = () => {
    dispatch(turnOffModal());
  };

  const addPostHandler = () => {
    const id = Math.round(Math.random() * 1000000);
    setPostData([{ title, url, id }, ...postData]);
    setUrl('');
    setTitle('');
    dispatch(turnOffModal());
  };

  const modal = !!modalIsOn && (
    <>
      <Backdrop />
      <Modal>
        <div className={classes.Modal}>
          <div className={classes.container}>
            <h1 className={classes.modalText}>New image</h1>
            <input
              className={classes.modalInput}
              value={title}
              type="text"
              placeholder="Title"
              maxLength="30"
              minLength="3"
              onInput={(e) => setTitle((e.target.value).trimLeft())}
            />
            <input
              className={classes.modalInput}
              value={url}
              type="text"
              minLength="10"
              placeholder="URL"
              onInput={(e) => setUrl((e.target.value).trimLeft())}
            />
            <div className={classes.buttonBlock}>
              <button
                className={[classes.addButton, classes.moduleButtonClose].join(' ')}
                type="button"
                onClick={() => turnOffModalHandler()}
              >
                CLOSE
              </button>
              <button
                disabled={!((url && title))}
                className={classes.addButton}
                type="button"
                onClick={() => addPostHandler()}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
  return (
    <div className={classes.App}>
      <Header />
      <button className={classes.addButton} type="button" onClick={turnOnModalHandler}>NEW</button>
      {posts}
      {modal}
    </div>
  );
}

export default App;
