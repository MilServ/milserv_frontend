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
          paddingLeft: "4px",
        }}
      >
        <span>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </span>{" "}
        Back Home
      </a>

      <h2>
        <b
          style={{
            color: "whitesmoke",
          }}
        >
          WE'RE HIRING!
        </b>
      </h2>
      <br></br>

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent style={{ textAlign: "center" }}>
            <Typography
              style={{ backgroundColor: "#383838", padding: 10 }}
              gutterBottom
              variant="h6"
            >
              <b
                style={{
                  color: "white",
                }}
              >
                Training for Veterans{" "}
                <span>
                  <FontAwesomeIcon icon={faFlagUsa} />
                </span>{" "}
              </b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Learn more about our training program for prior service and
              transitioning servicemembers.
            </Typography>
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
        <p
          style={{
            color: "whitesmoke",
            fontWeight: 400,
            marginTop: 3,
            textAlign: "center",
          }}
        >
          Contact us today to learn more <br />
          about opportunities at these locations
        </p>
        <button className="btn btn-outline-light m-1">Maryland</button>
        <button className="btn btn-outline-light m-1">Texas</button>{" "}
        <button className="btn btn-outline-light m-1">New York</button>
      </section>
      <br></br>
    </div>
  );
}
