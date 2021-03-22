import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Button from '../UI/Button/Button';
import Post from '../Post/Post';
import Modal from '../UI/Modal/Modal';
import { turnOffModal, turnOnModal } from '../../store/actions/index';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Button onClicked={() => dispatch(turnOffModal())}>NEW</Button>
      <Button onClicked={() => dispatch(turnOnModal())}>NEW</Button>
      <Post />
      <Modal />
    </div>
  );
}

export default App;
