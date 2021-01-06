import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GetAppIcon from "@material-ui/icons/GetApp";
import Resume from "../../assets/resume.pdf";

const useStyles = makeStyles((theme) => ({
  ButtonCv: {
    textTransform: "none",
    borderRadius: "50px",
    fontFamily: "Raleway",
    fontWeight: "bold",
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
}));

const ButtonComponent = () => {
  const classes = useStyles();
  return (
    <a href={Resume} download="resume" style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        color="primary"
        endIcon={<GetAppIcon className={classes.icon} />}
        className={classes.ButtonCv}
      >
        Download CV
      </Button>
    </a>
  );
};

export default ButtonComponent;
