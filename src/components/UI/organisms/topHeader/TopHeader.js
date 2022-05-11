import React from "react";
import Container from "./style";

const TopHeader = () => {
  return (
    <Container>
      <div>
        <a href="tel:+56972842382"><i className="bi bi-telephone-fill"></i>+56972842382</a>
        <a href="mailto:contacto@sportacademy.cl"><i className="bi bi-envelope-fill"></i> contacto@sportacademy.cl</a>
      </div>
    </Container>
  );
};

export default TopHeader;
