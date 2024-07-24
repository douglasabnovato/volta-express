import React from "react";
import {
  CssBaseline,
  Box,
  Container,
  Button,
  Paper,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function Checkout(props) {
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
          <Box sx={{ flexGrow: 1, display: "block" }}>
            <ColorButton
              href="https://l1nk.dev/volta-express-anunciar"
              target="_blank"
              variant="contained"
              size="large"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                mr: 0.5,
                ml: 0.5,
                textAlign: "center"
              }}
            >
              ANUNCIAR SUA CARGA
            </ColorButton>
            <ColorButton
              href="https://l1nk.dev/volta-express-transportar"
              target="_blank"
              variant="contained"
              size="large"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                mr: 0.5,
                ml: 0.5,
                textAlign: "center"
              }}
            >
              COMPLETAR SUA CARGA
            </ColorButton>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
