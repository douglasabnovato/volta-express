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

const uploadAddress = [
  { name: "Porto Iguaí Estrada Prefeito Wilson Pedro Francisco, Itaguaí, Rio de Janeiro, Brasil, 23825-410" },
  { name: "Porto de Santos Avenida Cnso. Rodrigues Alves, 0, Sn, Zona Portuária, Santos - SP, CEP: 11015-900" },
  { name: "Porto Seco Granbel Rod. BR-381 433000, Betim, MG, 32530-000" },
  { name: "Endereço de sua preferência" },
];

const downloadAddress = [
  { name: "Porto Iguaí Estrada Prefeito Wilson Pedro Francisco, Itaguaí, Rio de Janeiro, Brasil, 23825-410" },
  { name: "Porto de Santos Avenida Cnso. Rodrigues Alves, 0, Sn, Zona Portuária, Santos - SP, CEP: 11015-900" },
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
        Sobre o trajeto
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Autocomplete
            {...defaultPropsUploadAddress}
            required
            id="uploadAddress"
            name="uploadAddress"
            value={upAddress}
            onChange={(event, newValue) => {
              setUpAddress(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Endereço para carregar"
                variant="standard"
              />
            )}
            autoComplete="given-name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CarregarDate />
        </Grid>

        <Grid item xs={12} md={6}>
          <Autocomplete
            {...defaultPropsDownloadAddress}
            required
            id="downloadAddress"
            name="downloadAddress"
            value={downAddress}
            onChange={(event, newValue) => {
              setDownAddress(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Endereço para descarregar"
                variant="standard"
              />
            )}
            autoComplete="given-name"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <DescarregarDate />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
