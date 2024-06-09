import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, pink, grey } from "@mui/material/colors";

import Button from "@mui/material/Button";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import logoVoltaExpress from "./../assets/icon-logo/logo-completa.png";

const themeFooter = createTheme({
  palette: {
    whatsapp: {
      tealgreen: "#128C7E",
      tealgreendark: "#075E54",
      lightgreen: "#25D366",
    },
    tomato: "#FF6347",
    pink: {
      deep: "#FF1493",
      hot: "#FF69B4",
      medium: "#C71585",
      pale: "#DB7093",
      light: "#FFB6C1",
    },
    grey: {
      deep: grey[200],
      hot: grey[800],
    },
    primary: {
      main: blue[200],
    },
    secondary: {
      main: pink[200],
    },
  },
});

function Copyright() {
  return (
    <Typography
      variant="body2"
      sx={{ width: 181, color: "primary.main", mt: 2 }}
      align="left"
    >
      {"Copyright © "}
      <Link color="inherit" href="#voltaexpressTOP">
        Volta Express
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function LogoVoltaExpress() {
  return (
    <CardMedia
      component="img"
      sx={{ width: 181 }}
      image={logoVoltaExpress}
      alt="Volta Express"
    />
  );
}

function ContatoWhatsapp() {
  return (
    <Button
      variant="contained"
      startIcon={<WhatsAppIcon />}
      href="https://api.whatsapp.com/send?phone=5532999264243&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
      target="_blank"
      sx={{
        mt: 2,
        bgcolor: "whatsapp.lightgreen",
        "&:hover": {
          backgroundColor: "whatsapp.tealgreen",
        },
      }}
    >
      Entre em contato
    </Button>
  );
}

function Footer(props) {
  const { description } = props;

  return (
    <ThemeProvider theme={themeFooter}>
      <Box
        component="footer"
        sx={{
          bgcolor: "grey.deep",
          color: "primary.main",
          py: 6,
        }}
      >
        <Container sx={{ display: "flex", alignItems: "center" }}>
          <LogoVoltaExpress />

          <Container sx={{ width: "400" }}>
            <Typography
              variant="subtitle1"
              align="left"
              color="primary.main"
              component="p"
            >
              {description}
            </Typography>

            <Copyright />

            <ContatoWhatsapp />
          </Container>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
