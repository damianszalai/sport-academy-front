import styled from "styled-components";
import { Colors } from "../../../styles/colors";

const Container = styled.form`
  width: 100%;
  height: 100%;
  background: ${Colors.black}db;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  > .form-container {
    border-radius: 4px;
    padding: 24px;
    max-width: 600px;
    background: white;
    left: 50%;
    top: 50px;
    position: relative;
    transform: translateX(-50%);
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    &:hover {
      cursor: pointer;
      opacity: .8;
    }
  }
  .progress-bar {
    margin: 0;
    background: ${Colors.yellow};
    color: ${Colors.black};
  }
  h2 {
    font-weight: bold;
    font-size: 3em;
    border-bottom: solid 1px ${Colors.black};
    color: ${Colors.black};
  }
  div {
    margin: 12px 0;
    input,
    textarea,
    select {
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
    &.btn-secondary {
      color: #fff;
      background-color: #6c757d;
      border-color: #6c757d;
    }
    &.btn-danger {
      background: ${Colors.red};
      border: solid 1px ${Colors.red};
      color: ${Colors.white};
    }
  }
`;

export default Container;
