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
      <img className="landingTop" src={"../static/images/makers2.jpeg"}></img>
      <button className="btn btn-sm btn-light landing-page-parnterBtns">
        <b style={{ fontWeight: 400 }}>MAKERS</b>
      </button>
    </Grid>
    // </Link>
  );
}
