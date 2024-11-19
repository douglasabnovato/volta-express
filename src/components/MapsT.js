import React from "react";
import { CssBaseline, Box, Container, Paper, Typography } from "@mui/material";

export default function MapsT(props) {
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
          <Typography
            component="h1"
            variant="h4"
            align="center"
            sx={{
              mb: 1.5,
            }}
          >
            {props.funcionalidade}
          </Typography>
          <Box sx={{ bgcolor: "#cfe8fc", width: "350", height: "400" }}>
            <iframe
              title="Google Maps do transportador"
              src="https://www.google.com/maps/d/embed?mid=1HEwIXYYZiy_DIr2NmPVor3E058BYWE4&ehbc=2E312F&ll=-15.28428314609778%2C-66.75607381218147&z=3"
              width="100%"
              height="400"
            ></iframe>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
/**
  
 Mundi:
 https://www.google.com/maps/d/u/0/embed?mid=1HEwIXYYZiy_DIr2NmPVor3E058BYWE4&ehbc=2E312F

 Brasil: 
 https://www.google.com/maps/d/embed?mid=1HEwIXYYZiy_DIr2NmPVor3E058BYWE4&ehbc=2E312F&ll=-15.28428314609778%2C-66.75607381218147&z=3

 Juiz de Fora:
 https://www.google.com/maps/d/u/0/embed?mid=1HEwIXYYZiy_DIr2NmPVor3E058BYWE4&ehbc=2E312F&ll=-21.757044853210292%2C-43.35096350639521&z=15

 adicionar as coordenadas: parque halfeld JF
 &ll=-21.757044853210292%2C-43.35096350639521&z=15
 */
