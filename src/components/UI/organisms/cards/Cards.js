import React from "react";
/* import Card from "../../molecules/card/Card"; */
import Container from "./style";

const Cards = ({children}) => {
  return (
    <Container className="container">
      {children}
    </Container>
  );
};

export default Cards;
