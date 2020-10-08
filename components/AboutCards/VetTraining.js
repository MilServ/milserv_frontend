import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function VetTraining() {
  const classes = useStyles();

  return (
    <Grid
      item
      component={Card}
      xs={12}
      s={6}
      md={3}
      className="card"
      style={{ position: "relative", opacity: 1 }}
    >
      <CardContent>
        <CardMedia title="Direct to Consumer">
          <FontAwesomeIcon
            icon={faUserGraduate}
            style={{ fontSize: 90, color: "#383838", marginBottom: 8 }}
          />
        </CardMedia>

        <Typography style={{ fontSize: "1.2rem", color: "#383838" }}>
          Veteran Training Program
        </Typography>
        <a href="/veteran-jobs">
          <button
            className="btn btn-warning btn-sm"
            style={{ position: "absolute", bottom: 10, left: 10 }}
          >
            Learn More
          </button>
        </a>
      </CardContent>
    </Grid>
  );
}
