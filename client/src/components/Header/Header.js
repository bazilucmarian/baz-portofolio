import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import { makeStyles, useTheme } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DrawerMenu from "../../assets/drawerMenu.png";
import resumeDate from "../../utils/resumeDate";

import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import CloseIcon from "@material-ui/icons/Close";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles((theme) => ({
  buttonHire: {
    textTransform: "none",
    borderRadius: "50px",
    fontFamily: "Raleway",
    fontWeight: "bold",
    marginRight: "0.5em",
    marginLeft: "1em",
  },
  homeButton: {
    backgroundColor: theme.palette.primary.main,
    height: "70px",
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    backgroundColor: "#fff",
    width: "23px",
    height: "23px",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.2rem",
  },
  iconButton: {},
  drawer: {
    backgroundColor: theme.palette.primary.main,
    width: "15em",
    fontFamily: "Raleway",
  },
  drawerItem: {
    textAlign: "center",
    fontWeight: "bold",
  },
  drowerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const HeaderComponent = ({ toggleNightMode }) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const routes = [
    { name: "Resume", link: "/", activeIndex: 0 },
    { name: "Portofolio", link: "/portofolio", activeIndex: 1 },
    { name: "Contact", link: "/contact", activeIndex: 2 },
  ];

  useEffect(() => {
    [...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
          }
          break;
        default:
          break;
      }
    });
  }, [value, routes]);

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <Grid container justify="center">
          <Grid item>
            <img src={DrawerMenu} alt="drawer photo" width="100%" />
          </Grid>
        </Grid>
        <List disablePadding style={{ marginTop: "-0.2em" }}>
          {routes.map((route) => (
            <ListItem
              key={route.activeIndex}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {" "}
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Grid container justify="center" style={{ marginTop: "1em" }}>
          {Object.keys(resumeDate.socials).map((social, index) => (
            <a
              href={resumeDate.socials[social].link}
              target="_blank"
              style={{ color: "inherit" }}
            >
              <IconButton
                className={classes.iconButton}
                disableRipple
                color="inherit"
                key={resumeDate.socials[social].name}
              >
                {resumeDate.socials[social].icon}
              </IconButton>
            </a>
          ))}
        </Grid>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.drowerIconContainer}
        disableRipple
      >
        {!openDrawer ? <MenuIcon /> : <CloseIcon />}
      </IconButton>
    </>
  );

  const tabs = (
    <>
      <div className={classes.grow}>
        <Tabs
          TabIndicatorProps={{ style: { background: "none" } }}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        >
          {routes.map((route, index) => (
            <Tab
              key={index}
              component={Link}
              disableRipple
              label={route.name}
              to={route.link}
            />
          ))}
        </Tabs>
      </div>
      {/* <Brightness4Icon onClick={() => toggleNightMode()} /> */}
      {Object.keys(resumeDate.socials).map((social, index) => (
        <Tooltip title={resumeDate.socials[social].text}>
          <a
            href={resumeDate.socials[social].link}
            target="_blank"
            style={{ color: "inherit" }}
          >
            <IconButton
              className={classes.iconButton}
              disableRipple
              color="inherit"
              key={resumeDate.socials[social].name}
            >
              {resumeDate.socials[social].icon}
            </IconButton>
          </a>
        </Tooltip>
      ))}

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/contact"
        className={classes.buttonHire}
        endIcon={<EmailIcon className={classes.icon} />}
        onClick={() => setValue(5)}
      >
        Hire Me
      </Button>
    </>
  );

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#fff", borderRadius: "6px" }}
    >
      <ToolBar disableGutters>
        <Button
          component={Link}
          to="/"
          disableRipple
          className={classes.homeButton}
          onClick={() => setValue(0)}
        >
          <HomeIcon />
        </Button>
        {matchesMD ? drawer : tabs}
      </ToolBar>
    </AppBar>
  );
};
export default HeaderComponent;
