import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chart from "./Chart";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" style={{ boxShadow: "none" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          textColor="primary"
          aria-label="simple tabs example"
          style={{ marginTop: "20px", color: "#ccc" }}
        >
          <Tab
            label="Views (30 days)"
            icon={
              <Typography variant="h3" component="p">
                0
              </Typography>
            }
            {...a11yProps(0)}
            style={{
              borderRight: "1px solid #ccc",
              borderBottom: "1px solid #ccc"
            }}
          />
          <Tab
            label="Reads (30 days)"
            icon={
              <Typography variant="h3" component="p">
                0
              </Typography>
            }
            {...a11yProps(1)}
            style={{
              borderRight: "1px solid #ccc",
              borderBottom: "1px solid #ccc"
            }}
          />
          <Tab
            label="Fans (30 days)"
            icon={
              <Typography variant="h3" component="p">
                0
              </Typography>
            }
            {...a11yProps(2)}
            style={{
              borderBottom: "1px solid #ccc"
            }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Chart />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Chart />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Chart />
      </TabPanel>
    </div>
  );
}
