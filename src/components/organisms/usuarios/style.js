import styled from "styled-components";
import { Colors } from "../../../styles/colors";
import { devices } from "../../../styles/devices";

const ImgStyle = styled.div`
  background: url(${(props) => props.bg}) center center no-repeat fixed;
  background-size: cover;
  height: 250px;
  width: 100%;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    background: ${Colors.white};
    padding: 24px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 12px 0;
    list-style: none;
    padding: 0;

    @media ${devices.laptop} {
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
      max-width: 1080px;
    }

    li {
      border-radius: 4px;
      background: ${Colors.white};
      position: relative;
      text-align: center;
      overflow: hidden;

      &:hover {
        > div {
          &:last-child {
            min-height: 100%;
            background: linear-gradient(
            0deg,
            ${Colors.white} 10%,
            rgba(255, 255, 51, 0) 100%
          );
          }
        }
      }
      > div {
 
        width: 100%;
        text-align: center;
        padding: 24px;
        transition: all 0.25s ease-out;
        &:last-child {
          background: linear-gradient(
            0deg,
            ${Colors.white} 10%,
            rgba(255, 255, 51, 0) 100%
          );
          padding: 3rem 1rem 1rem;
          position: absolute;
          bottom: 0;
          text-align: left;
          min-height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          h2,
          p {
            line-height: 1;
            padding: 0;
            margin: 0;
          }
          * {
            padding: 0;
            margin: 0;
          }
        }
      }
      h2 {
        font-weight: bold;
        text-transform: capitalize;
        margin-top: 30px;
        margin-bottom: 0;
      }
      p {
        padding: 2px 6px;
        margin: 0;
        line-height: 1.2;
        &:last-child {
          padding: 12px 6px;
        }
      }
      .edit {
        width: auto;

        position: absolute;
        display: flex;
        top: 10px;
        right: 10px;
        padding: 0;
        button {
          margin-left: 12px;
          background: ${Colors.black};
          color: ${Colors.white};
          padding: 0;
          line-height: 1;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          i {
            color: ${Colors.white};
          }
        }
      }

      * {
        color: ${Colors.black};
      }
    }
  }
`;

export { Container, ImgStyle };
