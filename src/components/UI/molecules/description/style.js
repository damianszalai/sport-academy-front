import styled from "styled-components";

const Container = styled.section`
  background: rgb(33, 37, 41);
  article {
    padding: 48px 0;
    display: flex;
    > div,
    > figure {
      width: 50%;
    }
    > figure {
      text-align: center;
    }
    > div {
      display: flex;
      flex-direction: column;
      justyfy-content: left;
      h2 {
        justyfy-content: left;
        color: #ffff33;
        font-weight: bold;
        font-size: 2.3em;
        border-bottom: #ffff33 solid 1px;
        text-transform: uppercase;
      }
      p {
        color: white;
        text-align: justify;
      }
    }
  }
`;

export default Container;
