import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Button from '../UI/Button/Button';
import Post from '../Post/Post';
import Modal from '../UI/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <Button>NEW</Button>
      <Post />
      <Modal />
    </div>
  );
}

export default App;
