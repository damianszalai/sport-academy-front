import React from "react";
import Container from "./style";

const SubHeader = ({ title }) => {
  return (
    <Container>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </Container>
  );
};

export default SubHeader;
