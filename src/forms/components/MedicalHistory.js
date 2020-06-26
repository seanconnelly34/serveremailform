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
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

const MedicalHistory = (props) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h1>Medical History</h1>
        <h2>Have you ever had any of the following?</h2>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.heartattack}
                control={
                  <Checkbox
                    checked={props.state.heartattack}
                    color="primary"
                    onChange={props.onCheck}
                    name="heartattack"
                  />
                }
                label="Heart Attack"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.heartdisease}
                control={
                  <Checkbox
                    checked={props.state.heartdisease}
                    color="primary"
                    onChange={props.onCheck}
                    name="heartdisease"
                  />
                }
                label="Heart Disease"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value=""
                  placeholder=""
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.chestpain}
                control={
                  <Checkbox
                    checked={props.state.chestpain}
                    color="primary"
                    onChange={props.onCheck}
                    name="chestpain"
                  />
                }
                label="Chest Pain"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Last time of heart pain"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.stroke}
                control={
                  <Checkbox
                    checked={props.state.stroke}
                    color="primary"
                    onChange={props.onCheck}
                    name="stroke"
                  />
                }
                label="Stroke"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.bloodclots}
                control={
                  <Checkbox
                    checked={props.state.bloodclots}
                    color="primary"
                    onChange={props.onCheck}
                    name="bloodclots"
                  />
                }
                label="Blood Clots"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.bleeding}
                control={
                  <Checkbox
                    checked={props.state.bleeding}
                    color="primary"
                    onChange={props.onCheck}
                    name="bleeding"
                  />
                }
                label="Prolonged Bleeding"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.bloodpressure}
                control={
                  <Checkbox
                    checked={props.state.bloodpressure}
                    color="primary"
                    onChange={props.onCheck}
                    name="bloodpressure"
                  />
                }
                label="High Blood Pressure"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.kidneydisease}
                control={
                  <Checkbox
                    checked={props.state.kidneydisease}
                    color="primary"
                    onChange={props.onCheck}
                    name="kidneydisease"
                  />
                }
                label="Kideny Disease"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.openingmouth}
                control={
                  <Checkbox
                    checked={props.state.openingmouth}
                    color="primary"
                    onChange={props.onCheck}
                    name="openingmouth"
                  />
                }
                label="Trouble Opening Mouth"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset" fullWidth>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.diabetes}
                control={
                  <Checkbox
                    checked={props.state.diabetes}
                    color="primary"
                    onChange={props.onCheck}
                    name="diabetes"
                  />
                }
                label="Diabetes"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.arthritis}
                control={
                  <Checkbox
                    checked={props.state.arthritis}
                    color="primary"
                    onChange={props.onCheck}
                    name="arthritis"
                  />
                }
                label="Arthritis"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.asthma}
                control={
                  <Checkbox
                    checked={props.state.asthma}
                    color="primary"
                    onChange={props.onCheck}
                    name="asthma"
                  />
                }
                label="Asthma/Bronchitis"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.seizures}
                control={
                  <Checkbox
                    checked={props.state.seizures}
                    color="primary"
                    onChange={props.onCheck}
                    name="seizures"
                  />
                }
                label="Seizures"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.thyroid}
                control={
                  <Checkbox
                    checked={props.state.thyroid}
                    color="primary"
                    onChange={props.onCheck}
                    name="thyroid"
                  />
                }
                label="Thyroid Disease"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.liversisease}
                control={
                  <Checkbox
                    checked={props.state.liversisease}
                    color="primary"
                    onChange={props.onCheck}
                    name="liverdisease"
                  />
                }
                label="Liver Disease"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.hiv}
                control={
                  <Checkbox
                    color="primary"
                    checked={props.state.hiv}
                    onChange={props.onCheck}
                    name="hiv"
                  />
                }
                label="HIV/Hepatitis"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={5} sm={5} className="checkBoxes">
              <FormControlLabel
                value={props.state.depression}
                control={
                  <Checkbox
                    checked={props.state.depression}
                    color="primary"
                    onChange={props.onCheck}
                    name="depression"
                  />
                }
                label="Depression"
                labelPlacement="end"
              />
            </Grid>
            <Grid xs={7} sm={7}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={props.selectedDate}
                  name="heartdate"
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  fullWidth
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} container>
        <Grid>
          <h3>Do you have, or have you ever been tested for Sleep Apnea?</h3>
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
          name=""
          label="Other (Please List):"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>

      <Grid item xs={12} sm={6} container>
        <Grid>
          <h3>Do you smoke?</h3>
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
          name=""
          label="If yes, how many per day?"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>

      <Grid item xs={12} sm={6} container>
        <Grid>
          <h3>Did you smoke?</h3>
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
          name=""
          label="If you quit, when?"
          fullWidth={true}
          onChange={props.onInputChange}
        />
      </Grid>
    </>
  );
};

export default MedicalHistory;
