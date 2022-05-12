import styled from "styled-components";
import { Colors } from "../../atoms/colors";
import { devices } from "../../atoms/devices";

const Container = styled.section`
  width: 100%;
  background: ${Colors.black};
  text-align: center;
  padding: 12px 0;
  > div {
    display: flex;
    justify-content: space-around;
    margin: 68px auto 90px;
    flex-wrap: wrap;

    &:last-child {
      border: solid ${Colors.yellow} 5px;
      width: 560px;
      margin: auto;
      max-width: 100%;
    }
    > div {
      display: flex;
      flex-direction: column;
      width: 50%;

      @media ${devices.laptop} {
        max-width: 800px;
        width: 25%;
      }

      span {
        color: white;

        &:first-child {
          font-size: 5.2rem;
          font-weight: bold;
          color: ${Colors.yellow};
        }
        &:last-child {
          width: 100%;
          padding: 0 24px;
          text-transform: uppercase;
          font-weight: bold;
          line-height: 1.1;
          font-size: 1.1em;
        }
      }
    }
  }
`;

export default Container;
