import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Post from '../Post/Post';

function App() {
  return (
    <div className="App">
      <Header />
      <Button>NEW</Button>
      <Post />
    </div>
  );
}

export default App;
