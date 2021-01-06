import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

// components
import CustomTimeline from "../Timeline/Timeline";
import ButtonComponent from "../Button/Button";
import resumeData from "../../utils/resumeDate";
import ProfileImage from "../../assets/me2.jpg";

import CustomTimeLineItem from "../Timeline/TimeLineItem";

const useStyles = makeStyles((theme) => ({
  image: {
    marginTop: "-10px",
    clipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%);",
  },
  containerShadow: {
    boxShadow: theme.shadows[4],
    borderRadius: "0.5rem",
  },
}));

const Profile = ({ darkMode }) => {
  console.log(darkMode);

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      style={{
        backgroundColor: darkMode ? "#121212" : "#fff",
      }}
      className={classes.containerShadow}
    >
      <Grid item style={{ padding: "2em 2em 1em 2em" }}>
        <Typography variant="h4">{resumeData.name}</Typography>
        <Typography variant="h5">{resumeData.job}</Typography>
      </Grid>
      <Grid item>
        <figure className={classes.image}>
          <img
            src={ProfileImage}
            alt="profile image"
            width="100%"
            height="350"
          />
        </figure>{" "}
      </Grid>
      <Grid item style={{ marginTop: "-2.5em", marginLeft: "1em" }}>
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimeLineItem title="Address" text={resumeData.address} />
          <CustomTimeLineItem title="Birthday" text={resumeData.birthday} />
          <CustomTimeLineItem title="Phone" text={resumeData.phone} />
          <CustomTimeLineItem title="Email" text={resumeData.email} />
        </CustomTimeline>
      </Grid>
      <Grid item style={{ marginTop: "2em", marginBottom: "3em" }}>
        <ButtonComponent />
      </Grid>
    </Grid>
  );
};

export default Profile;
