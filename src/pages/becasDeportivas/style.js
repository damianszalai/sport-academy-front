import styled from "styled-components";
import { Colors } from "../../styles/colors";

const Container = styled.div`
  padding: 0 0 24px;
  background: ${Colors.black};
  margin: 0;

  section {
    display: flex;
    justify-content: space-between;

    &:nth-child(2) {
      padding: 24px 0;
    }
  }
`;

export default Container;
