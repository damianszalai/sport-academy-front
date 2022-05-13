import styled from "styled-components";
import { Colors } from "../../atoms/colors";
import { devices } from "../../atoms/devices";

const Container = styled.section`
  padding: 72px 0;
  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media ${devices.laptop} {
        flex-direction: row;
        align-items: baseline;
    }
    > article {
      padding: 0 24px;
      background: ${Colors.black};
      color: white;
      width: 90%;
      margin-bottom:24px;
      
      @media ${devices.laptop} {
          width: 30%;
          margin-bottom:0;
       
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
