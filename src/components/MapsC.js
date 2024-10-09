import React from "react";
import { CssBaseline, Box, Container, Paper, Typography } from "@mui/material";

export default function MapsC(props) {
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
          <Typography component="h1" variant="h4" align="center">
            {props.funcionalidade}
          </Typography>
          <Box sx={{ bgcolor: "#cfe8fc", width: "350", height: "400" }}>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1Ywi7AEJi7RkzEVGJX5CCvnz7ajSmy3g&ehbc=2E312F"
              width="100%"
              height="400"
              sx={{ width: "100%", height: "350" }}
            ></iframe>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
