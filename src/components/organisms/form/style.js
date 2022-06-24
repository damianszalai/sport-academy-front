import styled from "styled-components";
import { Colors } from "../../../styles/colors";

const Container = styled.form`
  width: 100%;
  background: ${Colors.white};
  border-radius: 4px;
  margin: auto;
  margin-top: 24px;
  padding: 24px;
  max-width: 600px;

  h2 {
    font-weight: bold;
    font-size: 3em;
    border-bottom: solid 1px ${Colors.black};
    color: ${Colors.black};
  }

  .btn.btn-primary {
    background: transparent;
    border: solid 1px ${Colors.yellow};
    color: ${Colors.black};

    background: ${Colors.yellow};
    font-weight: bold;
    width: 100%;
    margin-top: 6px;
    border-radius: 0px;
  }
`;

export default Container;
