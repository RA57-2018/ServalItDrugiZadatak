import React from "react";
import { Button, Grid, Box, IconButton } from "@mui/material";
import "./NoteList.css";

function NoteList(props) {
  //localStorage.setItem('content', JSON.stringify(content));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Grid className="notesList">
              <input
                value={props.content}
                onChange={(e) => props.setContent(e.target.value)}
                type="text"
                placeholder="Type to add a new note..."
                style={{
                  backgroundColor: "rgb(91, 131, 91)",
                  border: "1px solid rgb(67, 133, 67)",
                  boxCecorationBreak: "initial",
                  width: "100%",
                  height: "70%",
                  color: "black",
                }}
              />
              <Box>{index + 1}</Box>
              <Box style={{ position: "absolute", left: 0, bottom: 0 }}>
                300 Remaining
              </Box>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "rgb(196, 193, 193)",
                  padding: "10px 10px",
                  fontSize: "14px",
                  color: "black",
                  height: "20px",
                  position: "absolute",
                  width: "auto",
                  border: "3px solid rgb(40, 141, 40)",
                  borderRadius: "10px",
                  bottom: 0,
                  right: 0,
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        ))}
        ;
      </Grid>
    </Box>
  );
}

export default NoteList;

/* <div className="notesList">
        <input className="inputNotes" placeholder="Type to add a new note..."/>
        <button className="saveNotes">Save</button>
        <div className="remaining">300 Remaining</div>
    </div> */

//     <Container fixed>
//     <Box sx={{ bgcolor: '#cfe8fc', height: '800vh' }} />

//   </Container>
