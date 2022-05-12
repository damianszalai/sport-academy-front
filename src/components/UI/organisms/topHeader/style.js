import styled from "styled-components";
import { bgTopHeader } from "../../../../assets";

const Container = styled.section`
  width: 100%;
  background: url(${bgTopHeader});
  > div {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: center;
      padding: 6px 0;
    a {
      text-decoration: none;
      color: #121212;
      margin: 0 12px;
      display: flex;
      i {
        margin-right: 6px;
      }
    }
  }
`;

export default Container;
