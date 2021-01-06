import React from "react";
import { makeStyles } from "@material-ui/styles";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineDot from "@material-ui/lab/TimelineDot";

const useStyles = makeStyles((theme) => ({
  dot: {
    borderColor: theme.palette.primary.main,
  },
  separator: {
    paddingLeft: "18px",
  },
}));

const CustomTimelineSeparator = () => {
  const classes = useStyles();

  return (
    <TimelineSeparator className={classes.separator}>
      <TimelineDot className={classes.dot} variant="outlined" />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimelineSeparator;
