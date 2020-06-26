import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import State from "./state.js";
import Header from "../components/header/Header";
import PersonalInfo from "./components/PersonalInfo";
import MedicalHistory from "./components/MedicalHistory";
import MedicalHistory2 from "./components/MedicalHistory2";
import Allergies from "./components/Allergies";
import Medications from "./components/Medications";
import Comments from "./components/Comments";
import { ValidatorForm } from "react-material-ui-form-validator";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Registration = () => {
  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  const [state, setState] = useState(State);
  const [result, setResult] = useState(null);

  const [trimmedSignature, setTrimmedSignature] = useState({});

  let sigPad = {};

  const clear = () => {
    sigPad.clear();
    setTrimmedSignature({});
  };

  const trim = () => {
    setTrimmedSignature(sigPad.getTrimmedCanvas().toDataURL("image/png"));
  };

  const sendEmail = (event) => {
    event.preventDefault();
    if (
      state.name.length > 2 &&
      state.name.length < 40 &&
      state.dob.length === 10 &&
      state.age.length === 2 &&
      state.healthcard.length > 8 &&
      state.healthcard.length < 12 &&
      state.effectivedate.length === 10 &&
      state.expirydate.length === 10 &&
      state.streetaddress.length > 5 &&
      state.streetaddress.length < 50 &&
      state.city.length > 4 &&
      state.city.length < 50 &&
      state.province.length > 2 &&
      state.province.length < 40 &&
      state.postal.length > 5 &&
      state.postal.length < 9 &&
      state.homephone.length < 16 &&
      state.workphone.length < 16 &&
      state.cellphone.length < 16 &&
      state.email.length > 9 &&
      state.email.length < 40 &&
      state.occupation.length > 5 &&
      state.occupation.length < 40 &&
      state.famphysician.length < 40 &&
      state.contacted.length < 40 &&
      state.hearofus.length < 40
    ) {
      axios
        .post("/send", { ...state, trimmedSignature, selectedDate })
        .then((response) => {
          setResult(response.data);
          setState(State);
        })
        .catch(() => {
          setResult({
            success: false,
            message: "Something went wrong. Try again later",
          });
        });
    } else {
      setState((prevState) => ({ ...prevState, fail: true }));
    }
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onCheck = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: !prevState[name] }));
  };
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container>
        <div className={classes.root}>
          {/* <form onSubmit={sendEmail}> */}
          <ValidatorForm onSubmit={sendEmail}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                {result && (
                  <p className={`${result.success ? "success" : "error"}`}>
                    {result.message}
                  </p>
                )}
                <h1 className="registration">Pre-Screening Data</h1>
              </Grid>
              <PersonalInfo onInputChange={onInputChange} state={state} />

              <MedicalHistory
                onCheck={onCheck}
                onInputChange={onInputChange}
                handleDateChange={handleDateChange}
                state={state}
                selectedDate={selectedDate}
              />

              <MedicalHistory2
                onInputChange={onInputChange}
                handleDateChange={handleDateChange}
                state={state}
              />

              <Allergies />
              <Medications />
              <Comments />

              <Grid item xs={12}>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Grid>

              <Grid item xs={12}>
                <hr />
                <h3>
                  Add your signature in the box below. Please use your mouse, or
                  finger if you have a touch screen.
                </h3>
                <SignatureCanvas
                  penColor="black"
                  canvasProps={{
                    width: 500,
                    height: 200,
                    className: "sigCanvas",
                  }}
                  ref={(ref) => {
                    sigPad = ref;
                  }}
                />

                <Button onClick={clear}>Clear</Button>
                <Button onClick={trim}>Submit</Button>

                {trimmedSignature ? <img src={trimmedSignature} /> : null}
              </Grid>
            </Grid>
            {/* </form> */}
          </ValidatorForm>
        </div>
      </Container>
    </>
  );
};

export default Registration;
