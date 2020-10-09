import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
});

export default function BlogCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Person typing on laptop"
          height="140"
          image="../../static/images/blog-image.jpg"
          title="Write or Create"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            MILSERV NEWS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Publish blog or press release to keep stakeholders informed.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="/admin/blog">
          <Button size="small" color="primary">
          <small>Publish</small>
          </Button>
        </a>
        <a href="/admin/blogs">
          <Button size="small" color="primary">
          <small>Manage</small>
          </Button>
        </a>
        <a href="/admin/crud/category-tag">
          <Button size="small" color="primary">
          <small>Add Tags</small>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
