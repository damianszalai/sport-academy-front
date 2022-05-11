import styled from "styled-components";

const Container = styled.nav`
  .navbar-brand img {
    width: 180px;
  }
  .navbar-collapse {
    flex-grow: initial !important;
  }

  .navbar-nav {
    a.nav-item.nav-link.active {
      color: #ffff33;
    }

    .nav-item.dropdown:hover {
      > div {
        display: block;
      }
    }
  }
`;

export default Container;
