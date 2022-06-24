import styled from "styled-components";
import { Colors } from "../../../styles/colors";

const Container = styled.section`
      margin-top: 3rem;
   > section > div{
      background: ${Colors.blackSecondary};
      min-height: 300px;
      text-align: center;
      border-radius: 4px;
      color: ${Colors.white};
      padding: 2rem;
      text-align: left;
      display: flex;
      flex-direction: column;


      img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        border: none;
      }
      h3 {
        padding: 1rem 0 .2rem;
        font-size: 1.7rem;
        font-weight: bold;
        color: ${Colors.yellow};
        text-transform: capitalize;
        line-height: 1.1;
    }
    p {
        line-height: 1.1;
        font-size: 1.1rem;
        color: ${Colors.white};

      }
      a {
        color: ${Colors.white};
        text-align: right;
        display: block;
        margin-top:auto;
        text-underline-offset: .2rem;
        font-size: 1rem;
        i {
            font-size: .8rem;
        }
    
        
      }
    }
  
`;

export default Container;
