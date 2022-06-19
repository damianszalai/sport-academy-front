import styled from "styled-components";


const Container = styled.div`
  background: url(${props => props.bg}) center center no-repeat;
  background-size: cover;
  height: 150px;
  width: 100%;
`;

export default Container;
