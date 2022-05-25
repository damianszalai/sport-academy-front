import styled from "styled-components";
import { Colors } from "../../atoms/colors";

const Container = styled.form`
  width: 100%;
  background: white;
  border-radius: 4px;
  margin: auto;
  margin-top: 24px;
  padding: 24px;
  max-width: 600px;
.progress-bar {
  margin: 0;
  background: ${Colors.yellow};
}
  h2 {
    font-weight: bold;
    font-size: 3em;
    border-bottom: solid 1px ${Colors.black};
    color: ${Colors.black};
  }
div{
  margin: 12px 0;
  input,
  textarea, select {
    display: block;
    width: 100%;
    padding: 6px;
  }
  select:hover {
    cursor: pointer;
  }
  textarea {
    min-height: 200px;
  }
}

  .btn {
    background: transparent;
    border: solid 1px ${Colors.yellow};
    color: ${Colors.black};

    background: ${Colors.yellow};
    font-weight: bold;
    margin-top: 6px;
    border-radius: 0px;
    margin-right: 12px;
    border-radius: 4px;

    &.btn-danger {
      background: ${Colors.red};
      border:solid 1px ${Colors.red};
      color: ${Colors.white};
    }
  }
`;

export default Container;
