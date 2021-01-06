import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  titleUnderline: {
    width: "100%",
    position: "absolute",
    color: "red",
    height: "5px",
    opacity: "0.5",
    bottom: "2px",
    left: 0,
    backgroundColor: theme.palette.primary.main,
  },
}));

const TitleComponent = ({ title }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid container justify={matchesSM ? "center" : undefined}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ position: "relative", textAlign: "center" }}
        >
          {title}
          <span className={classes.titleUnderline}> </span>
        </Typography>
      </Grid>{" "}
    </>
  );
};

export default TitleComponent;
