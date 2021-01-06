import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import UnderConstruction from "../../assets/under-construction.svg";

import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Grow from "@material-ui/core/Grow";
import { makeStyles, useTheme } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import resumeDate from "../../utils/resumeDate";
import TitleComponent from "../../utils/TitleComponent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" style={{ width: "100%" }}>
      {value === index && children}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({}));

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [projectDialog, setProjectDialog] = useState(null);
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <>
      <Grid item style={{ padding: "2em 2em 0em 2em" }}>
        <TitleComponent title="Portofolio" />
      </Grid>

      <Grid
        item
        container
        style={{ padding: "1em 2em 0em 2em" }}
        justify={matchesSM ? "center" : undefined}
      >
        <Grid container justify={matchesSM ? "center" : undefined}>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            onChange={(e, newValue) => setTabValue(newValue)}
            style={{ marginBottom: "1em" }}
          >
            <Tab label="All" disableRipple></Tab>
            <Tab label="Mern" disableRipple></Tab>
            <Tab label="React-Native" disableRipple></Tab>
          </Tabs>
        </Grid>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {[...resumeDate.portofolio].map((item) => (
              <Grid
                item
                key={item.title}
                xs={12}
                sm={6}
                md={4}
                style={{ textAlign: "center" }}
              >
                <Grow in timeout={1000}>
                  <Card
                    raised={true}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setOpen(true);
                      setProjectDialog(item);
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        image={item.image}
                        style={{ height: "200px", Width: "100%" }}
                      />
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body2">
                          {item.features.map((feature) => (
                            <Chip
                              style={{
                                marginRight: "0.4em",
                                fontSize: "0.6rem",
                                height: "15px",
                                fontFamily: "Raleway",
                              }}
                              // color={}
                              label={feature.toLowerCase()}
                            />
                          ))}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={tabValue} index={1} style={{ width: "100%" }}>
          {[...resumeDate.portofolio].filter((proj) => proj.tag === "mern")
            .length === 0 ? (
            <Grid
              container
              alignItems="center"
              direction="column"
              style={{
                marginBottom: "2em",
              }}
            >
              <Typography variant="h5" align="center">
                Sorry ... projects is under construction!
              </Typography>
              <img
                src={UnderConstruction}
                alt="not found"
                width="300"
                height="200"
              />
            </Grid>
          ) : (
            <Grid container spacing={3}>
              {[...resumeDate.portofolio]
                .filter((proj) => proj.tag === "mern")
                .map((item) => (
                  <Grid item key={item.title} xs={12} sm={6} md={4}>
                    <Grow in timeout={1000}>
                      <Card
                        raised={true}
                        style={{ width: "100%" }}
                        onClick={() => {
                          setOpen(true);
                          setProjectDialog(item);
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            image={item.image}
                            style={{ height: 200 }}
                          />
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              {item.title}
                            </Typography>
                            <Typography variant="body2">
                              {item.features.map((feature) => (
                                <Chip
                                  style={{
                                    marginRight: "0.4em",
                                    fontSize: "0.6rem",
                                    height: "15px",
                                    fontFamily: "Raleway",
                                  }}
                                  // color={}
                                  label={feature.toLowerCase()}
                                />
                              ))}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ))}
            </Grid>
          )}
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            {[...resumeDate.portofolio]
              .filter((proj) => proj.tag === "native")
              .map((item) => (
                <Grid
                  item
                  key={item.title}
                  xs={12}
                  sm={6}
                  md={4}
                  style={{
                    marginBottom: "2em",
                    textAlign: "center",
                  }}
                >
                  <Grow in timeout={1000}>
                    <Card
                      raised={true}
                      style={{ width: "100%" }}
                      onClick={() => {
                        setOpen(true);
                        setProjectDialog(item);
                      }}
                    >
                      <CardActionArea>
                        <CardMedia image={item.image} style={{ height: 145 }} />
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {item.title}
                          </Typography>
                          <Typography variant="body2">
                            {item.features.map((feature) => (
                              <Chip
                                style={{
                                  marginRight: "0.4em",
                                  fontSize: "0.6rem",
                                  height: "15px",
                                  fontFamily: "Raleway",
                                }}
                                // color={}
                                label={feature.toLowerCase()}
                              />
                            ))}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ))}
          </Grid>
        </TabPanel>
      </Grid>

      {projectDialog !== null ? (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{ style: {} }}
        >
          <DialogContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              style={{ padding: "2em" }}
            >
              <Grid item>
                <Typography variant="h6">{projectDialog.title}</Typography>
              </Grid>
              <Grid item>
                <img
                  src={projectDialog.image}
                  alt=""
                  style={{ maxWidth: "400px", width: "100%" }}
                />
              </Grid>
              <Grid item style={{ marginTop: "1em" }}>
                {/* <TitleComponent title="About" /> */}
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {/* {projectDialog.description} */}
                </Typography>
              </Grid>

              <Grid
                item
                container
                justify="center"
                style={{ marginTop: "1em" }}
              >
                <Grid item>
                  <a
                    style={{ color: "inherit" }}
                    target="_blank"
                    href={projectDialog.links[0].link}
                  >
                    <GitHubIcon />
                  </a>
                </Grid>
                <Grid item style={{ marginLeft: "1em" }}>
                  <a
                    style={{ color: "inherit" }}
                    target="_blank"
                    href={projectDialog.links[1].link}
                  >
                    <LanguageIcon />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
};

export default Profile;
