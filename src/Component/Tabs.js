import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Axios from "axios";

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
  // const token = localStorage.getItem("token");

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const [data, setData] = React.useState({
  //   Articles: []
  // })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await Axios({
  //       method: "get",
  //       url: 'http://localhost:5000/api/v1/articleuser',
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       },
  //       data: {
  //         publish: true,
  //         archive: false
  //       }
  //     });
  //     setData({ Articles : result.data });
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" style={{ boxShadow: "none" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Darft" {...a11yProps(0)} />
          <Tab label="Published" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel
        value={value}
        index={0}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            component="p"
            style={{ marginBottom: "30px" }}
          >
            You have no drafts
          </Typography>
          <Typography variant="body1" component="p">
            Write on the go with our iOS and Android apps!
          </Typography>
        </div>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            component="p"
            style={{ marginBottom: "30px" }}
          >
            You haven’t published any public stories yet.
          </Typography>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
