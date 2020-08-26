import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
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
        src={"../static/images/distributors.jpeg"}
      ></img>
      <button className="btn btn-sm btn-light landing-page-parnterBtns">
        <b style={{ fontWeight: 400 }}>DISTRIBUTORS</b>
      </button>
    </Grid>
    // </Link>
  );
}
