import styled from "styled-components";
import { Colors } from "../../atoms/colors";
import { devices } from "../../atoms/devices";

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
    margin: 12px 0;
    display: grid;
    list-style: none;
    padding: 0;
    width: 90%;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;

    @media ${devices.laptop} {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      max-width: 1080px;
    }

    li {
      border-radius: 4px;
      background: ${Colors.white};
      position: relative;
      text-align: center;

      img {
        position: relative;
        top: 50px;
        max-width: 100%;
      }

      > div {
        background: ${Colors.yellow};
        width: 100%;
        text-align: center;
        padding: 24px;

        img {
          border-radius: 50%;
          position: relative;
          top: 50px;
          max-width: 100px;
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
          color: white;
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

export default Container;
