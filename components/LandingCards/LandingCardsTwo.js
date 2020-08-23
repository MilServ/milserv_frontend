import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

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
      id="retailers-color"
    >
      <CardContent>
        <CardMedia title="Paella dish">
          <FontAwesomeIcon className="icons" icon={faStoreAlt} />
        </CardMedia>

        <Typography className="categoryTitle">RETAILERS</Typography>
      </CardContent>
    </Grid>
    // </Link>
  );
}
