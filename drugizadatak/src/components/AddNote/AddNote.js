import React, {useState} from "react";
import { Grid, Box, Button } from "@mui/material";

function AddNote(props) {

  const [values, setValues] = useState("");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(1)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Grid
              style={{
                border: "3px solid rgb(67, 136, 67)",
                backgroundColor: "rgb(67, 136, 67)",
                borderRadius: "10px",
                position: "relative",
                display: "grid | inline-grid",
                minWidth: "100px",
                marginTop: "5%",
                marginLeft: "3%",
                marginRight: "3%",
                height: "150px",
              }}
            >
              <input
                onChange={(e) => setValues(e.target.value)}
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
                {props.counter} Remaining
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
                onClick={() => props.setContent(values)}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        ))}
        
      </Grid>
    </Box>
  );
}
export default AddNote;
