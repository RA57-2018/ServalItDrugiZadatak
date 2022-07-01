import React from "react";
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/material";

function Search(props){
    return <div className="wrapper">
        <SearchIcon style={{width: "30px", height: "50px"}}/>
        <Input placeholder="Search for your notes..." style={{width: "100%", color: "black", outline: "none"}} />
    </div> 
};

export default Search;
 