import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [verfied, setVerifed] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }

  return (
    <Container fixed>
      <Box sx={{ height: "100vh" }}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Contact Me
        </Typography>
        <form style={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={1} style={{ width: "60%" }}>
            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Enter first name"
                label="First Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField
                placeholder="Enter last name"
                label="Last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                placeholder="Enter email"
                label="Email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                placeholder="Enter phone number"
                label="Phone"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Type your message here"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default Contact;
