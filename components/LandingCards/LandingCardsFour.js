import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { Card, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
});

export default function LandingCardsOne() {
  const classes = useStyles();

  return (
    // <Link to="/" style={{ textDecoration: "none" }}>
    <Grid
      item
      component={Card}
      xs={11}
      s={11}
      md={3}
      lg={3}
      className="card text-center"
    >
      <img
        className="landingTop"
        style={{ height: "85%" }}
        src={"../static/images/makers3.jpg"}
      ></img>
      <button className="btn btn-sm btn-light landing-page-parnterBtns">
        <b>MAKERS</b>
      </button>
    </Grid>
    // </Link>
  );
}
