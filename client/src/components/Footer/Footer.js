import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const Profile = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(matchesMD);
  return (
    <Grid
      item
      container
      style={{
        backgroundColor: "black",
        color: "white",
        height: matchesSM ? "7em" : "5em",
        borderRadius: "6px",
      }}
      direction={matchesMD ? "column" : "row"}
      alignItems="center"
      justify={matchesMD ? "center" : "space-between"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? undefined : "1em",
          display: matchesSM ? "none" : undefined,
        }}
      >
        <Typography variant="body1">Baziluc Marian</Typography>
      </Grid>
      <Grid
        item
        style={{
          marginRight: matchesSM ? undefined : "1em",
          textAlign: matchesSM ? "center" : "right",
        }}
      >
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="body1">
              Designed and Deveped by Baziluc Marian
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{
                fontSize: "0.8rem",
                textAlign: matchesMD ? "center" : undefined,
              }}
            >
              &copy; 2021 all rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
