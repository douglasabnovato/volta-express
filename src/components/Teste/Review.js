import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Autocomplete from "@mui/material/Autocomplete";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const uploadAddress = [
  {
    name: "Porto Iguaí Estrada Prefeito Wilson Pedro Francisco, Itaguaí, Rio de Janeiro, Brasil, 23825-410",
  },
  {
    name: "Porto de Santos Avenida Cnso. Rodrigues Alves, 0, Sn, Zona Portuária, Santos - SP, CEP: 11015-900",
  },
  { name: "Porto Seco Granbel Rod. BR-381 433000, Betim, MG, 32530-000" },
  { name: "Endereço de sua preferência" },
];

const downloadAddress = [
  {
    name: "Porto Iguaí Estrada Prefeito Wilson Pedro Francisco, Itaguaí, Rio de Janeiro, Brasil, 23825-410",
  },
  {
    name: "Porto de Santos Avenida Cnso. Rodrigues Alves, 0, Sn, Zona Portuária, Santos - SP, CEP: 11015-900",
  },
  { name: "Porto Seco Granbel Rod. BR-381 433000, Betim, MG, 32530-000" },
  { name: "Endereço de sua preferência" },
];

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
  { name: "Shipping", desc: "", price: "Free" },
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

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

export default function Review() {

  const defaultPropsUploadAddress = {
    options: uploadAddress,
    getOptionLabel: (option) => option.name,
  };

  const defaultPropsDownloadAddress = {
    options: downloadAddress,
    getOptionLabel: (option) => option.name,
  };

  const [upAddress, setUpAddress] = React.useState(null);
  const [downAddress, setDownAddress] = React.useState(null);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informações do trajeto
      </Typography>
      <form action="/anunciar">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="address2"
              name="address2"
              label="Endereço para carregar"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city2"
              name="city2"
              label="Cidade"
              fullWidth
              autoComplete="shipping address-level1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state2"
              name="state2"
              label="Estado"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip2"
              name="zip2"
              label="CEP"
              fullWidth
              autoComplete="shipping postal-code1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CarregarDate />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address3"
              name="address3"
              label="Endereço para descarregar"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city3"
              name="city3"
              label="Cidade"
              fullWidth
              autoComplete="shipping address-level3"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state3"
              name="state3"
              label="Estado"
              fullWidth
              autoComplete="shipping address-level4"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip3"
              name="zip3"
              label="CEP"
              fullWidth
              autoComplete="shipping postal-code2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DescarregarDate />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="lgpd3" value="yes" />}
              label="Estou ciente que seguem a Lei Geral de Proteção de Dados."
            />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
