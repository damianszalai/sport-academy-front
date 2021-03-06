import styled, {keyframes} from "styled-components";
import { Colors } from "../../../styles/colors";
import { devices } from "../../../styles/devices";

const slide = keyframes`
  from {
    transform: translateY(-1rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity:1 ;
  }
`;


const Container = styled.nav`
  /* The dropdown container */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: transparent!important;

  .dropdown {
    z-index: 11;

    &:hover .dropdown-content {
      display: block;
     animation: ${slide} .25s ease-in-out;
    
      z-index: 111;
      opacity: 1;
    }

    .dropdown-content {
 overflow: hidden;
    }
    .dropbtn {
      font-size: 16px;
      border: none;
      outline: none;
      background-color: inherit;
      font-family: inherit; /* Important for vertical align on mobile phones */
      margin: 0; /* Important for vertical align on mobile phones */
    }
    /* Dropdown content (hidden by default) */
    .dropdown-content {
      padding: 0;
      border-radius: 4px;
      list-style: none;
      display: none;
      position: relative;
      @media ${devices.laptop} {
        position: absolute;
      }
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;

        &:hover {
          background-color: #ddd;
        }
      }
    }
  }

  .dropdown-toggle {
    &:hover {
      cursor: pointer;
    }
    & + ul {
      li {
        a {
          background: ${Colors.white};
          color: ${Colors.black};
          &:hover {
            background: grey;
          }
        }
      }
    }
    &:focus {
      & + ul {
        display: block;
      }
    }
  }
  .navbar-brand img {
    width: 60px;
    @media ${devices.laptop} {
      width: 90px;
      }
  }
  .navbar-collapse {
    flex-grow: initial !important;
  }

  .navbar-nav {
    a.nav-item.nav-link.active {
      color: ${Colors.yellow};
    }

    .nav-item.dropdown {
      &:hover {
        > div {
          display: block;
        }
      }
    }
  }
`;

export default Container;
