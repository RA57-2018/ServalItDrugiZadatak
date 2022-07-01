import './App.css';
import React, {useState} from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import NoteList from './components/NoteList/NoteList';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

   const [value, setValue] = useState(false);

   const handleClick = () => {
      setValue(true);
   }
 
  return (
    <div className="App">
      <Header />
      <Search />
      <NoteList />
    </div>
  );
}

export default App;
