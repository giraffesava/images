import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Button from '../UI/Button/Button';
import Post from '../Post/Post';
import Modal from '../UI/Modal/Modal';
import { turnOnModal } from '../../store/actions/index';

function App() {
  const dispatch = useDispatch();

  const turnOnModalHandler = () => {
    dispatch(turnOnModal());
  };

  return (
    <div className="App">
      <Header />
      <Button whatToDo={turnOnModalHandler}>NEW</Button>
      <Post />
      <Modal />
    </div>
  );
}

export default App;
