import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import NoteList from "./components/NoteList/NoteList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

function App() {
  const [theme, setTheme] = useState(true);
  /* const [inputText, setInputText] = useState("");

  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem("content");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content));
  }, [content]);
*/
  // let inputHandler = (e) => {
  //   var lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  // };

  /*const [character, setCharacter] = useState(300);

  const charactersLeft = () => {
    setCharacter(300-character);
  };*/

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <CssBaseline />
      <div className="App">
        <Header setTheme={() => setTheme(!theme)} />
        <Search />
        <NoteList />
      </div>
    </ThemeProvider>
  );
}

export default App;

// {{
//   Data.filter(post => {
//   if (query === '') {
//     return post;
//   } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
//     return post;
//   }
//   }).map((post, index) => (
//   <div key={index}>
//     <p>{post.content}</p>
//   </div>
//   ))
// }}

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
