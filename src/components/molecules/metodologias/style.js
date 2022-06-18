import styled from "styled-components";
import { Colors } from "../../../styles/colors";
import { devices } from "../../../styles/devices";

const Container = styled.section`
  padding: 72px 0;
  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media ${devices.laptop} {
      display: grid;
     grid-template-columns: ${(props) => props.cantidad > 0 ? `repeat(${props.cantidad}, 1fr)` : null}
       
    }
    > article {
      padding: 0 24px;
      background: ${Colors.black};
      color: white;
      width: 90%;
      margin-bottom:24px;
      
      @media ${devices.laptop} {
          width: auto;
          margin-bottom:0;
          align-self: start;
       
    }

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
