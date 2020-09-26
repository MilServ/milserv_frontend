import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { Card, Grid } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 280,
//   },
// });

export default function LandingCardsOne() {
  // const classes = useStyles();

  return (
    <Grid
      item
      component={Card}
      xs={11}
      s={11}
      md={3}
      lg={3}
      className="card text-center"
      // id="veterans-color"
    >
      <img className="landingTop" src={"../static/images/servingthose.jpg"} />
      <button className="btn btn-sm btn-light landing-page-parnterBtns">
        <b>VETERANS</b>
      </button>
    </Grid>
  );
}
