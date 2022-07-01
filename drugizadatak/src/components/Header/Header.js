import React from "react";
import { Button } from "@mui/material";
import './Header.css';

function Header(props){
    return <div className="headerNotes">
        <Button style={{fontSize: "20px", color: "#000000", fontFamily: "Arial", justifyContent: "space-between", display: "flex"}} variant="text">React Notes</Button>
        <Button style={{borderRadius: 10, cursor: 'pointer', justifyContent: "space-between", backgroundColor: "#c4c1c1", padding: "10px 10px", fontSize: "16px", color: "#000000"}} variant="contained">Toggle Mode</Button>
    </div>
};

export default Header;