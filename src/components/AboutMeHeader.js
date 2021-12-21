import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { CardMedia, Typography } from "@mui/material";
import self from "../assets/Self_image.jpg";

function AboutMeHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding="5%" direction="row-reverse">
        <Grid item md={4}>
          <CardMedia
            component="img"
            image={self}
            alt="vatsal gupta"

            // style={{ borderRadius: "50%", padding: "10%" }}
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h3" gutterBottom component="div" color="#EEEEEE">
            Vatsal Gupta
          </Typography>
          <Typography variant="h5" gutterBottom component="div" color="#D3D3D3">
            Software Engineer
          </Typography>
          <Typography variant="body2" color="#708090">
            I am a software engineer currently in my final year B.Tech from
            Vellore of Technology. I am proficient in web development using
            React Js. I also like to do problem solving in Data Structures and
            Algorithms.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutMeHeader;
