import React from "react";
import Container from "./style";

const Header = ({ title }) => {
  return (
    <Container>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </Container>
  );
};

export default Header;
