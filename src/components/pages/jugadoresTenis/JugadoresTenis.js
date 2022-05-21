import React from "react";
import Header from "../../UI/molecules/header/Header";
import Usuarios from "../../UI/organisms/usuarios/Usuarios";
import Container from "./style";

const JugadoresTenis = () => {
 

  return (
      <Container>
        <Header title="Jugadores Tenis" />
       <Usuarios deportes="jugadoresTenis"/>
      </Container>
  );
};

export default JugadoresTenis;
