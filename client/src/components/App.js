import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import theme from "../theme";
import theme2 from "../theme2";

// components
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Portofolio from "../pages/Portofolio/Portofolio";
import Resume from "../pages/Resume/Resume";
import ContactPage from "../pages/contact/ContactPage";

const useStyles = makeStyles((theme) => ({
  containerShadow: {
    boxShadow: theme.shadows[4],
    borderRadius: "0.5rem",
    backgroundColor: "#fff",
    marginBottom: "1em",
    backgroundColor: "#fff",
    borderRadius: "6px",
    marginTop: "1em",
  },
}));

const App = () => {
  console.log(theme);

  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles();

  const toggleNightMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [darkMode]);
  return (
    <ThemeProvider theme={darkMode ? theme2 : theme}>
      <Container style={{ marginTop: "2em" }}>
        <Grid container spacing={2}>
          <Grid
            item
            container
            lg={3}
            md={4}
            sm={12}
            xs={12}
            style={{ height: "100%" }}
            // style={{ position: "fixed" }}
          >
            <Profile darkMode={darkMode} />
          </Grid>
          <Grid item container xs direction="column">
            <Router>
              <Grid item>
                <Header toggleNightMode={toggleNightMode} />
              </Grid>
              <Grid
                item
                container
                direction="column"
                className={classes.containerShadow}
                style={{ backgroundColor: darkMode ? "#121212" : "#fff" }}
              >
                <Switch>
                  <Route exact path="/">
                    {" "}
                    <Resume />
                  </Route>
                  <Route exact path="/portofolio">
                    {" "}
                    <Portofolio />
                  </Route>
                  <Route exact path="/contact">
                    {" "}
                    <ContactPage />
                  </Route>
                </Switch>
              </Grid>
            </Router>

            <Footer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
