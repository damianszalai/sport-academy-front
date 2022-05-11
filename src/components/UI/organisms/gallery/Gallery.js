import React from "react";
import { aaMin, bbMin, ccMin } from "../../../../assets";
import Container from "./style";

const Gallery = () => {
    
  return (
    <Container>
      <figure className="container">
        <img src={aaMin} alt="Soprt Academy 1"></img>
        <img src={bbMin} alt="Soprt Academy 2"></img>
        <img src={ccMin} alt="Soprt Academy 3"></img>
      </figure>
    </Container>
  );
};

export default Gallery;
