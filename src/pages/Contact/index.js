import "./Contact.css";
import React from "react";
import { HeaderAndFooter } from "../../components";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  createTheme,
  ThemeProvider,
  TextField,
  Box,
  Alert,
} from "@mui/material";
import PrimaryButton from "../../components/PrimaryButton";
import { send } from "emailjs-com";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

const theme = createTheme({
  typography: {
    fontFamily: "Lato, sans-serif",
  },
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#303030",
      contrastText: "#fff",
    },
    error: {
      main: "#f72c5b",
      contrastText: "#fff",
    },
  },
});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      preferredPronouns: "",
      email: "",
      help: "",
      hasSubmit: false,
      messageSent: false,
      loading: false,
    };
    this.formInfo = [
      {
        placeholder: "Name",
        type: "text",
        required: true,
        multiline: false,
        value: "name",
      },
      {
        placeholder: "Preferred Pronouns",
        type: "text",
        required: false,
        multiline: false,
        value: "preferredPronouns",
      },
      {
        placeholder: "Email",
        type: "email",
        required: true,
        multiline: false,
        value: "email",
      },
      {
        placeholder: "How can I help?",
        type: "text",
        required: true,
        multiline: true,
        value: "help",
      },
    ];
    this.socialMedia = [
      {
        platform: "GitHub",
        link: "https://github.com/luisbermudez",
        icon: <GitHubIcon />,
        description: "Check out my Repos",
      },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/luis-perezbermudez/",
        icon: <LinkedInIcon />,
        description: "Message me on LinkedIn",
      },
    ];
  }

  handleChange(e, inputId) {
    this.setState({ hasSubmit: false });
    const value = e.target.value;
    this.setState({ [inputId]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    send(SERVICE_ID, TEMPLATE_ID, this.state, USER_ID)
      .then((res) => {
        setTimeout(() => {
          this.setState({
            name: "",
            preferredPronouns: "",
            email: "",
            help: "",
            hasSubmit: true,
            messageSent: true,
            loading: false,
          });
        }, 1700);
      })
      .catch((err) => {
        setTimeout(() => {
          this.setState({
            name: "",
            preferredPronouns: "",
            email: "",
            help: "",
            hasSubmit: true,
            messageSent: false,
            loading: false,
          });
        }, 1700);
      });
  }

  render() {
    return (
      <div className="Contact">
        <HeaderAndFooter>
          <div className="information">
            <h1>Get in touch</h1>
            <p>
              Fill out the form, send me an email, or visit my social media
              profiles and I'll get back to you in 48 hours or less.
            </p>
            <h5 className="emailAndPhoneComp">
              <EmailRoundedIcon />
              lapbermudez@gmail.com
            </h5>
            {this.socialMedia.map((each, i) => (
              <a
                key={i}
                tabIndex="-1"
                href={each.link}
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="emailAndPhoneComp">
                  {each.icon}
                  {each.description}
                </h5>
              </a>
            ))}
          </div>
          <div className="emailForm">
            {this.state.hasSubmit && this.state.messageSent && (
              <h1 className="messageSent gradientTitleSecondary">
                Message sent!
              </h1>
            )}
            {this.state.hasSubmit && !this.state.messageSent && (
              <ThemeProvider theme={theme}>
                <Alert
                  severity="error"
                  variant="filled"
                  color="error"
                  sx={{ color: "white", fontSize: "0.9rem" }}
                >
                  <strong>Message not sent - </strong> Please, try again.
                </Alert>
              </ThemeProvider>
            )}
            {!this.state.messageSent && (
              <ThemeProvider theme={theme}>
                <Box
                  component="form"
                  autoComplete="off"
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  {this.formInfo.map((each, i) => (
                    <TextField
                      disabled={this.state.loading}
                      key={i}
                      type={each.type}
                      required={each.required}
                      id="outlined-basic"
                      label={each.placeholder}
                      variant="outlined"
                      fullWidth={true}
                      sx={{ margin: "12px 0" }}
                      multiline={each.multiline}
                      rows={4}
                      color="neutral"
                      value={this.state[`${each.value}`]}
                      onChange={(e) => this.handleChange(e, each.value)}
                    />
                  ))}
                  {this.state.loading ? (
                    <div className="loadingContainer">
                      <div className="dotPulse"></div>
                    </div>
                  ) : (
                    <PrimaryButton text="Submit" />
                  )}
                </Box>
              </ThemeProvider>
            )}
          </div>
        </HeaderAndFooter>
      </div>
    );
  }
}

export default Contact;
