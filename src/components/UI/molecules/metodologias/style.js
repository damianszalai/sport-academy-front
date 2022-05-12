import styled from "styled-components";
import { Colors } from "../../atoms/colors";

const Container = styled.section`
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
`;

export default Container;
