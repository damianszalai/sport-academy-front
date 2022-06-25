import styled from "styled-components";
import { Colors } from "../../../styles/colors";
import { devices } from "../../../styles/devices";

const Container = styled.section`
  margin: 2rem auto 4rem;
  > section {
    display: flex;
    flex-direction: column;
    @media ${devices.laptop} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1rem;
    }
    > div {
      color: ${Colors.white};
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      flex-direction: row;
      text-align: center;
      padding: 12px 0;
      align-items: center;
      @media ${devices.laptop} {
        display: flex;
        flex-direction: column;
      }

      &:nth-child(even) {
        flex-direction: row-reverse;
        @media ${devices.laptop} {
          flex-direction: column;
        }
        span:last-child {
          text-align: right;
          @media ${devices.laptop} {
            text-align: center;
        }
        }
      }
      > span {
        color: ${Colors.white};
        width: 50%;
        @media ${devices.laptop} {
            width: auto;
            max-width: 200px;
            line-height: 1;
        }

        &:first-child {
          font-size: 5.2rem;
          font-weight: bold;
          color: ${Colors.yellow};
          width: 50%;
          @media ${devices.laptop} {
            width: auto;
            padding: 0;
            text-align: center;
          }
        }
        &:last-child {
          text-align: left;
          padding: 0 24px;
          text-transform: uppercase;
          font-weight: bold;
          line-height: 1.1;
          font-size: 1.1em;
          @media ${devices.laptop} {
            padding: 0;
            text-align: center;
            min-height: 100px;
          }
        }
      }
    }
  }
  /*   width: 100%;
  background: ${Colors.black};
  text-align: center;
  padding: 12px 0;
  > div {
    display: flex;
    justify-content: space-around;
    margin: 38px auto 30px;
    flex-wrap: wrap;
    flex-direction: column;

    @media ${devices.laptop} {
      flex-direction: row;
    }


    > div {
      display: flex;
      flex-direction: row;
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
          padding: 0 24px;
          text-transform: uppercase;
          font-weight: bold;
          line-height: 1.1;
          font-size: 1.1em;
        }
      }
    }
  } */
`;

export default Container;
