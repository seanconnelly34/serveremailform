import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const MedicalHistory2 = (props) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          name="date"
          label="What is your height?"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="name"
          label="What is your current weight?"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Possibility of pregnancy?</h3>
        </Grid>
        <Grid className="yesno">
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="yes"
                control={<Radio color="primary" />}
                label="Yes"
              />

              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <h3>Please list any previous surgeries.</h3>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="date"
          label="1"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="name"
          label="2"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="name"
          label="3"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="name"
          label="4"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>
    </>
  );
};

export default MedicalHistory2;
