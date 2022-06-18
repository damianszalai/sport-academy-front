import styled from "styled-components";
import { Colors } from "../../styles/colors";

const Container = styled.div`
  background: ${Colors.black};
  &.fijo {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: ${Colors.black};
    top: 0;
    z-index: 11;
    overflow-y: auto;
    form {
      width: 90%;
    }
  }
  form {
    width: 100%;
    background: white;
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
    div {
      margin: 12px 0;

      label {
        font-weight: bold;
      }
      input,
      textarea,
      select {
        display: block;
        width: 100%;
        padding: 6px;
      }
      input.form-check-input[type="checkbox"] {
        width: inherit;
      }
      select,
      input.form-check-input[type="checkbox"],
      input[type="date"] {
        &:hover {
          cursor: pointer;
        }
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
        border: solid 1px ${Colors.red};
        color: ${Colors.white};
      }
    }
  }
`;

export default Container;
