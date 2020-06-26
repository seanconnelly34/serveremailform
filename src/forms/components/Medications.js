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
const Medications = (props) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h2>MEDICATIONS:</h2>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>
            Please list all medications that you take along with the dosage.
            Include prescriptions and non-prescription medications, vitamins,
            inhalers, naturopathic or over the counter medications.
          </h3>
        </Grid>

        <TextField
          name="name"
          label="1."
          fullWidth={true}
          onChange={props.onInputChange}
        />
        <TextField
          name="name"
          label="2."
          fullWidth={true}
          onChange={props.onInputChange}
        />
        <TextField
          name="name"
          label="3."
          fullWidth={true}
          onChange={props.onInputChange}
        />
        <TextField
          name="name"
          label="4."
          fullWidth={true}
          onChange={props.onInputChange}
        />
        <TextField
          name="name"
          label="5."
          fullWidth={true}
          onChange={props.onInputChange}
        />
        <TextField
          name="name"
          label="6."
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid xs={10} sm={10}>
          <h3>
            Periodically we run specials on Botox and Dermal Filler injections.
            Would you like to be contacted by email regarding these promotions?
          </h3>
        </Grid>

        <Grid xs={2} sm={2}>
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
      </Grid>

      <Grid item xs={12} sm={12} container>
        <Grid xs={10} sm={10}>
          <h3>
            Would you like to be contacted by our Clinical Skin Care Therarpist
            regarding assistance with your skin care?
          </h3>
        </Grid>

        <Grid xs={2} sm={2}>
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
      </Grid>
    </>
  );
};

export default Medications;
