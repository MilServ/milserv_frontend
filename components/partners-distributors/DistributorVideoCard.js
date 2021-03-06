import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";

const useStyles = makeStyles({
  root: {
    width: "auto",
    marginTop: 10,
  },
  wrapper: {
    marginBottom: 10,
  },
});

export default function DistVideoCard() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper} style={{ marginTop: 50 }}>
      <a
        href="/"
        style={{
          color: "white",
          paddingLeft: "1px",
        }}
      >
        <small>
          <span>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </span>{" "}
          Back Home
        </small>
      </a>
      <br></br>
      <p
        style={{
          fontStyle: "italic",
          fontWeight: 200,
          fontSize: "1.2rem",
          marginTop: 20,
        }}
      >
        From helping you save money to expanding your reach, watch this video to
        learn how MilServ supports distributors.
      </p>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              style={{ backgroundColor: "#383838", padding: 10 }}
              gutterBottom
              variant="h5"
            >
              <b
                style={{
                  color: "white",
                }}
              >
                For Distributors
              </b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ReactPlayer
            className="react-player"
            style={{ padding: 0, margin: 0, height: "100%" }}
            // url={retailerVid}
            url={"../../static/videos/distExplainerVid.mp4"}
            width="100%"
            height="auto"
            controls={true}
          />
        </CardActions>
      </Card>
    </div>
  );
}
