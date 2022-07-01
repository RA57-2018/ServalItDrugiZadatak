import './App.css';
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import NoteList from './components/NoteList/NoteList';

function App() {

  return (
    <div className="App">
      <Header />
      <Search />
      <NoteList />
    </div>
  );
}

export default App;
