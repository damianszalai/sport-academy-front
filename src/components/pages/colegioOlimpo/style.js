import styled from "styled-components";

const Container = styled.div`
  background: rgb(33, 37, 41);
  article {
    margin: auto;
    padding: 24px 0;
    min-height: 700px;
    figure {
      text-align: center;
      img {
        width: 400px;
      }
    }
    p {
      color: white;
      font-size: 1.2em;
      font-style: italic;
      span {
          display: block;
          margin: 12px 0;
          position: relative;
          font-style: normal;
          &:before {
              content: '';
              width: 0px;
              height: 0px;
              background: #ffff33;
              position: absolute;
              left: -20px;
              top: 50%;
              border-top: solid 20px #ffff33;
              border-left: solid 10px rgb(33, 37, 41);
              border-right: solid 10px rgb(33, 37, 41);
              transform: translate(-50%,-50%) rotate(-90deg);
          }
        a {
          color: #ffff33;
          transition: all .25s ease-out;
          text-underline-offset: 3px;
          font-weight: bold;
          &:hover {
              opacity: .8;
          }
        }
      }
    }
  }
`;

export default Container;
