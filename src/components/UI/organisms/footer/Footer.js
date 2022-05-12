import React from "react";
import { Link } from "react-router-dom";
import Container from "./style";

const Footer = () => {
  let today = new Date();
  let year = today.getFullYear();

  return (
    <Container className="text-center text-lg-start bg-dark text-muted">
      {/*       <div>
        <div classNameName="container clearfix">
          <div>
            Todos los derechos reservados - Sport Academy {year} - Oficina del
            Club Palestino, Av. Kennedy N°9351-
            <a classNameName="fondo-tel" href="tel:+56972842382">
              +56972842382
            </a>
            -
            <a href="mailto:contacto@sportacademy.cl">
              contacto@sportacademy.cl
            </a>
            |
            <a href="http://www.adweb.cl" target="_blank" rel="noreferrer">
              AW
            </a>
            |
            <div classNameName="social">
              <a href="http://www.adweb.cl" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="http://www.adweb.cl" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <section className="d-flex justify-content-center justify-content-lg-between p-4 container">
        <div className="me-5 d-none d-lg-block">
          <span>Seguinos en nuestras redes:</span>
        </div>

        <div>
          <a href="https://es-la.facebook.com/sportacademypro/" className="me-4 text-reset">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/sportacademypro" className="me-4 text-reset">
            <i className="bi bi-instagram"></i>
          </a>


        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Sport Academy
              </h6>
              <p>
                Tu Deporte - Tu Sueño
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
              <p>
                <Link to="/academia-futbol" className="text-reset">
                Academia Futbol
                </Link>
              </p>
              <p>
                <Link to="academia-tennis" className="text-reset">
                  Academia Tennis
                </Link>
              </p>
              <p>
                <Link to="/becas-deportivas-usa" className="text-reset">
                  Becas desportivas USA
                </Link>
              </p>
              <p>
                <Link to="/colegio-olimpo" className="text-reset">
                  Colegio Olimpo
                </Link>
              </p>
            </div>



            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
              <i className="bi bi-pin-map-fill"></i> Club Palestino, Av. Kennedy N°9351
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i> contacto@sportacademy.cl
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> +56972842382
              </p>
    
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
      /*   style="background-color: rgba(0, 0, 0, 0.05);" */
        style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}
      >
     Todos los derechos reservados - Sport Academy {year}
      </div>
    </Container>
  );
};

export default Footer;
