import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MakerList from "../../components/partners-makers/MakerATSList";
import RetailerList from "../../components/partners-retailers/RetailerATSList";
import DistList from "../../components/partners-distributors/DistributorATSList";




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabbedData() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{backgroundColor:"whitesmoke"}}>
      <AppBar position="sticky" style={{ backgroundColor: "#8d54b5", zIndex:1 }} >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          style={{ width:"100%" }} 
        >
          <Tab label="RETAILERS" {...a11yProps(0)} />
          <Tab label="MAKERS" {...a11yProps(1)} />
          <Tab label="DISTRIBUTORS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <RetailerList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MakerList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DistList />
      </TabPanel>
    </div>
  );
}
