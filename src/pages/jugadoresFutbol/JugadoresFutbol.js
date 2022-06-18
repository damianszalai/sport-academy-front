import React from "react";
import Header from "../../components/molecules/header/Header";
import Usuarios from "../../components/organisms/usuarios/Usuarios";
import Container from "./style";

const JugadoresFutbol = () => {
 

  return (
      <Container>
        <Header title="Jugadores Fútbol" />
       <Usuarios deportes="jugadoresFutbol"/>
      </Container>
  );
};

export default JugadoresFutbol;
