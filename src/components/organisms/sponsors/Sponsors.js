import React from "react";
import {
  Bsports,
  Clinica,
  gatorade,
  Lotto,
  tresSesenta,
} from "../../../assets";
import Container from "./style";

const Sponsors = () => {
  return (
    <Container className="container-fluid">
      <figure className="container">
        <img src={Bsports} alt="Bsports"/>
        <img src={gatorade} alt="gatorade"/>
        <img src={Clinica} alt="Clinica"/>
        <img src={Lotto} alt="Lotto"/>
        <img src={tresSesenta} alt="tresSesenta"/>
      </figure>
    </Container>
  );
};

export default Sponsors;
