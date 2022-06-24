import styled from "styled-components";
import { Colors } from "../../../styles/colors";

const Container = styled.div`
  background: ${Colors.black};
  > div > div {
    background: ${Colors.white};
    border-radius: 4px;
    margin: 24px auto 0;
    padding: 24px 12px;
 .btn-container {
display: flex;
align-items: center;
width: 100%;
justify-content: end;
input, select {
    max-width: 25%;
    margin-right: 4px;
    margin-right: auto;
}
select:hover {
    cursor: pointer;
}
.btn {
    margin-left: 24px;
}
}
    td {
      vertical-align: middle;
      button {
        margin-right: 6px;
      }
    }
  }
`;

export default Container;
