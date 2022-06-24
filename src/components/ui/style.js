import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns && `repeat(${props.columns}, 1fr)`};
  grid-gap: 2rem;
`;

export default Container;
