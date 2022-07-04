import React from "react";
import { Button, Grid } from "@mui/material";
import "./Header.css";

function Header(props) {

  return (
    <Grid
      style={{
        fontSize: "20px",
        color: "#000000",
        fontFamily: "Arial",
        justifyContent: "space-between",
        display: "flex",
        padding: "5px 5px",
        marginLeft: "1%",
        marginRight: "1%",
      }}
    >
      <h2 style={{ fontSize: "25px" }}>React Notes</h2>
      <Button
        style={{
          borderRadius: "30px",
          cursor: "pointer",
          backgroundColor: "#c4c1c1",
          fontSize: "16px",
          color: "#000000",
          border: "3px solid rgb(67, 136, 67)",
        }}
        variant="contained"
        onClick={props.setTheme}
      >
        Toggle Mode
      </Button>
    </Grid>
  );
}

export default Header;

/* <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                <span>Switch mode</span> */

//     <Button style={{borderRadius: "30px", cursor: 'pointer',backgroundColor: "#c4c1c1", fontSize: "16px", color: "#000000", border: "3px solid rgb(67, 136, 67)"}}
//   variant="contained"
//      >Toggle Mode
//   </Button>

  /* <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button style={{borderRadius: "30px", cursor: 'pointer',backgroundColor: "#c4c1c1", fontSize: "16px", color: "#000000", border: "3px solid rgb(67, 136, 67)"}} 
              variant="contained" onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}>Toggle Mode
              </Button>
            )}
          </ThemeContext.Consumer> */


/*function toggleThemes(){
        if(props.theme === "light"){
            props.setTheme("dark");
        }else{ 
            props.setTheme("light");
        }
    };*/

