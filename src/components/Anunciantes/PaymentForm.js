import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";

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

export default function PaymentForm() {
  const defaultPropsType = {
    options: merchandiseType,
    getOptionLabel: (option) => option.name,
  };
  const defaultPropsVolume = {
    options: merchandiseVolume,
    getOptionLabel: (option) => option.name,
  };

  const [merchanType, setMerchanType] = React.useState(null);
  const [merchanVolume, setMerchanVolume] = React.useState(null);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Conte-me o que deseja transportar
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="merchandise"
            name="merchandise"
            label="Nome da mercadoria"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            {...defaultPropsType}
            required
            id="merchandiseType"
            name="merchandiseType"
            value={merchanType}
            onChange={(event, newValue) => {
              setMerchanType(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tipo de mercadoria"
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
            id="merchandiseVolume"
            name="merchandiseVolume"
            value={merchanVolume}
            onChange={(event, newValue) => {
              setMerchanVolume(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Volume de mercadoria"
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
            control={<Checkbox color="secondary" name="lgpd2" value="yes" />}
            label="Estou ciente que seguem a Lei Geral de Proteção de Dados."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
