import React from "react";
import Header from "../../components/molecules/header/Header";
import Usuarios from "../../components/organisms/usuarios/Usuarios";
import Container from "./style";

const JugadoresTenis = () => {
 

  return (
      <Container>
        <Header title="Jugadores Tenis" />
       <Usuarios deportes="jugadores"/>
      </Container>
  );
};

export default JugadoresTenis;
