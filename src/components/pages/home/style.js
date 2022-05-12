import styled from "styled-components";
import { Colors } from "../../UI/atoms/colors";
import { devices } from "../../UI/atoms/devices";

const Container = styled.div`
  padding: 0;
  background: ${Colors.black};
  .subHero {
    background: ${Colors.yellow};
    .container {
      padding: 24px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media ${devices.laptop} {
        flex-direction: row;
        justify-content: space-between;
      }

      p {
        font-size: 1em;
        font-weight: bold;
        font-style: italic;
        line-height: 1;
        width: 700px;
        text-align: center;
        margin: 0 0px 12px 0;
        max-width: 100%;
        @media ${devices.laptop} {
          margin-right: 120px;
          text-align: left;
          font-size: 1.3em;
        }
      }
      a {
        background: ${Colors.black};
        color: ${Colors.white};
        margin-top: 24px;
        font-weight: bold;
        padding: 0 24px;
        height: 45px;
        line-height: 45px;
        text-transform: uppercase;
        margin: 0;
      }
    }
  }
`;

export default Container;
