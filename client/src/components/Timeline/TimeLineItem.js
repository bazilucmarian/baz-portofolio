import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import CustomTimeLineSperator from "./TimeLineSperator";

const useStyles = makeStyles((theme) => ({
  timelineText: {
    fontSize: "0.9rem",
    color: theme.palette.secondary.main,
  },
  date: {
    fontSize: "0.7rem",
  },
}));

const CustomTimeLineItem = ({ title, text, date }) => {
  const classes = useStyles();
  return (
    <TimelineItem>
      <CustomTimeLineSperator />
      <TimelineContent>
        <Typography gutterBottom variant="h6" style={{ lineHeight: "1.1" }}>
          {title}
          <br />
          <span className={classes.date}>{date}</span>
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          className={classes.timelineText}
          style={{ overflowWrap: "anywhere" }}
        >
          {text}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default CustomTimeLineItem;
