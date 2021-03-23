import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './App.module.css';
import Header from '../Header/Header';
import Button from '../UI/Button/Button';
import Post from '../Post/Post';
import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';
import { turnOffModal, turnOnModal } from '../../store/actions/index';

function App() {
  const dispatch = useDispatch();
  const modalIsOn = useSelector((state) => state.modalReducer.modalIsOn);

  const turnOnModalHandler = () => {
    dispatch(turnOnModal());
  };

  /* POST */

  const [postData, setPostData] = useState([
    { title: 'Moutains', url: 'https://www.sunhome.ru/i/wallpapers/87/zolotoe-nebo.xxl.jpg', id: 23442412 },
    { title: 'Italy', url: 'https://prospedbg.com/wp-content/uploads/2018/02/italy_places.jpg', id: 76458843 }]);

  const posts = postData.map((item) => (
    <Post
      url={item.url}
      key={item.id}
      title={item.title}
      id={item.id}
    />
  ));

  /* MODAL */

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const turnOffModalHandler = () => {
    dispatch(turnOffModal());
  };

  const addPostHandler = () => {
    const id = Math.round(Math.random() * 100000000);
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
              defaultValue={title}
              type="text"
              placeholder="Title"
              maxLength="30"
              onInput={(e) => setTitle(e.target.value)}
            />
            <input
              className={classes.modalInput}
              defaultValue={url}
              type="text"
              placeholder="URL"
              onInput={(e) => setUrl(e.target.value)}
            />
            <div className={classes.buttonBlock}>
              <Button closingModal whatToDo={turnOffModalHandler}>CLOSE</Button>
              <Button whatToDo={addPostHandler}>ADD</Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
  return (
    <div className={classes.App}>
      <Header />
      <Button whatToDo={turnOnModalHandler}>NEW</Button>
      {posts}
      {modal}
    </div>
  );
}

export default App;
