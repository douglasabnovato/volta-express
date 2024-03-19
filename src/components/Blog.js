import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./Header";

import MainFeaturedPost from "./MainFeaturedPost";

import FeaturedPost from "./FeaturedPost";

import Footer from "./Footer";

// CustomTabPanel - start
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import AnunciantesForm from "./Anunciantes/Checkout";
import TransportadoresForm from "./Transportadores/Checkout";
// CustomTabPanel - theend

// AccordionTransportadores - start
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
// AccordionTransportadores - theend

/**
 * cards fotos - start
 */
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
/**
 * cards fotos - the end
 */

import anuncio1 from "./../assets/anunciantes/objetos-1.webp";

import parceiro1 from "./../assets/transportadores/caminhao-de-mudanca-1.jpg";

/**
 * Banner principal
 */
const mainFeaturedPost = {
  title: "Transportar a um clique",
  description:
    "Conectando destinos, impulsionando negócios: SUA CARGA, NOSSA ROTA.",
  image: "https://source.unsplash.com/random?truck",
  imageText: "transportar",
  linkText: ".",
};

/**
 * Banner 1 e Banner 2
 */
const featuredPosts = [
  {
    title: "Roberto de Castro",
    date: "08, Janeiro 2024",
    description:
      "Minha mudança tinha o peso de aproximadamente 20 quilos, eram pedras para decoração do meu jardim, encaixotadas em 12 volumes.",
    image: "https://source.unsplash.com/random?box",
    imageLabel: "pacotes",
    linkTo: "https://www.google.com/search?q=caixa+de+papel%C3%A3o",
  },
  {
    title: "Levere Transporte",
    date: "23, Janeiro 2024",
    description:
      "Peguei uma carga de para duas mercearias que completou certinho os dois trechos que eu estaria viajando vazio.",
    image: "https://source.unsplash.com/random?trucker",
    imageLabel: "Image Text",
    linkTo: "https://www.google.com/search?q=caminh%C3%A3o+de+mudan%C3%A7a",
  },
  {
    title: "Maria Alice",
    date: "12, Fevereiro 2024",
    description:
      "Gostaria de enviar minha decoração por uma transportadora porque eram objetos de valor sentimental e coleções.",
    image: "https://source.unsplash.com/random?carregando-sofa",
    imageLabel: "Image Text",
    linkTo: "https://www.google.com/search?q=caminh%C3%A3o+de+mudan%C3%A7a",
  },
  {
    title: "Potencial Transporte",
    date: "28, Fevereiro 2024",
    description:
      "Completei o meu trajeto carregado por causa das três cargas que encaixarão no volume vazio que eu teria.",
    image: "https://source.unsplash.com/random?caixa-encomenda",
    imageLabel: "Image Text",
    linkTo: "https://www.google.com/search?q=transportadora+na+cidade",
  },
];

/**
 * Seções
 */
const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const pages = ["Anunciantes", "Transportadores"];

const settings = ["Alertas", "Mensagens Importantes"];

const defaultTheme = createTheme();

// AccordionTransportadores - start
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
// AccordionTransportadores - theend

// MediaCardAnunc - start
function MediaCardAnunc() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 121 }}
        image={anuncio1}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Refrigerador Expositor Vertical All Black
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            R$110,00
          </Typography>
          <Typography>
            Retirar em: Av. Paulista, 1520-1542 - Bela Vista - São Paulo - SP
          </Typography>
          <Typography>
            Entregar em: R. Rocha, 356-440 - Bela Vista - São Paulo - SP
          </Typography>
          <Typography>IDA:0506987220240215</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
// MediaCardAnunc - the end

// CustomizedAccordionsAnunc - start
function CustomizedAccordionsAnunc() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Geladeira de bar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Bicama e colchão</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Geladeira frost free </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Sofá Retrátil e Reclinável</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Mesa de cozinha </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Cadeiras de sala de aula </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
// CustomizedAccordionsAnunc - theend

// MediaCardTransp - start
function MediaCardTransp() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 121 }}
        image={parceiro1}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Caminhão Truck
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            R$125,00
          </Typography>
          <Typography>
            Origem: Av. Prof. Alfredo Balena, 400 - Centro - Belo Horizonte - MG
          </Typography>
          <Typography>Atuação em: 120km</Typography>
          <Typography>IDA:0506987220240215</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
// MediaCardTransp - the end

// CustomizedAccordionsTransp - start
function CustomizedAccordionsTransp() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Cavok Transportes / Caminhões</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardTransp />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>CP Transportes / Caminhões</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardTransp />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Ligeirinho frete / Caminhões</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardTransp />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Personnalite transportes / fretes médios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardTransp />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Gabardo / fretes médios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardTransp />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Rapidão / fretes pequenos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardTransp />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Caminhonetão / fretes pequenos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardTransp />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>DC Fretes / fretes pequenos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardTransp />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
// CustomizedAccordionsTransp - theend

// CustomTabPanel - start
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ANUNCIANTES" {...a11yProps(0)} />
          <Tab label="TRANSPORTADORES" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AnunciantesForm funcionalidade="Anunciante"/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TransportadoresForm funcionalidade="Transportador"/>
      </CustomTabPanel>
    </Box>
  );
}

// CustomTabPanel - the end

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header
        pages={pages}
        settings={settings}
        sections={sections}
        title="Volta Express"
      />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid spacing={4} sx={{ t: 2, mt: 4 }}>
            <Typography variant="h5" sx={{ t: 2, mt: 4, mb: 2 }}>
              Anunciantes
            </Typography>
            <CustomizedAccordionsAnunc />
          </Grid>
          <Grid spacing={4} sx={{ t: 2, mt: 4 }}>
            <Typography variant="h5" sx={{ t: 2, mt: 4, mb: 2 }}>
              Parceiros Transportadores
            </Typography>
            <CustomizedAccordionsTransp />
          </Grid>
          <Grid spacing={4} sx={{ t: 2, mt: 4 }}>
            <BasicTabs />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Volta Express"
        description="Transportar a um clique | Conectando destinos, impulsionando negócios: SUA CARGA, NOSSA ROTA."
      />
    </ThemeProvider>
  );
}
