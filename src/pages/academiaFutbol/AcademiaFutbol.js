import React from "react";
import Card from "../../components/molecules/card/Card";
import Header from "../../components/molecules/header/Header";
import SubHeader from "../../components/molecules/subheader/SubHeader";
import Video from "../../components/molecules/video/Video";
import Cards from "../../components/organisms/cards/Cards";
import Column from "../../components/ui/Column";
import Container from "./style";

const AcademiaFutbol = () => {
  const cards = [
    {
      title: "ACADEMIA KIDS",
      to: "/",
      years: "4-14",
      subtitle: "AÑOS",
    },
    {
      title: "CATEGORÍA JUNIOR",
      to: "/",
      years: "13-14",
      subtitle: "AÑOS",
    },
    {
      title: "CATEGORÍA PROYECCIÓN",
      to: "/",
      years: "15-16",
      subtitle: "AÑOS",
    },
    {
      title: "CATEGORÍA USA",
      to: "/",
      years: "17-20",
      subtitle: "AÑOS",
    },
  ];
  return (
    <Container>
      <Header title="ACADEMIA DE FÚTBOL" />
      <SubHeader title="categorias"></SubHeader>
      <Cards>
        {cards.map((item, i) => (
          <Card
            aa={i}
            key={i}
            linkTo={item.to}
            years={item.years}
            subtitle={item.subtitle}
            title={item.title}
          ></Card>
        ))}
      </Cards>
      <Column columns="2">
        <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V6iLWQB6hT8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
        <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V6iLWQB6hT8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
      </Column>
      <SubHeader title="Casos de exito"></SubHeader>
      <Column columns="2">
      <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V6iLWQB6hT8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
        <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V6iLWQB6hT8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
      </Column>
    </Container>
  );
};

export default AcademiaFutbol;
