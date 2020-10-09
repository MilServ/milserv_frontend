import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
});

export default function VeteranCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Military Uniform"
          height="140"
          image="../../static/images/veteranphoto.jpg"
          title="Veteran Talent Tracker"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            VETERAN TALENT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            View, track, and manage Veteran talent pipeline data.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="/admin/veteran-list"><small>View</small></a>
        </Button>
        <Button size="small" color="primary">
        <small>Manage</small>
        </Button>
      </CardActions>
    </Card>
  );
}
