import React from "react";
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/material";

function Search(props){
    return <div className="wrapper">
        <SearchIcon />
        <Input placeholder="Search for your notes..." type="text" style={{width: "100%", color: "black"}} />
    </div> 
};

export default Search;
 