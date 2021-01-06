import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

import resumeDate from "../../utils/resumeDate";
import TitleComponent from "../../utils/TitleComponent";
import CustomTimeline from "../../components/Timeline/Timeline";
import CustomTimeLineItem from "../../components/Timeline/TimeLineItem";

import FrontDevelopment from "../../assets/front-development.svg";
import MobileDevelopment from "../../assets/mobile-development.svg";
import BackendDevelopment from "../../assets/backend-development.svg";

const useStyles = makeStyles((theme) => ({}));

const Resume = ({ darkMode }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* aboout me */}
      <Grid
        item
        container
        style={{
          padding: "2em",
        }}
      >
        <TitleComponent title="About Me" />
        <Grid item>
          {Object.keys(resumeDate.about).map((key, index) => (
            <Grid
              item
              key={index}
              style={{
                marginTop: "1em",
                textAlign: matchesMD ? "justify" : undefined,
              }}
            >
              <Typography key={key} variant="body1" gutterBottom>
                {resumeDate.about[key]}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* education and experientce */}
      <Grid item container style={{ padding: "2em" }}>
        <TitleComponent title="Resume" />
        <Grid container>
          <Grid item xs={12} md={6}>
            <CustomTimeline icon={<WorkIcon />} title="Working History">
              <CustomTimeLineItem
                title="Frontend Developer"
                date="08.2020 - 10.2020 (Digital Point, Iasi)"
                text="Collaborated with web designers and back-end developers to build the company's official website.
                Responsible for developing different layouts and reusable components, creating responsive design for different devices using libraries like bootstrap or material UI, migrating application to latest version of React using React Hooks.
                 "
              />

              <CustomTimeLineItem
                title="Bartender"
                date="15.06.2015 - 10.08.2019 (Perla Venusului, Constanta)"
                text="Working as a bartender where I learned how to satisfy the customer’s needs.	Maintained stock levels in order to prevent shortages of  items. 	Accurately balanced cash register at all times ."
              />
            </CustomTimeline>
          </Grid>

          <Grid item xs={12} md={6}>
            <CustomTimeline icon={<SchoolIcon />} title="Education History">
              <CustomTimeLineItem
                title="Front-End Course "
                date="10.2019 - 04.2020 (Wantsome, Iasi)"
                text=""
              />
              <CustomTimeLineItem
                title="Faculty of Electronics, Telecommunications and Information Technology"
                date="08.2020 - present"
                text=""
              />
              <CustomTimeLineItem
                title="Grigore Moisil Computer Science High School – Iasi"
                date="09.2013-06.2017"
                text=""
              />
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>
      {/* services */}
      <Grid
        item
        container
        style={{ padding: "2em" }}
        direction="column"
        align="center"
      >
        <Grid item container>
          <TitleComponent title="Interested" />
        </Grid>
        <Grid item container style={{ marginTop: "2em" }} alignItems="center">
          <Grid item md={6} sm={6} xs={12}>
            <Typography variant="h6" style={{ fontSize: "1.3em" }}>
              Front End Developemnt
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              Front End developers are responsible for the look and feel of a
              site.
            </Typography>
          </Grid>

          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            style={{ marginTop: matchesXS ? "2em" : undefined }}
          >
            <img
              src={FrontDevelopment}
              alt="frontend icon"
              style={{ width: "15em" }}
            />
          </Grid>
        </Grid>
        <Grid item container style={{ marginTop: "3em" }} alignItems="center">
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            style={{ marginTop: matchesXS ? "2em" : undefined }}
          >
            <img
              src={MobileDevelopment}
              alt="mobile icon"
              style={{ width: "15em" }}
            />
          </Grid>
          <Grid item style={{ marginTop: "2em" }} md={6} sm={6} xs={12}>
            <Typography variant="h6" style={{ fontSize: "1.3em" }}>
              Mobile Development
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              Extend Functionality. Extend Access . Increase Engagement.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container style={{ marginTop: "3em" }} alignItems="center">
          <Grid item style={{ marginTop: "2em" }} md={6} sm={6} xs={12}>
            <Typography variant="h6" style={{ fontSize: "1.3em" }}>
              Backend Development
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              Back End development refers to the server side of an application.
            </Typography>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <img
              src={BackendDevelopment}
              alt="frontend icon"
              style={{ width: "15em" }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid item container></Grid>
      {/* contact */}
      <Grid item container></Grid>
    </>
  );
};

export default Resume;
