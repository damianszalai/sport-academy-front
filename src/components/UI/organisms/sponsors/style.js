import styled from "styled-components";
import { devices } from "../../atoms/devices";

const Container = styled.section`
  width: 100%;
  background: rgba(33,37,41);
  padding: 36px 0;
  figure {
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;

    @media ${devices.laptop} {
      
    }
    

    img {
      height: 30px;
      width: auto;
      margin: 0 12px 12px;
    }
  }
`;

export default Container;
