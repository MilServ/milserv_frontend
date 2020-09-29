import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faFlagUsa,
} from "@fortawesome/free-solid-svg-icons";
import JobsModalNY from "../Modals/JobsModaNY";

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
  wrapper: {
    marginBottom: 10,
  },
});

export default function VetVideoCard() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <a
        href="/"
        style={{
          color: "white",
          paddingLeft: "2px",
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
        className="p-0"
        style={{
          fontStyle: "italic",
          fontWeight: 200,
          fontSize: "1.2rem",
          marginTop: 15,
        }}
      >
        Learn more about our training program for prior service and
        transitioning servicemembers.
      </p>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              style={{
                backgroundColor: "#383838",
                padding: 5,
                textAlign: "center",
              }}
              gutterBottom
              variant="h6"
            >
              <b
                style={{
                  color: "white",
                }}
              >
                WATCH VIDEO{" "}
                <span>
                  <FontAwesomeIcon icon={faFlagUsa} />
                </span>{" "}
              </b>
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ReactPlayer
            className="react-player"
            style={{ padding: 0, margin: 0, height: "100%" }}
            // url={retailerVid}
            url={"../../static/videos/veteranExplainerVid.mp4"}
            width="100%"
            height="auto"
            controls={true}
          />
        </CardActions>
      </Card>
      <section style={{ textAlign: "center", marginTop: 10 }}>
        <hr />
        <h2
          style={{
            textAlign: "center",
          }}
        >
          <b
            style={{
              color: "whitesmoke",
            }}
          >
            WE'RE HIRING!
          </b>
        </h2>
        <p style={{ fontStyle: "italic", fontWeight: 200, fontSize: "1.2rem" }}>
          Contact us today to learn more <br />
          about opportunities at these locations
        </p>
        <button className="btn btn-outline-light m-1 p-1" disabled>
          Maryland
        </button>
        <button className="btn btn-outline-light m-1 p-1" disabled>
          Texas
        </button>{" "}
        <button className="btn btn-outline-light m-1 p-1" disabled>
          New York
        </button>{" "}
      </section>
      <br></br>
    </div>
  );
}
