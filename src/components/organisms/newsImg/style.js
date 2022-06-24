import styled from "styled-components";


const Container = styled.div`
  background: url(${props => props.bg}) center center no-repeat fixed;
  background-size: cover;
  height: 9.6rem;
  width: 100%;
`;

export default Container;
