import styled from "styled-components";
import { Colors } from "../../atoms/colors";

const Container = styled.div`
  width: 100%;
  margin: 120px 0;
  figure {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
      width: 30%;
      margin: 3px 1%;
      border-radius: 4px;
      
      &:hover{
          cursor: pointer;
      }
    }
  }
  .imgSelected {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background: ${Colors.black + 'f5'};
       i {
          position: absolute;
          top: 20px;
          right: 40px;
          color: ${Colors.yellow};
          font-size: 3em;
          &:hover{
          cursor: pointer;
      }
      }
      img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          max-width: 90%;
      }
  }
`;

export default Container;
