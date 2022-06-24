import React from "react";
import Card from "../../components/molecules/card/Card";
import Header from "../../components/molecules/header/Header";
import SubHeader from "../../components/molecules/subheader/SubHeader";
import Video from "../../components/molecules/video/Video";
import Cards from "../../components/organisms/cards/Cards";
import Column from "../../components/ui/Column";
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

export default AcademiaTennis;
