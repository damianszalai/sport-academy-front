import styled from "styled-components";
import { Colors } from "../../atoms/colors";
import { devices } from "../../atoms/devices";

const Container = styled.section`
  background: ${Colors.black};
  article {
    padding: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media ${devices.laptop} {
      flex-direction: row;
    }
    > div,
    > figure {
      width: 90%;
      @media ${devices.laptop} {
        width: 50%;
      }
    }
    > figure {
      text-align: center;
      img {
        max-width: 100%;
      }
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
