import styled from "styled-components";
import { Colors } from "../../atoms/colors";
import { devices } from "../../atoms/devices";

const Container = styled.header`
  background: ${Colors.yellow};
  position: relative;
  padding: 24px 0;

  &:after {
    content: "";
    width: 30%;
    height: 101%;
    position: absolute;
    right: 0;
    top: -1px;
    background: ${Colors.black};
    display: block;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 35% 100%);
    @media ${devices.laptop} {
      width: 60%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 3% 100%);
    }
  }
  h1 {
    margin: 0;
    padding-left: 40px;
    text-transform: uppercase;
    font-weight: bold;
    width: 60%;
    @media ${devices.laptop} {
      width: 40%;
    }
  }
`;

export default Container;
