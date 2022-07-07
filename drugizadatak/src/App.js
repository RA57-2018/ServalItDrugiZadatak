import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import NoteList from "./components/NoteList/NoteList";
import AddNote from "./components/AddNote/AddNote";
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

  const [theme, setTheme] = useState(true);                   //namestanje teme
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content)); //cuvanje
  }, [content]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('notes'));                //citanje
  }, []);

  const handleContent = (noteText) => {                       //pamtimo stari input i dodajemo novi
    const newNote = {
      noteText: noteText
    }
    setContent([...content, newNote]);
  }

  const handleDelete = (ids) => {                            //brisanje beleske
    console.log(ids);                                        
    const remove = content.filter((elem, id) => {
      return ids !== id;                                      
    });
    setContent(remove);
  }

  const searchHandler = (query) => {
    setQuery(query);
    if(query  !== ""){
      const newContent = content.filter((contents) => {
          return Object.values(contents).join(" ").toLowerCase().includes(query.toLowerCase());
      });
      setSearchResults(newContent);
    }else{
      setSearchResults(content);
    }
  };

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <CssBaseline />
      <div className="App">
        <Header setTheme={() => setTheme(!theme)} />
        <Search queries={query} setQuery={searchHandler}/>
        <NoteList content={query.length < 1 ? content : searchResults} removeNote={handleDelete} /> 
        <AddNote setContent={handleContent} />
      </div>
    </ThemeProvider>
  );
}

export default App;

// <AddNote counter={counter} setItemss={() => handleInput(getItem)} setCounter={counter} />
     
// localStorage.setItem('item', JSON.stringify(item));
// console.log(item);

// const [counter, setCounter] = useState(300);

//   const numOfCounter = () => {
//     setCounter(300-counter);
//   };

// const [item, setItems] = useState("");

//  const addItem = () => {
//    setItems(item);
//    console.log(item);
//  }

// localStorage.setItem('item', JSON.stringify(item));

/*useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(item));
  }, [item]);

  const getLocalItems = () => {
    let note = localStorage.getItem('notes');
    console.log(note);

    if(note) {
      return JSON.parse(localStorage.getItem('notes'));
    }
    else {
      return [];
    }
  }*/

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
