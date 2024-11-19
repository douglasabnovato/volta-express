import React from "react";
import { CssBaseline, Box, Container, Paper, Typography } from "@mui/material";

export default function MapsW(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          mb: 4,
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 6, md: 6 },
            p: { xs: 2, md: 8 },
          }}
        >
          <Typography component="h1" variant="h4" align="center" 
          sx={{
                mb: 1.5
              }}>
            {props.funcionalidade}
          </Typography>
          <Box sx={{ bgcolor: "#cfe8fc", height: "400" }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-8CGrhYlB-0?si=GxxPbidcttoW5rHt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
/**
 https://www.google.com/maps/d/embed?mid=1Ywi7AEJi7RkzEVGJX5CCvnz7ajSmy3g&ehbc=2E312F

 adicionar as coordenadas: parque halfeld JF
 &ll=-21.757044853210292%2C-43.35096350639521&z=15
 */