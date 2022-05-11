import styled from "styled-components";

const Container = styled.div`
  padding: 0 0 24px;
  background:rgb(33,37,41);
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
