import { createMuiTheme } from "@material-ui/core/styles";

const bazOrange = "#ffc500";
const bazGrey = "#777";

// const arcOrange = "#FFBA60";
// const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      orange: bazOrange,
    },
    primary: {
      main: `${bazOrange}`,
    },
    secondary: {
      main: `${bazGrey}`,
    },
  },
  typography: {
    h4: {
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
      fontSize: "1.1rem",
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: "Raleway",
    },
    body1: {
      fontFamily: "Raleway",
    },
    body2: {
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
