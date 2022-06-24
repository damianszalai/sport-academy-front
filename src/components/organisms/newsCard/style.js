import styled, { keyframes } from "styled-components";
import { Colors } from "../../../styles/colors";
import { devices } from "../../../styles/devices";

const loading = keyframes`
to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`;
const Container = styled.article`
height: 100%;
  > div {
    background: ${Colors.white};
    object-fit: contain;
    background: ${Colors.white};
    border-radius: 4px;
    width: 80vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    @media ${devices.laptop} {
      width: auto;
      height: 100%;
 
    }
    figure {
      img {
        width: 100%;
      }
    }

    div:nth-child(2) {
      position: relative;
      padding: 12px;
      display: flex;
      flex-direction: column;
      margin: 0;
      h2 {
        a {
          font-weight: bold;
          font-size: 1.5rem;
          line-height: 1.1;
          background: none;
          text-align: left;
          padding: 0;
          transition: all 0.25s ease-out;
          &:hover {
            color: ${Colors.black}b5;
            opacity: 0.8;
          }
        }
      }

      p {
        margin: 0;
        &.date {
          font-style: italic;
          color: grey;
          position: absolute;
          right: 12px;
          top: 12px;
        }
        &.category {
          text-transform: capitalize;
        }
        &.desc {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* number of lines to show */
          -webkit-box-orient: vertical;
        }
      }
    }
    > div {
      padding: 12px;
      margin-top: auto;

      &:first-child {
        margin-top: 0;
      }
      a {
        background: ${Colors.yellow};
        color: ${Colors.black};
        border: none;
      }
    }
  }
`;

export default Container;
