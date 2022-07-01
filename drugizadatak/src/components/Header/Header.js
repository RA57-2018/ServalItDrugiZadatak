import React from "react";
import { Button, Grid } from "@mui/material";
import './Header.css';

function Header({isClicked}){
    return <Grid style={{fontSize: "20px", color: "#000000", fontFamily: "Arial", justifyContent: "space-between", display: "flex", padding: "5px 5px", marginLeft: "1%", marginRight: "1%"}}>
        <h2 style={{fontSize: "25px"}}>React Notes</h2>
        <Button style={{borderRadius: "30px", cursor: 'pointer',backgroundColor: "#c4c1c1", fontSize: "16px", color: "#000000", border: "3px solid rgb(67, 136, 67)"}} 
        variant="contained">Toggle Mode</Button>
    </Grid>
};

export default Header;

/**<div className="headerNotes">
        <Button style={{fontSize: "20px", color: "#000000", fontFamily: "Arial", justifyContent: "space-between", display: "flex"}} variant="text">React Notes</Button>
        <Button style={{borderRadius: "30px", cursor: 'pointer', justifyContent: "space-between", 
        backgroundColor: "#c4c1c1", padding: "10px 10px", fontSize: "16px", color: "#000000", border: "3px solid rgb(67, 136, 67)"}} 
        variant="contained">Toggle Mode</Button>
    </div> */