import "./Contact.css";
import React from "react";
import { HeaderAndFooter } from "../../components";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { createTheme, ThemeProvider, TextField, Box } from "@mui/material";
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
    focused: {
      main: "#40e2af",
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
  }

  handleChange(e, inputId) {
    const value = e.target.value;
    this.setState({ ...this.state, [inputId]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    send(SERVICE_ID, TEMPLATE_ID, this.state, USER_ID)
      .then((res) => {
        this.setState({
          name: "",
          preferredPronouns: "",
          email: "",
          help: "",
          hasSubmit: true,
          messageSent: true,
        });
      })
      .catch((err) => {
        this.setState({
          name: "",
          preferredPronouns: "",
          email: "",
          help: "",
          hasSubmit: true,
          messageSent: false,
        });
      });
  }

  render() {
    return (
      <div id="Contact">
        <HeaderAndFooter>
          <div className="information">
            <h1>Get in touch</h1>
            <p>
              Fill out the form, send me an email, or give me a call and I'll
              get back to you in 48 hours or less.
            </p>
            <h5 className="emailAndPhoneComp">
              <EmailRoundedIcon />
              lapbermudez@gmail.com
            </h5>
            <h5 className="emailAndPhoneComp">
              <PhoneIphoneIcon />
              612.447.3997
            </h5>
          </div>
          <div className="emailForm">
            {this.state.hasSubmit && this.state.messageSent && (
              <h1>Message sent!</h1>
            )}
            {this.state.hasSubmit && !this.state.messageSent && (
              <h1>Message not sent, please try again later.</h1>
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
                  <PrimaryButton text="Submit" />
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
