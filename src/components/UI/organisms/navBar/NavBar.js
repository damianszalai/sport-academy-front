import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../../../assets/index";
import Container from "./style";

export const Navbar = () => {
  return (
    <Container className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="sport academy logo" />
      </Link>

      <div className="navbar-collapse">
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

          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle"            >
              Dropdown
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="#">
                Action
              </NavLink>
              <NavLink className="dropdown-item" to="#">
                Another action
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to="#">
                Something else here
              </NavLink>
            </div>
          </li>
        </div>
      </div>
      </div>
    </Container>
  );
};
