import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";

const roadsterType = [
  { name: "Pickup"},
  { name: "Baú"},
  { name: "Baú Thermoking"},
  { name: "Carreta"},
  { name: "Truck"},
  { name: "Outros"},
];

const roadsterVolume = [
  { name: "até 1 metro (m³)" },
  { name: "até 2 metros (m³)" },
  { name: "até 3 metros (m³)" },
  { name: "até 4 metros (m³)" },
  { name: "até 5 metros (m³)" },
  { name: "Mais de 5 metros (m³)" },
];

export default function PaymentForm() {
  const defaultPropsType = {
    options: roadsterType,
    getOptionLabel: (option) => option.name,
  };
  const defaultPropsVolume = {
    options: roadsterVolume,
    getOptionLabel: (option) => option.name,
  };

  const [merchanType, setMerchanType] = React.useState(null);
  const [merchanVolume, setMerchanVolume] = React.useState(null);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Conte-me a disponibilidade do seu veículo
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="roadster"
            name="roadster"
            label="Nome da veículo"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            {...defaultPropsType}
            required
            id="roadsterType"
            name="roadsterType"
            value={merchanType}
            onChange={(event, newValue) => {
              setMerchanType(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tipo de veículo"
                variant="standard"
              />
            )}
            autoComplete="given-name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            {...defaultPropsVolume}
            required
            id="roadsterVolume"
            name="roadsterVolume"
            value={merchanVolume}
            onChange={(event, newValue) => {
              setMerchanVolume(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Volume disponível"
                variant="standard"
              />
            )}
            autoComplete="given-name"
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
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Estou ciente que seguem a Lei Geral de Proteção de Dados."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
