import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Order from "../../components/Order";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import "./home.css";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container className="app">
      <C.Title>
        <h2>Ferrex</h2>
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
          Sair
        </Button>
      </C.Title>
      <Order />
    </C.Container>
  );
};

export default Home;
