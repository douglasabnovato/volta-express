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
              title="Google Maps de carga"
              src="https://www.google.com/maps/d/embed?mid=1Ywi7AEJi7RkzEVGJX5CCvnz7ajSmy3g&ehbc=2E312F&ll=-16.671913511766096%2C-68.70217983345472&z=3"
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
/**
 
 Mundo:
 https://www.google.com/maps/d/embed?mid=1Ywi7AEJi7RkzEVGJX5CCvnz7ajSmy3g&ehbc=2E312F

 Brasil:
 https://www.google.com/maps/d/embed?mid=1Ywi7AEJi7RkzEVGJX5CCvnz7ajSmy3g&ehbc=2E312F&ll=-16.671913511766096%2C-68.70217983345472&z=3

 Juiz de Fora:
 https://www.google.com/maps/d/embed?mid=1Ywi7AEJi7RkzEVGJX5CCvnz7ajSmy3g&ehbc=2E312F&ll=-21.757044853210292%2C-43.35096350639521&z=15

 adicionar as coordenadas: parque halfeld JF
 &ll=-21.757044853210292%2C-43.35096350639521&z=15
 
 */
