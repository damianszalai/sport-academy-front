import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  background: #212529;
  .subHero {
    background: #ffff00;
    padding: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.4em;
      font-weight: bold;
      font-style: italic;
      line-height: 1;
      width: 700px;
      text-align:left;
      margin: 0 120px 0 0;
    }
    a {
      background: white;
      color: black;
      margin-top: 24px;
      font-weight: bold;
      padding: 0 24px;
      height: 45px;
      line-height: 45px;
      text-transform: uppercase;
      margin: 0;
    }
  }
`;

export default Container;
