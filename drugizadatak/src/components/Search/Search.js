import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { Input, Grid } from "@mui/material";

function Search(props) {
  return (
    <Grid
      style={{
        position: "relative",
        display: "flex",
        minWidth: "100px",
        marginTop: "1%",
        marginLeft: "1%",
        marginRight: "1%",
        borderWidth: "10px",
        border: "3px solid rgb(67, 136, 67)",
        borderRadius: "10px",
        height: "50px",
      }}
    >
      <SearchIcon style={{ width: "30px", height: "50px" }} />
      <Input
        placeholder="Search for your notes..."
        style={{ width: "100%", color: "black", outline: "none" }}
        onChange={event => props.setQuery(event.target.value)}
      />
    </Grid>
  );
}

export default Search;


// import { useState, useEffect } from "react";

// function getStorageValue(key, defaultValue) {
//   const saved = localStorage.getItem(key);
//   const initial = JSON.parse(saved);
//   return initial || defaultValue;
// }

// export const useLocalStorage = (key, defaultValue) => {
//   const [value, setValue] = useState(() => {
//     return getStorageValue(key, defaultValue);
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// };