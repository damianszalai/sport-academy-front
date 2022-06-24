import React from "react";
import Container from "./style";

const SubHeader = ({ title }) => {
  return (
    <Container className="container">
        <h2>{title}</h2>
    </Container>
  );
};

export default SubHeader;
