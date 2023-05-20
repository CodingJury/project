import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ImageSlider from "../components/ImageSlider";

function Services() {
  const slides = [
    { url: "https://picsum.photos/id/237/600/400", title: "apple" },
    { url: "https://picsum.photos/id/236/600/400", title: "ball" },
    { url: "https://picsum.photos/id/235/600/400", title: "cat" },
    { url: "https://picsum.photos/id/234/600/400", title: "dog" },
    { url: "https://picsum.photos/id/233/600/400", title: "elephant" },
  ];

  return (
    <Container fixed>
      <Box sx={{ height: "100vh" }}>
        <Typography variant="h4" style={{ textAlign: 'center' }}>Features</Typography>
        <div style={{ height: "400px", width: "600px", margin: "0 auto" }}>
          <ImageSlider slides={slides} />
        </div>
      </Box>
    </Container>
  );
}

export default Services;
