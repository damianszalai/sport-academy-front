import styled from "styled-components";
import { Colors } from "../../../styles/colors";
import { devices } from "../../../styles/devices";

const Container = styled.nav`
  /* The dropdown container */
  .dropdown {
   
    z-index: 11;
    &:hover .dropdown-content {
      display: block;
      z-index: 111;
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
          background: white;
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
    width: 90px;
  }
  .navbar-collapse {
    flex-grow: initial !important;
  }

  .navbar-nav {
    a.nav-item.nav-link.active {
      color: ${Colors.yellow};
    }

    .nav-item.dropdown:hover {
      > div {
        display: block;
      }
    }
  }
`;

export default Container;
