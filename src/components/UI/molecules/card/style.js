import styled from "styled-components";
import { devices } from "../../atoms/devices";


const Container = styled.article`
  text-align: center;
  margin: 0 12px;
  width: 90%;
  margin: 24px 0;
  @media ${devices.laptop} {
    width: 50%;
    
  }
  a {
    text-decoration: none;
    display: block;
    margin: auto;
    max-width: 400px;

    &:hover h2,
    &:hover h3 {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      left: 0
    }

    h2 {
        position:relative;
        left: 20px;
      transition: all 0.25s ease;
      background: #ffff33;
      margin: 0;
      padding: 0 6px;
      clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
      color: #212529;
      font-weight: bold;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h3 {
        position:relative;
        left: -20px;
      transition: all 0.25s ease;
      background: white;
      clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
      color: #212529;
      margin: 0;
      padding: 6px;
      font-size: 2.3em;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-weight: bold;

      span {
        font-weight: 300;
        display: block;
      }
    }
  }
`;

export default Container;
