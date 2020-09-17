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

export default function ManageCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Array of alcoholic beverages"
          height="140"
          image="../../static/images/analytics.jpg"
          title="Partners"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Site Analytics
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Coming Soon...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {/* <a href="/admin/site-analytics">View</a> */}
        </Button>
      </CardActions>
    </Card>
  );
}
