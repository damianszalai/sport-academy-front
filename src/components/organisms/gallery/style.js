import styled from "styled-components";
import { Colors } from "../../../styles/colors";

/* const Container = styled.div`
width: 100%;
margin: 120px 0;
figure {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 12px;
  img {
    width: 100%;
    border-radius: 4px;
    
    &:hover {
      cursor: pointer;
    }
  }
}
> div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${Colors.black + "f5"};
  i {
    position: absolute;
    top: 20px;
    right: 40px;
    color: ${Colors.yellow};
    font-size: 3em;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
  }
}
`; */
const Container = styled.div`
  margin: 120px 0;
  figure {
    width: 70%;
    height: 700px;
    margin: 0 auto;

    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    > div {
      font-size: 20px;
      font-weight: 600;
      color: #1d1d1d;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      transition:all .8s ease-out;
      &:hover {
        cursor: pointer;
      }

      &:nth-child(1),
      &:nth-child(3) {
        grid-row: span 2;
        grid-column: span 2;
      }
      &:nth-child(2) {
        grid-row: span 3;
        grid-column: span 3;
      }
      &:nth-child(4) {
        grid-row: span 1;
        grid-column: span 1;
      }
      &:nth-child(6) {
        grid-row: 4 / span 3;
        grid-column: 4 / span 2;
      }
      &:nth-child(5) {
        grid-row: span 2;
        grid-column: span 3;
      }
    }
  }
  > div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${Colors.black + "f5"};
  i {
    position: absolute;
    top: 20px;
    right: 40px;
    color: ${Colors.yellow};
    font-size: 3em;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
  }
}
`;

export default Container;
