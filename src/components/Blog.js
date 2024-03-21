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
import anuncio2 from "./../assets/anunciantes/objetos-2.webp";
import anuncio3 from "./../assets/anunciantes/objetos-3.webp";
import anuncio4 from "./../assets/anunciantes/objetos-4.webp";
import anuncio5 from "./../assets/anunciantes/objetos-5.webp";
import anuncio6 from "./../assets/anunciantes/objetos-6.webp";

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

/**
 * Anuncios prontos
 */
const anunciosProntos = [
  {
    nome: "Geladeira de bar", 
    descricao: "Refrigerador Expositor Vertical All Black",
    volume: "3 metros (m³)",
    retirada: "Av. Paulista, 1520-1542 - Bela Vista - São Paulo - SP",
    entrega: "Entregar em: R. Rocha, 356-440 - Bela Vista - São Paulo - SP",
    idCodigo: "001A21032024",
  },
  {
    nome: "Bicama e colchão", 
    descricao: "Bicama Completa C/ Auxiliar + 2 Colchões Probel D20",
    volume: "3 metros (m³) e os 2 colchões",
    retirada: "R. dos Tamóios - Centro, Belo Horizonte - MG, 30120-050",
    entrega: "Av. Prof. Alfredo Balena, 61-37 - Centro, Belo Horizonte - MG, 30130-100",
    idCodigo: "002A21032024",
  },
  {
    nome: "Geladeira frost free", 
    descricao: "Geladeira Brastemp Frost Free Duplex 375 litros cor Inox com Espaço Adapt",
    volume: "3 metros (m³)",
    retirada: "Av. Paulista, 1520-1542 - Bela Vista - São Paulo - SP",
    entrega: "Entregar em: R. Rocha, 356-440 - Bela Vista - São Paulo - SP",
    idCodigo: "003A21032024",
  },
  {
    nome: "Sofá Retrátil e Reclinável", 
    descricao: "Sofá Retrátil e Reclinável com Molas Ensacadas Cama inBox Gold",
    volume: "4 metros (m³)",
    retirada: "Av. Paulista, 1520-1542 - Bela Vista - São Paulo - SP",
    entrega: "Entregar em: R. Rocha, 356-440 - Bela Vista - São Paulo - SP",
    idCodigo: "004A21032024",
  },
  {
    nome: "Mesa de cozinha", 
    descricao: "Conjunto Sala de Jantar Mesa Tampo de Vidro 6 Cadeiras Rustic/Crema/Imperial Alexis Madesa",
    volume: "5 caixas",
    retirada: "Av. Paulista, 1520-1542 - Bela Vista - São Paulo - SP",
    entrega: "Entregar em: R. Rocha, 356-440 - Bela Vista - São Paulo - SP",
    idCodigo: "005A21032024",
  },
  {
    nome: "Cadeiras de sala de aula", 
    descricao: "Moob Cadeira de Escritório Presidente Chicago Giratória Com Sistema Relax",
    volume: "12 itens de 1 metro (m³)",
    retirada: "Av. Paulista, 1520-1542 - Bela Vista - São Paulo - SP",
    entrega: "Entregar em: R. Rocha, 356-440 - Bela Vista - São Paulo - SP",
    idCodigo: "006A21032024",
  },
];

const pages = ["ANUNCIE SUA CARGA", "COMPLETE SUA VIAGEM"];

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
function MediaCardAnunc(props) {  

  const [order, setOrder] = React.useState(props.orderCard);
  const [imagem, setImagem] = React.useState(props.anuncioImagem);

  const theme = useTheme(); 

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 121 }}
        image={imagem}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {anunciosProntos[order].descricao}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Volume dos itens: {anunciosProntos[order].volume}
          </Typography>
          <Typography>Retirar em: {anunciosProntos[order].retirada}</Typography>
          <Typography>Entregar em: {anunciosProntos[order].entrega}</Typography>
          <Typography>IDA: {anunciosProntos[order].idCodigo}</Typography>
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
          <Typography>{anunciosProntos[0].nome}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc orderCard={0} anuncioImagem={anuncio1} />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>{anunciosProntos[1].nome}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc orderCard={1} anuncioImagem={anuncio2} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>{anunciosProntos[2].nome} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc orderCard={2} anuncioImagem={anuncio3} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>{anunciosProntos[3].nome}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc orderCard={3} anuncioImagem={anuncio4} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>{anunciosProntos[4].nome}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc orderCard={4} anuncioImagem={anuncio5} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>{anunciosProntos[5].nome}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MediaCardAnunc orderCard={5} anuncioImagem={anuncio6} />
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
          id="voltaexpressACTION"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ANUNCIE SUA CARGA" {...a11yProps(0)} />
          <Tab label="COMPLETE SUA VIAGEM" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AnunciantesForm funcionalidade="Anunciante" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TransportadoresForm funcionalidade="Transportador" />
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
