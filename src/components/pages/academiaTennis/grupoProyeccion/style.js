import styled from "styled-components";
import { Colors } from "../../../UI/atoms/colors";

const Container = styled.div`
  padding: 0 0 24px;
  background: ${Colors.black};
  margin: 0;

  section {
    display: flex;
    justify-content: space-between;

    &.videos {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    &:nth-child(2) {
      padding: 24px 0;
    }

    &:nth-child(4) {
      padding: 72px 0;

      > div {
        display: flex;
        justify-content: space-between;

        > article {
          padding: 0 24px;
          width: 30%;
          background: ${Colors.black};
          color: white;

          h2 {
            background: ${Colors.yellow};
            color: ${Colors.black};
            border-bottom: solid 1px ${Colors.yellow};
            padding: 6px 24px;
            position: relative;
            top: -40px;
            clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
            text-align: center;
            font-weight: bold;
          }

          p {
            position: relative;
            top: -30px;
            font-size: 1.1em;
            line-height: 1.3;
          }
        }
      }
    }
    &:nth-child(3) {
      background: ${Colors.black};

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
          justify-content: left;

          h2 {
            justify-content: left;
            color: ${Colors.yellow};
            font-weight: bold;
            font-size: 2.3em;
            border-bottom: ${Colors.yellow} solid 1px;
            text-transform: uppercase;
          }

          p {
            color: white;
            text-align: justify;
          }
        }
      }
    }
  }
`;

export default Container;
