import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";

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
          image="../../static/images/landing-image.jpg"
          title="Partners"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
        
         MANAGE LEADS
          
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Track and manage leads from Retailer, Maker, and Distributor prospects.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {/* <Button size="small">
          <a href="/admin/retailer-list">
            <small style={{backgroundColor:"yellow", padding:"4px", borderRadius:"4px", color:"black"}}>ALL</small></a>
        </Button> */}
      
          <a href="/admin/all-leads">  <AccountCircleIcon style={{ marginRight: "4px" }} /> <small>ALL LEADS</small></a>
       
        {/* <Button size="small" color="primary">
          <a href="/admin/maker-list"><small>Makers</small></a>
        </Button>
        <Button size="small" color="primary">
          <a href="/admin/distributor-list"><small>Distributors</small></a>
        </Button> */}
      
      </CardActions>
    </Card>
  );
}
