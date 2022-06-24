import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "../../molecules/subheader/SubHeader";
import Column from "../../ui/Column";
import Container from "./style";

const Servicios = () => {
  return (
    <Container>
        <h2>Servicios</h2>
        <SubHeader title="servicos"></SubHeader>
        <Column columns="4">
          <div>
            <img src="https://picsum.photos/200"></img>
            <h3>Gestión Estados Unidos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/academia-futbol">Ver más <i className="bi bi-chevron-right"></i></Link>
          </div>
          <div>
            <img src="https://picsum.photos/200"></img>
            <h3>Admision especial universidades chilenas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/academia-futbol">Ver más <i className="bi bi-chevron-right"></i></Link>
          </div>
          <div>
            <img src="https://picsum.photos/200"></img>
            <h3>Academia de Fútbol</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/academia-futbol">Ver más <i className="bi bi-chevron-right"></i></Link>
          </div>
          <div>
            <img src="https://picsum.photos/200"></img>
            <h3>Academia de Tenis</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to="/academia-tenis">Ver más <i className="bi bi-chevron-right"></i></Link>
          </div>
        </Column>

    </Container>
  );
};

export default Servicios;
