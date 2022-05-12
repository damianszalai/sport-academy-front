import styled from "styled-components";
import { Colors } from "../../atoms/colors";

const Container = styled.section`
  width: 100%;
  background: ${Colors.black};
  padding: 36px 0;
  figure {
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;

    img {
      height: 30px;
      width: auto;
      margin: 0 12px 12px;
    }
  }
`;

export default Container;
