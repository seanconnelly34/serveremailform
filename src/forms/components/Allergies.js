import React from "react";
import {
  Grid,
  Container,
  TextField,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
const Allergies = (props) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h2>ALLERGIES:</h2>
        <h3>Are you allergic to any of the follwing?</h3>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid xs={1} sm={1}>
          <h3>Medications</h3>
        </Grid>
        <Grid xs={11} sm={11}>
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
                <FormControlLabel
                  value="unsure"
                  control={<Radio color="primary" />}
                  label="Unsure"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <TextField
          name="name"
          label="Which Medications?"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid xs={1} sm={1}>
          <h3>Food</h3>
        </Grid>
        <Grid xs={11} sm={11}>
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
                <FormControlLabel
                  value="unsure"
                  control={<Radio color="primary" />}
                  label="Unsure"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <TextField
          name="name"
          label="Which Foods?"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid xs={1} sm={1}>
          <h3>Latex</h3>
        </Grid>
        <Grid xs={11} sm={11}>
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
                <FormControlLabel
                  value="unsure"
                  control={<Radio color="primary" />}
                  label="Unsure"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid xs={1} sm={1}>
          <h3>Iodine</h3>
        </Grid>
        <Grid xs={11} sm={11}>
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
                <FormControlLabel
                  value="unsure"
                  control={<Radio color="primary" />}
                  label="Unsure"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>
            Do you or your relatives have a history of malignant hyperthermia?
          </h3>
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

      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Have you or your relatives had problems with anesthetic?</h3>
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
        <TextField
          name="name"
          label="If yes, please describe."
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>
    </>
  );
};

export default Allergies;
