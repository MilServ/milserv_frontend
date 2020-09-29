import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  root: {
    width: "auto",
    marginTop: 10,
  },
  wrapper: {
    marginBottom: 10,
  },
});

export default function MakersVideoCard() {
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
        MilServ enables small Makers the ability to expand their
        self-distribution without the costly investments in trucks, drivers,
        insurance, and logistics software.
      </p>

      <p
        style={{
          fontStyle: "italic",
          fontWeight: 200,
          fontSize: "1.2rem",
          marginTop: 20,
        }}
      >
        Through leveraging our partner's eCommerce platform, Makers can expand
        sales without having to sign a binding contract with a distributor. Fill
        out the contact form today to learn more!
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
                MAKERS
              </b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <img
            src="../../static/images/makersbrew.jpg"
            width="100%"
            alt="crate full of beer ready for distribution"
          />
        </CardActions>
      </Card>
    </div>
  );
}
