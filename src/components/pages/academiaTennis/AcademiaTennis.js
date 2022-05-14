import React from "react";
import Card from "../../UI/molecules/card/Card";
import Header from "../../UI/molecules/header/Header";
import Cards from "../../UI/organisms/cards/Cards";
import Container from "./style";

const AcademiaTennis = () => {
  const cards = [
    {
      title: "ACADEMIA DE TENIS",
      to: "/academia-tennis/grupo-proyeccion",
      years: "2-18",
    },
    {
      title: "GRUPO JUNIOR ELITE",
      to: "/academia-tennis/grupo-proyeccion",
      years: "2°AÑO",
    },
    {
      title: "GRUPO JUNIOR PRO",
      to: "/academia-tennis/grupo-proyeccion",
      years: "18",
    },
    {
      title: "GROUP PRO Y USA",
      to: "/academia-tennis/grupo-proyeccion",
      years: "DESDE",
    },
  ];
  return (
    <Container>
      <Header title="ACADEMIA DE TENIS" />
      <Cards>
        
      {
        cards.map((item, i) => <Card deporte="tennis" aa={i} key={i} linkTo={item.to} years={item.years} title={item.title}></Card>)
      }
      </Cards>
    </Container>
  );
};

export default AcademiaTennis;
