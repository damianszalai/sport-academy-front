import styled from "styled-components";
import { Colors } from "../../../styles/colors";

const Container = styled.div`
  background: ${Colors.blackSecondary};
  padding: 1rem;
  > iframe {
    width: 100%;
  }
`;
export default Container;