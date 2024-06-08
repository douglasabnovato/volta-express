import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  CssBaseline,
  Box,
  Container,
  Button,
  Paper,
  Typography,
} from "@mui/material";

/**
 * start addressForm
 */

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

/**
 * start paymentForm
 */

import Autocomplete from "@mui/material/Autocomplete";

/**
 * start review
 */

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Divider from "@mui/material/Divider";

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
  /**
   * Anunciante - AddressForm
   */
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address1, setAddress1] = React.useState("");
  const [city1, setCity1] = React.useState("");
  const [state1, setState1] = React.useState("");
  const [zip1, setZip1] = React.useState("");
  const [country1, setCountry1] = React.useState("");
  const [lgpd1Checked, setLgpd1Checked] = React.useState(true);

  /**
   * Anunciante - PaymentForm
   */
  const [merchandise, setMerchandise] = React.useState("");
  const [merchanType, setMerchanType] = React.useState("");
  const [merchanVolume, setMerchanVolume] = React.useState("");
  const [importantInformation, setImportantInformation] = React.useState("");
  const [lgpd2Checked, setLgpd2Checked] = React.useState(true);

  /**
   * Anunciante - Review
   */
  const [address2, setAddress2] = React.useState("");
  const [city2, setCity2] = React.useState("");
  const [state2, setState2] = React.useState("");
  const [zip2, setZip2] = React.useState("");
  const [dateCar2, setDateCar2] = React.useState();
  const [address3, setAddress3] = React.useState("");
  const [city3, setCity3] = React.useState("");
  const [state3, setState3] = React.useState("");
  const [zip3, setZip3] = React.useState("");
  const [dateDescar3, setDateDescar3] = React.useState();
  const [lgpd3Checked, setLgpd3Checked] = React.useState(true);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleAnnounce = () => {
    console.log("proximo", activeStep);
    setActiveStep(activeStep + 1);
  };

  function sendEmail(e) {
    e.preventDefault();
    console.log("funcao sendEmail");

    const templateParams = {
      assunto: "Anunciante",
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address1: address1,
      city1: city1,
      state1: state1,
      zip1: zip1,
      country1: country1,
      lgpd1: lgpd1Checked,
      merchandise: merchandise,
      merchandiseType: merchanType,
      merchandiseVolume: merchanVolume,
      importantInformation: importantInformation,
      lgpd2: lgpd2Checked,
      address2: address2,
      city2: city2,
      state2: state2,
      zip2: zip2,
      dateCar2: dateCar2,
      address3: address3,
      city3: city3,
      state3: state3,
      zip3: zip3,
      dateDescar3: dateDescar3,
      lgpd3: lgpd3Checked,
    };

    console.log("templateParams", templateParams);

    emailjs
      .sendForm(
        "REACT_APP_SERVICE_ID",
        "REACT_APP_TEMPLATE_ID",
        e.target,
        "REACT_APP_USER_ID"
      )
      .then(
        (response) => {
          console.log(
            "SUCCESS! Email enviado.",
            response.status,
            response.text
          );
          setFirstName("");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }

  const merchandiseType = [
    { name: "Eletro e Eletronicos" },
    { name: "Alimento Não Perecivel" },
    { name: "Peças e Industria" },
    { name: "Material de Limpeza e Descartaveis" },
    { name: "Outros" },
  ];

  const merchandiseVolume = [
    { name: "até 1 metro (m³)" },
    { name: "até 2 metros (m³)" },
    { name: "até 3 metros (m³)" },
    { name: "até 4 metros (m³)" },
    { name: "Mais de 4 metros (m³)" },
  ];

  const defaultPropsType = {
    options: merchandiseType,
    getOptionLabel: (option) => option.name,
  };

  const defaultPropsVolume = {
    options: merchandiseVolume,
    getOptionLabel: (option) => option.name,
  };

  function CarregarDate() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Carregar em" />
      </LocalizationProvider>
    );
  }

  function DescarregarDate() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Descarregar em" />
      </LocalizationProvider>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            {props.funcionalidade}
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <ColorButton
              href="https://forms.office.com/r/xpUEPan4Gs"
              target="_blank"
              variant="contained"
              size="medium"
              sx={{ my: 2, color: "white", display: "block", mr: 1, ml: 2 }}
            >
              ANUNCIAR SUA CARGA
            </ColorButton>
            <ColorButton
              href="https://forms.office.com/r/igD4hV7pDa"
              target="_blank"
              variant="contained"
              size="medium"
              sx={{ my: 2, color: "white", display: "block", mr: 1, ml: 2 }}
            >
              COMPLETAR SUA CARGA
            </ColorButton>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
