import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import './NoteList.css';

function NoteList(props){
    return <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
            <Grid className="notesList">
                <input className="inputNotes" placeholder="Type to add a new note..."/>
                <Box className="remaining">300 Remaining</Box>
                <Button variant="outlined"  style={{borderRadius: 10, backgroundColor: "rgb(196, 193, 193)", padding: "10px 10px", fontSize: "14px", 
                height: "20px", position:"relative"}}>Save</Button>
            </Grid>
        </Grid>
      ))};
    </Grid>
  </Box>
};

export default NoteList;

/* <div className="notesList">
        <input className="inputNotes" placeholder="Type to add a new note..."/>
        <button className="saveNotes">Save</button>
        <div className="remaining">300 Remaining</div>
    </div> */

//     <Container fixed>
//     <Box sx={{ bgcolor: '#cfe8fc', height: '800vh' }} />
    
//   </Container>