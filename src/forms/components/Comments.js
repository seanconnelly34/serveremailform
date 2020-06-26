import React from "react";
import { Grid, TextField } from "@material-ui/core";
const Comments = (props) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h2>COMMENTS:</h2>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <TextField
          fullWidth
          placeholder="Your comments here."
          multiline
          rows={4}
          rowsMax={10}
        />
      </Grid>
    </>
  );
};

export default Comments;
