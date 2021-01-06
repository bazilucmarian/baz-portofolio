import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import WorkIcon from "@material-ui/icons/Work";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  timeline: {
    padding: 0,
  },
  firstText: {
    marginTop: "0.5em",
  },
  dotFirst: {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.primary.main,
    padding: "0.8em",
    fontSize: "small",
  },
  firstItem: {
    height: "90px",
  },
}));

const CustomTimeline = ({ title, icon, children }) => {
  const classes = useStyles();
  return (
    <Timeline className={classes.timeline}>
      <TimelineItem className={classes.firstItem}>
        <TimelineSeparator>
          <TimelineDot className={classes.dotFirst}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={classes.firstText}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
    </Timeline>
  );
};

export default CustomTimeline;
