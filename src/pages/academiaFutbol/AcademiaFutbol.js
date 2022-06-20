import React from "react";
import Card from "../../components/molecules/card/Card";
import Header from "../../components/molecules/header/Header";
import Cards from "../../components/organisms/cards/Cards";
import Container from "./style";

const AcademiaFutbol = () => {
  
  const cards = [
    {
      title: "ACADEMIA KIDS",
      to: "/",
      years: "4-14",
      subtitle: "AÑOS"
    },
    {
      title: "CATEGORÍA JUNIOR",
      to: "/",
      years: "13-14",
      subtitle: "AÑOS"
    },
    {
      title: "CATEGORÍA PROYECCIÓN",
      to: "/",
      years: "15-16",
      subtitle: "AÑOS"
    },
    {
      title: "CATEGORÍA USA",
      to: "/",
      years: "17-20",
      subtitle: "AÑOS"
    }
  ];
  return (

    <Container>
      <Header title="ACADEMIA DE FÚTBOL" />
      <Cards>
        {
        cards.map((item, i) => <Card aa={i} key={i} linkTo={item.to} years={item.years} subtitle={item.subtitle} title={item.title}></Card>)
      }
      </Cards>
    </Container>
  );
};

export default AcademiaFutbol;
