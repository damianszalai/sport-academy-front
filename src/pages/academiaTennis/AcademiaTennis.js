import React from "react";
import Card from "../../components/molecules/card/Card";
import Header from "../../components/molecules/header/Header";
import Cards from "../../components/organisms/cards/Cards";
import Container from "./style";

const AcademiaTennis = () => {
  const cards = [
    {
      title: "ACADEMIA DE TENIS",
      to: "/academia-tennis/grupo-proyeccion",
      years: "12-18",
      subtitle: "AÑOS"
    },
    {
      title: "GRUPO JUNIOR ELITE",
      to: "/academia-tennis/grupo-junior-elite",
      years: "2°AÑO",
      subtitle: "-14 Y -16"
    },
    {
      title: "GRUPO JUNIOR PRO",
      to: "/academia-tennis/grupo-proyeccion",
      years: "18",
      subtitle: "AÑOS"
    },
    {
      title: "GROUP PRO Y USA",
      to: "/academia-tennis/grupo-proyeccion",
      years: "DESDE",
      subtitle: "18 AÑOS"
    },
  ];
  return (
    <Container>
      <Header title="ACADEMIA DE TENIS" />
      <Cards>
        
      {
        cards.map((item, i) => <Card deporte="tennis" aa={i} key={i} linkTo={item.to} years={item.years} title={item.title} subtitle={item.subtitle}></Card>)
      }
      </Cards>
    </Container>
  );
};

export default AcademiaTennis;
