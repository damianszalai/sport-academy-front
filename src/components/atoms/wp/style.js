import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;

  a {
    align-items: center;
    background: #25d366;
    border-radius: 50%;
    color: white;
    display: flex;
    font-size: 1.8em;
    height: 60px;
    justify-content: center;
    line-height: 1;
    width: 60px;

    &:active {
        transform: scale(.98);
    }
  }
`;

export default Container;
