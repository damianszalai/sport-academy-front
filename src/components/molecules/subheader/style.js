import styled from "styled-components";
import { Colors } from "../../../styles/colors";

const Container = styled.div`
  background: ${Colors.black};
  position: relative;
  padding: 24px 0;

  h2 {
    text-align:center;
    color:white;
    margin: 0;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export default Container;
