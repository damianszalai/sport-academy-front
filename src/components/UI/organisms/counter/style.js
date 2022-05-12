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
    margin: 38px auto 90px;
    flex-wrap: wrap;
    flex-direction: column;

    @media ${devices.laptop} {
      flex-direction: row;
    }

    &:last-child {
      border: solid ${Colors.yellow} 5px;
      width: 560px;
      margin: auto;
      max-width: 100%;
    }
    > div {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;

      @media ${devices.laptop} {
        max-width: 800px;
        flex-direction: column;
        width: 25%;
        
      }
      &:nth-child(even) {
        flex-direction: row-reverse;
        @media ${devices.laptop} {
          
          flex-direction: column;
        }
      }
      span {
        color: white;

        &:first-child {
          font-size: 5.2rem;
          font-weight: bold;
          color: ${Colors.yellow};
          width: 50%;
          @media ${devices.laptop} {
            width: auto;
          }
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
