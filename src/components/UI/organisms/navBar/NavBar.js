import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../../../assets/index";
import Container from "./style";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  
  return (
    <Container className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="sport academy logo" />
      </Link>
      <button onClick={()=>setOpenMenu(!openMenu)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className={`navbar-collapse collapse  ${openMenu ? "show" : ""}`}>
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive && "active")
            }
            exact="true"
            to="/academia-futbol"
          >
            Academia Futbol
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive && "active")
            }
            exact="true"
            to="/academia-tennis"
          >
            Academia tennis
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive && "active")
            }
            exact="true"
            to="/becas-deportivas-usa"
          >
            Becas deportivas USA
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive && "active")
            }
            exact="true"
            to="/colegio-olimpo"
          >
            Colegio Olimpo
          </NavLink>


        </div>
      </div>
      </div>
    </Container>
  );
};
