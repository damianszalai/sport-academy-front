import styled, { keyframes } from "styled-components";
import { Colors } from "../../../styles/colors";
import { devices } from "../../../styles/devices";

const loading = keyframes`
to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`;
const Container = styled.section`
  background: ${Colors.black};
  .placeHolderImg {
    width: 100%;
    height: 200px;
    cursor: progress;
    background: linear-gradient(0.25turn, transparent, #fff, transparent),
      linear-gradient(#eee, #eee),
      radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
      linear-gradient(#eee, #eee);
    background-repeat: no-repeat;
    background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
    background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
    animation: ${loading} 1.5s infinite;
  }
  > button {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1111;
    border-radius: 50%;
    line-height: 1;
    width: 40px;
    height: 40px;
    transform-origin: center;
    transition: all 0.25s ease-out;
    border: none;
    &.cancel {
      background: ${Colors.red};
      transform: translateX(-50%) rotate(45deg);
    }

    i {
      line-height: 1;
    }
  }
  > div {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    @media ${devices.laptop} {
      margin: auto;
    }

    > button {
      margin-top: 12px;
      background: ${Colors.yellow};
    }
    > h2 {
      color: ${Colors.white};
      display: block;
      font-weight: bold;
      font-size: 3em;
      padding: 48px 0 24px;
    }
    > div {
      /*       overflow-x: scroll;
      overflow-y: hidden;
      display: flex; */

      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      overflow-y: auto;
      overscroll-behavior-x: contain;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      @media ${devices.laptop} {
        overflow: auto;
        display: flex;
      }
      > article {
        scroll-snap-align: start;
      }
      
    }
  }
`;

export default Container;
