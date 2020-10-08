import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  faArrowAltCircleLeft,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";
import JobsModalNY from "../Modals/JobsModaNY";
import OurLocationsModal from "../../components/Modals/GeographyModal";

const useStyles = makeStyles({
  root: {
    width: "auto",
    marginTop: 10,
  },
  wrapper: {
    marginBottom: 10,
  },
});

export default function RetVideoCard() {
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
        Watch video to learn about our E-Commerce platform to order alcohol.
        Delivered by military veterans at no cost to you.
      </p>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent style={{ textAlign: "center" }}>
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
                For Retailers
              </b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ReactPlayer
            className="react-player"
            style={{ padding: 0, margin: 0, height: "100%" }}
            // url={retailerVid}
            url={"../../static/videos/retailerExplainerVid.mp4"}
            width="100%"
            height="auto"
            controls={true}
          />
        </CardActions>
      </Card>{" "}
      <section style={{ textAlign: "center", marginTop: 10 }}>
        <hr />
        <p style={{ fontStyle: "italic", fontWeight: 200, fontSize: "1.2rem" }}>
          <FontAwesomeIcon icon={faTruck} /> Contact us today to learn how{" "}
          <br />
          we can help you drive more business.
        </p>

        <OurLocationsModal />
        {"  "}
        <JobsModalNY />
      </section>
      <br />
    </div>
  );
}
