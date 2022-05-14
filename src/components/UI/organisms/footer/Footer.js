import React from "react";
import { Link } from "react-router-dom";
import Container from "./style";

const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();

  return (
    <Container className="text-center text-lg-start bg-dark text-muted">


      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Sport Academy</h6>
              <p>Academia de alto rendimiento más grande de Chile y #1 en Gestión de becas en EE.UU con +350 deportistas en el extranjero.</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
              <p>
                <Link to="/academia-futbol">Academia Futbol</Link>
              </p>
              <p>
                <Link to="academia-tennis">Academia Tennis</Link>
              </p>
              <p>
                <Link to="/becas-deportivas-usa">Becas desportivas USA</Link>
              </p>
              <p>
                <Link to="/colegio-olimpo">Colegio Olimpo</Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <i className="bi bi-pin-map-fill"></i> Club Palestino, Av.
                Kennedy N°9351
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i> contacto@sportacademy.cl
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> +56972842382
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Nuestras Redes</h6>
              <p>
                <a
                  href="https://es-la.facebook.com/sportacademypro/"
                  className="me-4 text-reset"
                >
                  <i className="bi bi-facebook"></i>
                </a>
             
                <a
                  href="https://www.instagram.com/sportacademypro"
                  className="me-4 text-reset"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Todos los derechos reservados - Sport Academy {year}
      </div>
    </Container>
  );
};

export default Footer;
