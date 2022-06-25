import React, { useEffect, useState } from "react";
import { hero, heroDos, heroTres } from "../../../assets";
import Container from "./style";

const Hero = () => {
  const [first, setfirst] = useState(true);
  useEffect(() => {
    let interval = setInterval(() => {
      true === first ? setfirst(false) : setfirst(true);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <Container>
      <div className="container">
        <div>
          <h1>Sport Academy</h1>
          <h2>
            Academia de alto rendimiento más grande de Chile y #1 en Gestión de
            becas en EE.UU con +350 deportistas en el extranjero.
          </h2>
        </div>
       {/*  <figure>{ <img src={first ? hero: heroDos} />}</figure> */}
        <figure>{ <img src={heroTres} />}</figure>
      </div>
    </Container>
  );
};

export default Hero;
