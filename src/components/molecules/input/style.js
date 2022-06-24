import styled from "styled-components";
import { Colors } from "../../../styles/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: 6px 0;

  input,
  select {
    border-radius: 0px;
    height: 40px;
    border: solid 1px ${Colors.black};
    padding: 6px;
    background: ${Colors.white};
    color: ${Colors.white};
    color: ${Colors.black};

    &:focus {
      outline: solid 1px ${Colors.yellow};
      outline-offset: 2px
    }
  }
  textarea {
      height: 120px;
      padding: 6px;
      border: solid 1px ${Colors.black};
      &:focus {
        outline: solid 1px ${Colors.yellow};
        outline-offset: 2px
      }
  }
  label {
    padding-top: 12px;
    color: rgba(33, 37, 41,.7);
  }
`;

export default Container;
