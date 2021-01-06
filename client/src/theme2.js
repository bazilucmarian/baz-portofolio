import { createMuiTheme } from "@material-ui/core/styles";

const bazOrange = "#ffc500";
const bazGrey = "#777";

// const arcOrange = "#FFBA60";
// const arcGrey = "#868686";

const bazDark = "#303030";
const bazWhite = "#fff";

export default createMuiTheme({
  palette: {
    common: {
      orange: `${bazDark}`,
    },
    primary: {
      main: `${bazWhite}`,
    },
    secondary: {
      main: `${bazGrey}`,
    },
  },
  typography: {
    h4: {
      color: `${bazWhite}`,
      fontSize: "1.5rem",
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: "Raleway",
    },
    h5: {
      fontSize: "1rem",
      color: `${bazGrey}`,
      fontFamily: "Raleway",
      letterSpacing: "1.5px",
    },
    h6: {
      color: `${bazWhite}`,
      fontSize: "1.1rem",
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: "Raleway",
    },
    body1: {
      color: `${bazGrey}`,
      fontFamily: "Raleway",
    },
    body2: {
      color: `${bazGrey}`,
      lineHeight: "24px",
      fontSize: "13px",
      fontFamily: "Raleway",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: "fff",
        fontSize: "1rem",
      },
    },
    MuiInput: {
      // root: {
      //   color: "#000",
      //   fontSize: "1rem",
      //   fontWeight: 600,
      // },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${bazGrey}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${bazGrey}`,
        },
      },
    },
    MuiTimelineItem: {
      root: {
        minHeight: "45px",
      },
      missingOppositeContent: {
        "&:before": {
          display: "none",
        },
      },
    },
    MuiTimelineConnector: {
      root: {
        backgroundColor: "#eee",
      },
    },
    MuiTimelineContent: {
      root: {
        padding: "3px 16px",
      },
    },
    MuiTimelineDot: {
      root: {
        margingTop: 0,
        marginBottom: 0,
      },
    },
    MuiTab: {
      root: {
        minWidth: "0",
        "@media (min-width: 0px)": {
          minWidth: 0,
        },
        "&$selected": {
          color: `${bazOrange}`,
        },
      },
      wrapper: {
        transition: "0.3s",
        "&:hover": {
          color: `${bazOrange}`,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        color: "red",
      },
    },
  },
});
