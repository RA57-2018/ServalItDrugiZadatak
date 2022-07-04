import './App.css';
import React, { useState} from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import NoteList from './components/NoteList/NoteList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";


const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

function App() {

  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <CssBaseline />
    <div className="App" >
      <Header setTheme={() => setTheme(!theme)}/>
      <Search />
      <NoteList />
    </div>
  </ThemeProvider>
  );
}

export default App;

/* <ThemeProvider theme={themes[theme]}>
      <div className="App" >
        <Header theme={theme} setTheme={setTheme}/>
        <Search />
        <NoteList />
      </div>
    </ThemeProvider> */

// {
//   value.map(() => {
//     return <Header toggleThemes={toggleTheme}/>
//   })
// }