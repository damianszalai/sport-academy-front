import React from "react";
import Counter from "../../UI/organisms/counter/Counter";
import Gallery from "../../UI/organisms/gallery/Gallery";
import Slider from "../../UI/organisms/slider/Slider";
import Sponsors from "../../UI/organisms/sponsors/Sponsors";
import Usuarios from "../../UI/organisms/usuarios/Usuarios";
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
      <Usuarios/>
      <Gallery/>
      <Sponsors />
    </Container>
  );
};

export default Home;
