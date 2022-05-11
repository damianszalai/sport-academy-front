import React from "react";
import Counter from "../../UI/organisms/counter/Counter";
import Gallery from "../../UI/organisms/gallery/Gallery";
import Slider from "../../UI/organisms/slider/Slider";
import Sponsors from "../../UI/organisms/sponsors/Sponsors";
import Container from "./style";

const Home = () => {
  return (
    <Container className="container-fluid">
      <Slider />
      <Counter />
      <Gallery />
      <Sponsors />
    </Container>
  );
};

export default Home;
