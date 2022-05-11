import React from "react";
import Card from "../../UI/molecules/card/Card";
import Header from "../../UI/molecules/header/Header";
import Cards from "../../UI/organisms/cards/Cards";
import Container from "./style";

const AcademiaFutbol = () => {
  const cards = [
    {
      title: "ACADEMIA KIDS",
      to: "/",
      years: "4-14",
    },
    {
      title: "CATEGORÍA JUNIOR",
      to: "/",
      years: "13-14",
    },
    {
      title: "CATEGORÍA PROYECCIÓN",
      to: "/",
      years: "15-16",
    },
    {
      title: "CATEGORÍA USA",
      to: "/",
      years: "17-20",
    }
  ];
  return (

    <Container>
      <Header title="ACADEMIA DE FÚTBOL" />
      <Cards>
        {
        cards.map((item, i) => <Card aa={i} key={i} linkTo={item.to} years={item.years} title={item.title}></Card>)
      }
      </Cards>
    </Container>
  );
};

export default AcademiaFutbol;
