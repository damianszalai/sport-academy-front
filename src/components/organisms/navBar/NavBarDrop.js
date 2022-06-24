import React from "react";
import { NavLink } from "react-router-dom";

const NavBarDrop = ({ titulo, secciones }) => {
  return (
    <li className="dropdown">
      <button className="dropbtn nav-item nav-link">
        {titulo}
        <i className="fa fa-caret-down"></i>
      </button>
      <ul className="dropdown-content">
        {/*         <li>
          <NavLink to="/jugadores/futbol">Futbol</NavLink>
        </li>
        <li>
          <NavLink to="/jugadores/tenis">Tenis</NavLink>
        </li> */}
        {secciones.map((item) => (
          <li>
            <NavLink to={item.link}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavBarDrop;
