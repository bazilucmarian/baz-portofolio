import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TitleComponent from "../../utils/TitleComponent";
import { makeStyles, useTheme, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import ContactImage from "../../assets/contact.svg";
import TelegramIcon from "@material-ui/icons/Telegram";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";
import ContactApi from "../../api/contact";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  message: {
    border: `2px solid ${theme.palette.secondary.light}`,
    marginTop: "2em",
    borderRadius: 5,
  },
  sendButton: {
    width: 245,
    height: 45,
    fontSize: "1rem",
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const ContactPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const [nameHelper, setNameHelper] = useState("");

  const [emailHelper, setEmailHelper] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const onChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        const validName = /^[a-zA-Z ]{2,30}$/.test(e.target.value);
        if (!validName) {
          setNameHelper("Invalid Name");
        } else {
          setNameHelper("");
        }
        break;
      case "email":
        setEmail(e.target.value);
        const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!validEmail) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;

      case "phone":
        setPhone(e.target.value);
        const validPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );

        if (!validPhone) {
          setPhoneHelper("Invalid number");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const onSubmit = async () => {
    setLoading(true);
    ContactApi.post("/contact", { name, email, phone, message })
      .then((res) => {
        setLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message sent successfully",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong, please try again",
          backgroundColor: "#FF3232",
        });
      });
  };

  return (
    <Grid
      container
      style={{
        padding: "2em",
        borderRadius: "6px",
      }}
    >
      <Grid
        item
        container
        direction="column"
        xs={12}
        md={5}
        alignItems={matchesMD ? "center" : undefined}
      >
        <TitleComponent title="Contact" />

        <Grid
          item
          container
          style={{ marginTop: "2em" }}
          justify={matchesXS ? "flex-start" : matchesMD ? "center" : undefined}
        >
          <Grid item>
            <CallIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="tel:(0757) 357 597"
              >
                (0757) 357 597
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify={matchesXS ? "flex-start" : matchesMD ? "center" : undefined}
        >
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="mailto:bazilucmarian98@yahoo.com"
              >
                bazilucmarian98@yahoo.com
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          style={{ maxWidth: "20em", marginTop: "2em" }}
        >
          <Grid item>
            <TextField
              label="Name"
              fullWidth
              InputLabelProps={{
                style: { color: "#000", fontWeight: "600" },
              }}
              style={{ backgroundColor: "#fff" }}
              id="name"
              value={name}
              helperText={name === "" ? undefined : nameHelper}
              error={nameHelper.length !== 0 && name.length !== 0}
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
            <TextField
              label="Email"
              fullWidth
              helperText={email === "" ? undefined : emailHelper}
              error={emailHelper.length !== 0 && email.length !== 0}
              id="email"
              InputLabelProps={{
                style: { color: "#000", fontWeight: "600" },
              }}
              style={{ backgroundColor: "#fff" }}
              value={email}
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              InputLabelProps={{
                style: { color: "#000", fontWeight: "600" },
              }}
              style={{ backgroundColor: "#fff" }}
              id="phone"
              helperText={phone === "" ? undefined : phoneHelper}
              error={phoneHelper.length !== 0 && phone.length !== 0}
              fullWidth
              value={phone}
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item>
            <TextField
              placeholder="Your message"
              id="message"
              rows={10}
              InputProps={{ disableUnderline: true }}
              value={message}
              multiline
              fullWidth
              className={classes.message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item container justify="center" style={{ marginTop: "2em" }}>
            {loading ? (
              <CircularProgress size={30} />
            ) : (
              <Button
                variant="contained"
                className={classes.sendButton}
                onClick={onSubmit}
                disabled={
                  name.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  message.length === 0 ||
                  nameHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0
                }
              >
                Send Message
                {name.length == 0 ||
                email.length === 0 ||
                phone.length === 0 ||
                message.length === 0 ? undefined : (
                  <TelegramIcon />
                )}
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" xs={12} md={7}>
        <Grid item>
          <img
            src={ContactImage}
            alt="contact image"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={alert.open}
        message={alert.message}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      ></Snackbar>
    </Grid>
  );
};

export default ContactPage;
