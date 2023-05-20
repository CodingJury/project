import { Box, Container, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Container fixed>
      <Box sx={{ height: "100vh" }}>
        <Typography variant="h4">
          Company Name
        </Typography>
        <br />
        <Typography variant="h5">Description</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus,
          cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi
          quidem quibusdam.
        </Typography>
        <br/>
        <Typography variant="h5">Objectives</Typography>
        <Typography variant="body1">
          1. first
          <br/>
          2. second
          <br />
          3. third
        </Typography>
      </Box>
    </Container>
  )
}

export default About