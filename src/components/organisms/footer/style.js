import styled from "styled-components";
import { Colors } from "../../../styles/colors";

const Container = styled.footer`
  width: 100%;
  background: ${Colors.black};
  text-align: center;
  padding: 12px 0;
  * {
    color: #666;
    transition: color 0.25s ease;
  }
  a:hover, a:hover i {
    color: ${Colors.yellow};
    cursor: pointer;
  }
`;

export default Container;
