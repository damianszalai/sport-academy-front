import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../../../assets/index";
import NavBarDrop from "./NavBarDrop";
import Container from "./style";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="sport academy logo" />
        </Link>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse collapse  ${openMenu ? "show" : ""}`}>
          <div className="navbar-nav">
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive && "active")
                }
                exact="true"
                to="/academia-futbol"
              >
                Academia Fútbol
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive && "active")
                }
                exact="true"
                to="/academia-tennis"
              >
                Academia Tenis
              </NavLink>
            </li>
            <NavBarDrop />
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#navbarDropdownMenuLink"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="/jugadores/futbol">
                    Fútbol
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/jugadores/tenis">
                    Tenis
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive && "active")
                }
                exact="true"
                to="/becas-deportivas-usa"
              >
                Becas deportivas USA
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive && "active")
                }
                exact="true"
                to="/colegio-olimpo"
              >
                Colegio Olimpo
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </Container>
  );
};
