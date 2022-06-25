import styled, { keyframes } from "styled-components";
import { Colors } from "../../../styles/colors";
import { devices } from "../../../styles/devices";

const hola = keyframes`
    0% {
        opacity:0;
        transform: translateX(100px);
    }
    100% {
        opacity:1;
        transfom:translateX(0);
    }

`;

const Container = styled.section`
  width: 100%;
  min-height: 600px;
  background-color: #212529;
  opacity: 1;
  background: repeating-linear-gradient(
    -45deg,
    #ffe50066,
    #ffe50066 2rem,
    #212529 2rem,
    #212529 16rem
  );
  display: flex;
  align-items: center;
  padding-top: 120px;
  @media ${devices.laptop} {
    padding-top: 0;
    height: 100vh;
    min-height: 500px;
    background: repeating-linear-gradient(
      -45deg,
      #ffe50066,
      #ffe50066 5rem,
      #212529 5rem,
      #212529 50rem
    );
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    flex-direction: column;

    @media ${devices.laptop} {
      flex-direction: row;
    }
    > div {
      width: 100%;
      @media ${devices.laptop} {
        width: 60%;
        padding-left: 1.5rem;
      }
      h1 {
          font-size: 22vw;
          font-weight: bold;
          text-align: center;
          width: 100%;
          line-height: 1;
          text-transform: uppercase;
          color: ${Colors.yellow};
          @media ${devices.laptop} {
              font-size: 10vw;
            text-align: left;
            color: ${Colors.white};
          }

      }
      h2 {
        font-size: 5vw;
        line-height: 1.1;
        color: ${Colors.white};
        text-align: center;
        @media ${devices.laptop} {
            font-size: 1.4rem;
          text-align: left;
        }
      }
    }
  }
  figure {
    position: relative;
    z-index: 111;
    text-align: left;
    display: flex;
    width: 100%;
    @media ${devices.laptop} {
      width: 40%;
      height: 100%;
    }
    img {
    
      width: 100%;
      @media ${devices.laptop} {
        width: 100%;
      }
    }
  }
`;

export default Container;
