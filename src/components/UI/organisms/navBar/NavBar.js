import React, {/*  useContext, */ useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../../../assets/index";
/* import { AuthContext } from "../../../../auth/authContext";
import { types } from "../../../../types/types"; */
import NavBarDrop from "./NavBarDrop";
import Container from "./style";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
/*   const { user, dispatch } = useContext(AuthContext);

  const handleLogout =()=> {

    const action = {
      type: types.logout
    };
    dispatch(action)
  } */


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
            <li>
            <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive && "active")
                }
                exact="true"
                to="/noticias"
              >
                Noticias
              </NavLink>
            </li>
            ? <li>
              
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive && "active")
                }
                exact="true"
                to="/login"
              >
                <span>Login</span>
              </NavLink>
            </li>
            {/* { !user.logged
           ? <li>
              
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive && "active")
                }
                exact="true"
                to="/login"
              >
                <span>Login</span>
              </NavLink>
            </li>
            :
              
            <li>
              <span>{user.name}</span>
              <button onClick={handleLogout}>Logout</button>
            </li>
        } */}
          </div>
        </div>
      </div>
    </Container>
  );
};
