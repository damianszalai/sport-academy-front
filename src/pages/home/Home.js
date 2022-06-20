import React from "react";
import Counter from "../../components/organisms/counter/Counter";
import Gallery from "../../components/organisms/gallery/Gallery";
import Slider from "../../components/organisms/slider/Slider";
import Sponsors from "../../components/organisms/sponsors/Sponsors";
import NewCategory from "../../components/organisms/newsCategory/NewCategory";
import Container from "./style";

const Home = () => {
  return (
    <Container className="container-fluid">
      <Slider />
      <div className="subHero">
        <div className="container">
        <p>
          ¡VEN A MEJORAR TU RENDIMIENTO PARA OBTENER UNA BECA DEPORTIVA EN LAS
          MEJORES UNIVERSIDADES DE USA, CHILE, O PORQUÉ NO, LLEGAR A SER UN
          DEPORTISTA PROFESIONAL!
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfb56zbIvuryesCU4q7xHTgc2VB6oSigFvKfyo7mau5kqlLIg/viewform" className="btn">Postulá aquí</a>
        </div>
      </div>
      <Counter />
      <NewCategory categoria="noticias"title="Últimas Noticias" subCategoria={false}/>
      <Gallery/>
      <Sponsors />
    </Container>
  );
};

export default Home;
