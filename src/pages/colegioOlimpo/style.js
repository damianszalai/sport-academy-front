import styled from "styled-components";
import { Colors } from "../../styles/colors";
import { devices } from "../../styles/devices";

const Container = styled.section`
  background: ${Colors.black};
  p,
  h3 {
    color: ${Colors.white};
  }
  h3 {
    font-weight: bold;
    font-size: 2rem;
    border-bottom: solid 1px ${Colors.white};
    padding: 1rem 0;
    margin-bottom: 1rem;
  }
  article {
    margin: auto;
    padding: 24px 0;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    @media ${devices.laptop} {
      flex-direction: row;
    }
    figure {
      text-align: center;
      img {
        width: 100%;
        max-width: 400px;
      }
    }
    p {
      color: ${Colors.white};
      font-size: 1.2rem;
      text-align: justify;
   /*    font-style: italic; */
      span {
        display: block;
        margin: 12px 0;
        position: relative;
        font-style: normal;
        &:before {
          content: "";
          width: 0px;
          height: 0px;
          background: ${Colors.yellow};
          position: absolute;
          left: -20px;
          top: 50%;
          border-top: solid 20px ${Colors.yellow};
          border-left: solid 10px ${Colors.black};
          border-right: solid 10px ${Colors.black};
          transform: translate(-50%, -50%) rotate(-90deg);
        }
        a {
          color: ${Colors.yellow};
          transition: all 0.25s ease-out;
          text-underline-offset: 3px;
          font-weight: bold;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`;

export default Container;
