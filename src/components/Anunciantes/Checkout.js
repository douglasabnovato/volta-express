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
          {activeStep > 1 ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Obrigado por anunciar com a gente.
              </Typography>
              <Typography variant="subtitle1">
                O número do seu anúncio é 001A04052024. Entraremos em contato
                com você para acompanhar o transporte.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <form onSubmit={sendEmail}>
                <Typography
                  variant="h6"
                  gutterBottom
                  mt={6}
                  mb={2}
                  sx={{ fontWeight: "bold" }}
                >
                  Sua identificação e seu endereço
                </Typography>
                <Grid container spacing={3} mb={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="Primeiro nome do responsável"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Último nome"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Seu melhor e-mail"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      required
                      id="phone"
                      name="phone"
                      label="Telefone whatsapp"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="address1"
                      name="address1"
                      label="Endereço principal"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setAddress1(e.target.value)}
                      value={address1}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city1"
                      name="city1"
                      label="Cidade"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setCity1(e.target.value)}
                      value={city1}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="state1"
                      name="state1"
                      label="Estado"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setState1(e.target.value)}
                      value={state1}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="zip1"
                      name="zip1"
                      label="CEP"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setZip1(e.target.value)}
                      value={zip1}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="country1"
                      name="country1"
                      label="País"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setCountry1(e.target.value)}
                      value={country1}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="secondary"
                          name="lgpd1Checked"
                          onChange={(e) => setLgpd1Checked(e.target.value)}
                          value={lgpd1Checked}
                        />
                      }
                      label="Estou ciente que seguem a Lei Geral de Proteção de Dados."
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Typography
                  variant="h6"
                  gutterBottom
                  mt={6}
                  mb={2}
                  sx={{ fontWeight: "bold" }}
                >
                  Conte-me o que deseja transportar
                </Typography>
                <Grid container spacing={3} mb={4}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="merchandise"
                      name="merchandise"
                      label="Nome da mercadoria"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setMerchandise(e.target.value)}
                      value={merchandise}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Autocomplete
                      {...defaultPropsType}
                      id="merchanType"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Tipo de mercadoria"
                          variant="standard"
                          value={merchanType}
                          onChange={(e) => setMerchanType(e.target.value)}
                        />
                      )}
                      name="merchanType"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Autocomplete
                      {...defaultPropsVolume}
                      id="merchanVolume"
                      name="merchanVolume"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Volume de mercadoria"
                          variant="standard"
                          value={merchanVolume}
                          onChange={(e) => setMerchanVolume(e.target.value)}
                        />
                      )}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      id="importantInformation"
                      name="importantInformation"
                      label="Mais informações importantes"
                      fullWidth
                      variant="standard"
                      value={importantInformation}
                      onChange={(e) => setImportantInformation(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="secondary"
                          name="lgpd2Checked"
                          value={lgpd2Checked}
                          onChange={(e) => setLgpd2Checked(e.target.value)}
                        />
                      }
                      label="Estou ciente que seguem a Lei Geral de Proteção de Dados."
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Typography
                  variant="h6"
                  gutterBottom
                  mt={6}
                  mb={2}
                  sx={{ fontWeight: "bold" }}
                >
                  Informações do trajeto
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="address2"
                      name="address2"
                      label="Endereço para carregar"
                      fullWidth
                      variant="standard"
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city2"
                      name="city2"
                      label="Cidade"
                      fullWidth
                      variant="standard"
                      value={city2}
                      onChange={(e) => setCity2(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="state2"
                      name="state2"
                      label="Estado"
                      fullWidth
                      variant="standard"
                      value={state2}
                      onChange={(e) => setState2(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="zip2"
                      name="zip2"
                      label="CEP"
                      fullWidth
                      variant="standard"
                      value={zip2}
                      onChange={(e) => setZip2(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CarregarDate
                      name="dateCar2"
                      value={dateCar2}
                      onChange={(e) => setDateCar2(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="address3"
                      name="address3"
                      label="Endereço para descarregar"
                      fullWidth
                      variant="standard"
                      value={address3}
                      onChange={(e) => setAddress3(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city3"
                      name="city3"
                      label="Cidade"
                      fullWidth
                      variant="standard"
                      value={city3}
                      onChange={(e) => setCity3(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="state3"
                      name="state3"
                      label="Estado"
                      fullWidth
                      variant="standard"
                      value={state3}
                      onChange={(e) => setState3(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="zip3"
                      name="zip3"
                      label="CEP"
                      fullWidth
                      variant="standard"
                      value={zip3}
                      onChange={(e) => setZip3(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <DescarregarDate
                      name="dateDescar3"
                      value={dateDescar3}
                      onChange={(e) => setDateDescar3(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="secondary"
                          name="lgpd3Checked"
                          value={lgpd3Checked}
                          onChange={(e) => setLgpd3Checked(e.target.value)}
                        />
                      }
                      label="Estou ciente que seguem a Lei Geral de Proteção de Dados."
                    />
                  </Grid>
                </Grid>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    type="submit"
                    //onClick={handleAnnounce}
                  >
                    Anunciar
                  </Button>
                </Box>
              </form>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
