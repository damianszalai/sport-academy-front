import styled from "styled-components";
import { Colors } from "../../atoms/colors";

const Container = styled.section`
  background: ${Colors.black};
  article {
    padding: 48px 0;
    display: flex;
    > div,
    > figure {
      width: 50%;
    }
    > figure {
      text-align: center;
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: left;
      h2 {
        justify-content: left;
        color: ${Colors.yellow};
        font-weight: bold;
        font-size: 2.3em;
        border-bottom: ${Colors.yellow} solid 1px;
        text-transform: uppercase;
      }
      p {
        color: white;
        text-align: justify;
      }
    }
  }
`;

export default Container;
