import styled from "styled-components";
import { Colors } from "../../atoms/colors";

const Container = styled.nav`
  .navbar-brand img {
    width: 180px;
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
